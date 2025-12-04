import { NextRequest, NextResponse } from 'next/server'

type Project = { url: string; key: string; name?: string }

function normalize(input: { url: string; key: string; name?: string }): Project {
  const url = String(input.url || '').replace(/`/g, '').trim()
  const key = String(input.key || '').trim()
  const name = input.name ? String(input.name) : undefined
  return { url, key, name }
}

function parseEnv(): Project[] {
  const json = process.env.KEEPALIVE_PROJECTS
  if (json) {
    try {
      const arr = JSON.parse(json)
      if (Array.isArray(arr)) {
        return arr.map((x) => normalize({ url: String(x.url || ''), key: String(x.key || ''), name: x.name ? String(x.name) : undefined })).filter((p) => p.url && p.key)
      }
    } catch {}
  }
  const out: Project[] = []
  for (let i = 1; i <= 10; i++) {
    const url = process.env[`KEEPALIVE_URL_${i}`]
    const key = process.env[`KEEPALIVE_KEY_${i}`]
    const name = process.env[`KEEPALIVE_NAME_${i}`]
    if (url && key) out.push(normalize({ url, key, name }))
  }
  return out
}

async function pingProject(p: Project) {
  const start = Date.now()
  const endpoint = `${p.url.replace(/\/$/, '')}/auth/v1/settings`
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), 8000)
  try {
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        apikey: p.key,
        Authorization: `Bearer ${p.key}`,
        accept: 'application/json',
        'cache-control': 'no-cache',
      },
      signal: ac.signal,
    })
    clearTimeout(t)
    let verified = false
    let data: any = null
    const ct = res.headers.get('content-type') || ''
    if (ct.includes('application/json')) {
      try { data = await res.json() } catch {}
      verified = !!data
    }
    return {
      name: p.name || undefined,
      url: p.url,
      ok: res.ok,
      status: res.status,
      ms: Date.now() - start,
      verified,
    }
  } catch (e: any) {
    clearTimeout(t)
    return {
      name: p.name || undefined,
      url: p.url,
      ok: false,
      status: 0,
      ms: Date.now() - start,
      verified: false,
      error: String(e?.message || e),
    }
  }
}

async function run(projects: Project[]) {
  const results = await Promise.allSettled(projects.map((p) => pingProject(p)))
  const normalized = results.map((r) => (r.status === 'fulfilled' ? r.value : { ok: false, status: 0, ms: 0, verified: false, error: 'unknown' }))
  const success = normalized.filter((r: any) => r.ok).length
  const failed = normalized.length - success
  return NextResponse.json(
    { count: normalized.length, success, failed, results: normalized },
    { status: failed ? 207 : 200, headers: { 'cache-control': 'no-store, max-age=0' } }
  )
}

export async function GET(req: NextRequest) {
  const projects = parseEnv()
  return run(projects)
}

export async function POST(req: NextRequest) {
  let projects = parseEnv()
  try {
    const body = await req.json()
    if (Array.isArray(body?.projects)) {
      projects = body.projects
        .map((x: any) => ({ url: String(x.url || ''), key: String(x.key || ''), name: x.name ? String(x.name) : undefined }))
        .filter((p: Project) => p.url && p.key)
    } else if (body?.url && body?.key) {
      projects = [{ url: String(body.url), key: String(body.key), name: body.name ? String(body.name) : undefined }]
    }
  } catch {}
  return run(projects)
}
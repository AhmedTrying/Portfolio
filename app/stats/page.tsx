'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Moon, Sun, RefreshCw, BarChart3, PieChart, ExternalLink, CheckCircle2 } from 'lucide-react'

type PingResult = {
  name?: string
  url: string
  ok: boolean
  status: number
  ms: number
  verified: boolean
  error?: string
}

type HistoryEntry = { ts: number; results: PingResult[] }

const FILTERS = [
  { id: 'daily', label: 'Daily', days: 1 },
  { id: 'weekly', label: 'Weekly', days: 7 },
  { id: 'monthly', label: 'Monthly', days: 30 },
]

export default function StatsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<PingResult[]>([])
  const [lastUpdated, setLastUpdated] = useState<number | null>(null)
  const [filterId, setFilterId] = useState<string>('daily')
  const [autoRefresh, setAutoRefresh] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const toggleDarkMode = () => setIsDarkMode((v) => !v)

  const saveHistory = (res: PingResult[]) => {
    try {
      const key = 'keepaliveHistory'
      const prevRaw = localStorage.getItem(key)
      const prev = prevRaw ? (JSON.parse(prevRaw) as HistoryEntry[]) : []
      const next: HistoryEntry[] = [...prev, { ts: Date.now(), results: res }].slice(-100)
      localStorage.setItem(key, JSON.stringify(next))
    } catch {}
  }

  const loadHistory = (): HistoryEntry[] => {
    try {
      const raw = localStorage.getItem('keepaliveHistory')
      return raw ? (JSON.parse(raw) as HistoryEntry[]) : []
    } catch {
      return []
    }
  }

  const filteredHistory = useMemo(() => {
    const def = FILTERS.find((f) => f.id === filterId) || FILTERS[0]
    const cutoff = Date.now() - def.days * 24 * 60 * 60 * 1000
    return loadHistory().filter((h) => h.ts >= cutoff)
  }, [filterId, lastUpdated])

  const aggregated = useMemo(() => {
    const map: Record<string, { name?: string; url: string; pings: number; ok: number; avgMs: number }> = {}
    filteredHistory.forEach((h) => {
      h.results.forEach((r) => {
        const key = r.url
        if (!map[key]) map[key] = { name: r.name, url: r.url, pings: 0, ok: 0, avgMs: 0 }
        const cur = map[key]
        cur.pings += 1
        cur.ok += r.ok ? 1 : 0
        cur.avgMs = cur.avgMs + (r.ms - cur.avgMs) / cur.pings
      })
    })
    return Object.values(map)
  }, [filteredHistory])

  const active = results.filter((r) => r.ok).length
  const total = results.length
  const ratio = total ? active / total : 0

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/keepalive', { method: 'GET', headers: { accept: 'application/json' } })
      const data = await res.json()
      const arr = Array.isArray(data?.results) ? (data.results as PingResult[]) : []
      setResults(arr)
      setLastUpdated(Date.now())
      saveHistory(arr)
    } catch (e: any) {
      setError(String(e?.message || e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = window.setInterval(fetchData, 60000)
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [autoRefresh])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 ${isDarkMode ? 'bg-slate-800/90 border-slate-700' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-3">
              <Link href="/" aria-label="Back to Portfolio" className={`text-sm font-medium ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'}`}>← Back</Link>
              <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Project Activity Stats</span>
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input aria-label="Auto refresh" type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
                Auto Refresh
              </label>
              <Button aria-label="Toggle dark mode" variant="outline" onClick={() => setIsDarkMode(!isDarkMode)} className={`${isDarkMode ? 'border-slate-600 text-yellow-300 hover:bg-slate-700' : ''}`}>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Supabase Keepalive Overview</h1>
            <div className="flex items-center gap-3">
              <div role="group" aria-label="Time filters" className="flex items-center gap-2">
                {FILTERS.map((f) => (
                  <Button key={f.id} variant={filterId === f.id ? 'default' : 'outline'} size="sm" onClick={() => setFilterId(f.id)} aria-label={`Filter ${f.label}`}
                    className={`${isDarkMode ? (filterId === f.id ? '' : 'border-slate-600') : ''}`}
                  >{f.label}</Button>
                ))}
              </div>
              <Button aria-label="Refresh pings" variant="outline" onClick={fetchData} disabled={loading}>
                <RefreshCw className={loading ? 'animate-spin' : ''} size={16} />
              </Button>
              <Button aria-label="Check projects now" onClick={fetchData} disabled={loading}>
                <CheckCircle2 size={16} />
                <span className="ml-2">Check Now</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className={`${isDarkMode ? 'bg-slate-800/70 border-slate-700' : ''} hover:shadow-md transition-shadow`}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2"><PieChart size={18} className="text-blue-500" /> Active Ratio</CardTitle>
                  <CardDescription>Active vs inactive projects</CardDescription>
                </div>
                <Badge variant={ratio >= 1 ? 'default' : 'secondary'}>{active}/{total}</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <svg width="160" height="160" viewBox="0 0 160 160" role="img" aria-label="Active projects donut">
                    <circle cx="80" cy="80" r="60" fill="none" stroke={isDarkMode ? '#334155' : '#e2e8f0'} strokeWidth="16" />
                    <circle cx="80" cy="80" r="60" fill="none" stroke="#3b82f6" strokeWidth="16" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 60}`} strokeDashoffset={`${2 * Math.PI * 60 * (1 - ratio)}`} style={{ transition: 'stroke-dashoffset 600ms ease' }} />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isDarkMode ? 'bg-slate-800/70 border-slate-700' : ''} hover:shadow-md transition-shadow`}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><BarChart3 size={18} className="text-emerald-500" /> Response Times</CardTitle>
                <CardDescription>Per-project latency (ms)</CardDescription>
              </CardHeader>
              <CardContent>
                <div role="img" aria-label="Latency bars" className="space-y-2">
                  {results.map((r) => {
                    const max = Math.max(200, ...results.map((x) => x.ms))
                    const w = Math.min(100, Math.round((r.ms / max) * 100))
                    return (
                      <div key={r.url} className="flex items-center gap-3">
                        <div className={`text-xs w-40 truncate ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{r.name || new URL(r.url).host}</div>
                        <div className="flex-1 h-3 rounded-full bg-slate-200 overflow-hidden">
                          <div className={`h-full rounded-full ${r.ok ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${w}%`, transition: 'width 500ms ease' }} />
                        </div>
                        <div className={`text-xs w-12 text-right ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{r.ms}ms</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && (
              <Card className={`${isDarkMode ? 'bg-slate-800/70 border-slate-700' : ''}`}>
                <CardHeader>
                  <CardTitle>Loading</CardTitle>
                  <CardDescription>Fetching latest pings…</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-24 animate-pulse rounded-md bg-slate-200" />
                </CardContent>
              </Card>
            )}

            {!loading && results.length === 0 && (
              <Card className={`${isDarkMode ? 'bg-slate-800/70 border-slate-700' : ''}`}>
                <CardHeader>
                  <CardTitle>No Projects</CardTitle>
                  <CardDescription>Configure environment variables in Vercel to enable keepalive.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-sm`}>Use <code>KEEPALIVE_PROJECTS</code> with URL and anon keys.</p>
                </CardContent>
              </Card>
            )}

            {results.map((r) => (
              <Card key={r.url} className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-slate-800/70 text-white' : 'bg-white'}`}>
                <CardHeader className="flex flex-row items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-base">{r.name || new URL(r.url).host}</CardTitle>
                    <CardDescription className="truncate">{r.url}</CardDescription>
                  </div>
                  <Badge variant={r.ok ? 'default' : 'destructive'} aria-label={r.ok ? 'Active' : 'Inactive'}>{r.ok ? 'Active' : 'Inactive'}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Status: {r.status}</div>
                    <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Latency: {r.ms}ms</div>
                    <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Verified: {r.verified ? 'Yes' : 'No'}</div>
                  </div>
                  {r.error && <div className="mt-2 text-xs text-rose-400">{r.error}</div>}
                  <div className="mt-4 flex items-center gap-2">
                    <Button asChild variant="outline" size="sm" className={`${isDarkMode ? 'border-slate-600' : ''}`}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" aria-label="Open project">
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-xs">
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleString() : '—'}</div>
          </div>

          {aggregated.length > 0 && (
            <div className="mt-8">
              <h2 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Aggregated Uptime ({FILTERS.find((f) => f.id === filterId)?.label})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aggregated.map((a) => (
                  <div key={a.url} className={`rounded-lg p-4 border ${isDarkMode ? 'border-slate-700 bg-slate-800/60' : 'border-slate-200 bg-white'}`}>
                    <div className="flex items-center justify-between">
                      <div className="text-sm truncate">{a.name || new URL(a.url).host}</div>
                      <Badge variant="outline" className="text-xs">{a.ok}/{a.pings}</Badge>
                    </div>
                    <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${Math.round((a.ok / Math.max(1, a.pings)) * 100)}%` }} />
                    </div>
                    <div className={`mt-2 text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Avg latency: {Math.round(a.avgMs)}ms</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 text-sm text-rose-500" role="alert">{error}</div>
          )}
        </div>
      </main>
    </div>
  )
}
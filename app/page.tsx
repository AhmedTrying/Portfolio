'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MapPin, Mail, Phone, Linkedin, Github, BookOpen, Briefcase, Code, Shield, Network, Award, ExternalLink, Menu, X, Eye, Calendar, Users, ShoppingCart, BarChart3, Smartphone, Database, Globe, Download, Brain, Moon, Sun } from 'lucide-react'
import { Chatbot } from '@/components/chatbot'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'articles', 'certifications', 'recommendations', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'articles', label: 'Articles' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'contact', label: 'Contact' }
  ]

  const projects = [
  {
    id: 'aegis-grc',
    title: 'Aegis GRC Guard — Governance, Risk & Compliance SaaS',
    subtitle: 'Multi-tenant GRC platform with Supabase & Postgres',
    problem: 'Organizations lack centralized, audit-ready GRC workflows with strict tenant isolation.',
    impact: 'Centralizes risks, controls, policies, evidence, tasks, and reports with RLS-enforced org isolation.',
    myContribution: 'Designed multi-tenant architecture, implemented RLS boundaries, role-based UI enforcement, and core GRC workflows.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui'],
    image: '/aegis-grc.vercel.app_(Nest Hub Max).png',
    isFlagship: true,
    links: {
      live: null,
      code: 'https://github.com/AhmedTrying/Aegis-GRC',
      caseStudy: true
    },
    details: {
      overview: 'Modern, multi-tenant GRC SaaS that centralizes risk, compliance, policies, evidence, tasks, and reports with audit-ready workflows.',
      problem: 'Enterprises struggle to manage GRC operations across departments and tenants without strong isolation and review workflows.',
      approach: 'Implemented org-scoped data model with Supabase RLS, role-based UI (Admin/Manager/Viewer/Owner), and structured testing and approvals.',
      result: 'Efficient tenant isolation, consistent governance workflows, and export-ready reporting across dashboards.',
      lessons: 'RLS design and segregation of duties are critical for trustworthy GRC systems; UI must strictly enforce permissions.',
      features: [
        'Risk management with acceptance workflow and audit trail',
        'Compliance controls with evidence, testing, and exceptions',
        'Policies with versions, approvals, and attestation campaigns',
        'Tasks and findings linked to risks/controls/policies',
        'Reports with dashboards and CSV/PDF exports'
      ],
      technologies: [
        'React 18',
        'TypeScript',
        'Supabase (Auth, Postgres, Storage)',
        'Tailwind CSS',
        'shadcn UI'
      ],
      architecture: [
        'Frontend: React 18 + Tailwind + shadcn UI',
        'Data: Supabase Postgres with Row-Level Security (RLS)',
        'Auth: Supabase with org-scoped providers',
        'Tooling: ESLint, TypeScript, PostCSS'
      ],
      challenges: 'Maintaining strict org isolation, SoD enforcement, and scalable performance for dashboards and listings.',
      outcome: 'Audit-ready GRC platform with strong tenant boundaries and role-based enforcement.',
      github: 'https://github.com/AhmedTrying/Aegis-GRC'
    }
  },
  {
    id: 'rishtea',
    title: 'RishTea Café Ordering Platform',
    subtitle: 'Next.js + Supabase Admin & Customer Experience',
    problem: 'Cafés need a modern ordering flow with centralized admin control and reliable data backend.',
    impact: 'Delivers streamlined customer ordering and full-featured admin dashboards with real-time data.',
    myContribution: 'Implemented Next.js application structure, admin dashboards, Supabase integration, and responsive UI.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: '/rishtea-admin-tax-settings.png',
    isFlagship: true,
    links: {
      live: null,
      code: 'https://github.com/AhmedTrying/RishTea.git',
      caseStudy: true
    },
    details: {
      overview: 'A café ordering platform with a polished customer experience and comprehensive admin dashboards backed by Supabase.',
      problem: 'Legacy ordering systems lack unified dashboards and scalable data layers, causing operational inefficiencies and limited insights.',
      approach: 'Built a Next.js app with Supabase for auth and data, designed responsive customer views, and implemented admin dashboards for orders, products, and tax settings.',
      result: 'Reduced manual processes via centralized management, improved decision-making through dashboards, and established a production-ready architecture.',
      lessons: 'Well-structured UI systems and a consistent design language improve usability. Supabase’s simple auth and storage streamline full-stack development.',
      features: [
        'Customer menu and ordering flow',
        'Admin dashboards with KPIs',
        'Orders and products management',
        'Tax rules configuration',
        'Responsive layouts for all devices'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Tailwind CSS'
      ],
      architecture: [
        'Frontend: Next.js with TypeScript',
        'Backend: Supabase REST and Realtime',
        'Styling: Tailwind CSS with component primitives',
        'Data: Postgres via Supabase'
      ],
      challenges: 'Designing cohesive admin UX while ensuring scalable data operations and responsive performance across devices.',
      outcome: 'A maintainable, scalable café platform ready for deployment and further customization.',
      github: 'https://github.com/AhmedTrying/RishTea.git'
    }
  },
  {
    id: 'tomm-danny',
    title: 'Tomm&Danny Coffee Shop',
    subtitle: 'Restaurant Management Platform',
    problem: 'Restaurants lose 15-20% revenue due to inefficient ordering and kitchen management systems.',
    impact: 'Reduced order processing time by 60% and eliminated order errors through real-time synchronization.',
    myContribution: 'Architected and developed the complete full-stack solution, implementing real-time order tracking, payment integration, and kitchen display system.',
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Real-time'],
    image: '/Tommndanny.png',
    isFlagship: true,
    links: {
      live: 'https://tomm-danny.vercel.app',
      code: 'https://github.com/AhmedTrying/TomnDanny.git',
      caseStudy: true
    },
    details: {
      overview: 'A comprehensive restaurant management system built with modern web technologies, featuring contactless ordering, kitchen management, and real-time analytics.',
      problem: 'Traditional restaurant operations suffer from inefficient order management, leading to long wait times, order errors, and poor customer experience. Manual processes create bottlenecks during peak hours.',
      approach: 'Developed a real-time, full-stack solution using Next.js 15 and Supabase, implementing QR-code ordering, kitchen display systems, and comprehensive analytics dashboard.',
      result: '60% reduction in order processing time, 95% elimination of order errors, and 40% increase in table turnover rate during peak hours.',
      lessons: 'Real-time synchronization is crucial for restaurant operations. User experience design significantly impacts adoption rates among staff and customers.',
      features: [
        'QR Code Contactless Ordering System',
        'Real-time Kitchen Display System (KDS)',
        'Point of Sale (POS) Interface',
        'Inventory Management',
        'Real-time Order Notifications',
        'Comprehensive Analytics Dashboard',
        'Staff Management System',
        'Menu Management with Categories',
        'Order History and Tracking',
        'Revenue and Sales Analytics'
      ],
      technologies: [
        'Next.js 15 (App Router)',
        'TypeScript',
        'Supabase PostgreSQL',
        'Tailwind CSS',
        'Radix UI Components',
        'Real-time Subscriptions',
        'Server Actions',
        'Responsive Design'
      ],
      architecture: [
        'Frontend: Next.js 15 with TypeScript for type safety',
        'Backend: Supabase for database and real-time functionality',
        'Styling: Tailwind CSS with Radix UI components',
        'State Management: React Server Components and Client Components',
        'Real-time Updates: Supabase real-time subscriptions'
      ],
      challenges: 'Implementing real-time order updates across multiple interfaces, ensuring data consistency, and creating an intuitive user experience for both customers and staff.',
      outcome: 'Successfully deployed a full-featured restaurant management system that streamlines operations and improves customer experience.',
      github: 'https://github.com/AhmedTrying/TomnDanny.git'
    }
  },
  {
    id: 'malaysia-dashboard',
    title: 'Malaysia Fraud Analytics Dashboard',
    subtitle: 'ML-Powered Fraud Detection',
    problem: 'Malaysia faces $2.8B annual losses from fraud with limited predictive analysis tools for prevention.',
    impact: 'Achieved 87% fraud prediction accuracy, enabling proactive prevention strategies for financial institutions.',
    myContribution: 'Built end-to-end ML pipeline with web scraping, data preprocessing, logistic regression modeling, and interactive Tableau visualizations.',
    technologies: ['Python', 'Tableau', 'Machine Learning', 'Web Scraping', 'Logistic Regression'],
    image: '/Malaysia Scam Dashboard.png',
    isFlagship: true,
    links: {
      live: null,
      code: 'https://github.com/ahmed-fraud-dashboard',
      caseStudy: true
    },
    details: {
      overview: 'A comprehensive dashboard system designed to analyze and predict scam and fraud trends in Malaysia using machine learning algorithms and data visualization.',
      problem: 'Malaysia experiences significant financial losses due to fraud, but lacks comprehensive predictive tools to identify patterns and prevent future incidents.',
      approach: 'Developed a machine learning pipeline combining web scraping for data collection, statistical analysis, and predictive modeling with interactive visualizations.',
      result: '87% prediction accuracy for fraud detection, identified 5 key fraud patterns, and provided actionable insights for prevention strategies.',
      lessons: 'Data quality is paramount for ML success. Visualization design significantly impacts stakeholder understanding and decision-making.',
      features: [
        'Real-time fraud trend analysis',
        'Predictive modeling using Logistic Regression',
        'Interactive data visualizations with Tableau',
        'Web scraping for data collection',
        'Statistical analysis and reporting'
      ],
      technologies: ['Python', 'Tableau', 'Scikit-learn', 'Pandas', 'Beautiful Soup', 'Logistic Regression'],
      challenges: 'Handling large datasets, ensuring data accuracy, and creating meaningful visualizations for complex fraud patterns.',
      outcome: 'Successfully identified key fraud patterns and provided actionable insights for fraud prevention strategies.'
    }
  },
  {
    id: 'network-enhancement',
    title: 'University Network Infrastructure',
    subtitle: 'Enterprise Network Design',
    problem: 'University campus network lacked proper segmentation and security controls, creating vulnerabilities.',
    impact: 'Designed scalable network serving 5000+ users with 99.9% uptime and enhanced security through VLAN segmentation.',
    myContribution: 'Designed complete network topology, configured VLANs and ACLs, implemented routing protocols, and established security policies.',
    technologies: ['Cisco Packet Tracer', 'VLAN', 'ACLs', 'Routing', 'Network Security'],
    image: '/University Network Infrastructure.png',
    isFlagship: false,
    links: {
      live: null,
      code: 'https://github.com/AhmedTrying/University-Network-Infrastructure-Enhancement.git',
      caseStudy: false
    },
    details: {
      overview: 'A comprehensive network infrastructure simulation for a university campus, implementing modern networking concepts and security practices.',
      features: [
        'Multi-VLAN network segmentation',
        'Inter-VLAN routing configuration',
        'Access Control Lists (ACLs) implementation',
        'Network security policies',
        'Scalable network design',
        'Performance optimization'
      ],
      technologies: ['Cisco Packet Tracer', 'VLAN Configuration', 'Static/Dynamic Routing', 'ACLs', 'Network Security'],
      challenges: 'Designing a scalable network architecture that meets security requirements while maintaining optimal performance.',
      outcome: 'Created a robust network infrastructure that improved security and performance for the simulated campus environment.'
    }
  },
  {
    id: 'password-manager',
    title: 'Secure Password Manager',
    subtitle: 'Web Security Application',
    problem: 'Users struggle with password security, often reusing weak passwords across multiple platforms.',
    impact: 'Enabled secure password management for 100+ users with bcrypt encryption and strength validation.',
    myContribution: 'Developed complete web application with secure authentication, password hashing, and intuitive UI design.',
    technologies: ['Flask', 'bcrypt', 'SQLite', 'HTML/CSS', 'JavaScript'],
    image: '/Secure Password Manager.png',
    isFlagship: false,
    links: {
      live: null,
      code: 'https://github.com/ahmed-password-manager',
      caseStudy: false
    },
    details: {
      overview: 'A secure web-based password manager that allows users to safely store and manage their passwords with strong encryption.',
      features: [
        'Secure password storage with bcrypt hashing',
        'User authentication system',
        'Password generation tool',
        'Encrypted database storage',
        'Clean and intuitive web interface',
        'Password strength validation'
      ],
      technologies: ['Flask', 'bcrypt', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
      challenges: 'Implementing secure password hashing, ensuring data protection, and creating a user-friendly interface.',
      outcome: 'Successfully created a secure password management solution with industry-standard encryption practices.'
    }
  },
  {
    id: 'aes-crypto',
    title: 'AES Cryptography Tool',
    subtitle: 'Educational Crypto App',
    problem: 'Students lack hands-on tools to understand cryptographic concepts and AES encryption methods.',
    impact: 'Created educational tool used by 200+ students to learn encryption/decryption with real-time demonstrations.',
    myContribution: 'Built interactive web application demonstrating AES-256 encryption with multiple cipher modes and educational content.',
    technologies: ['JavaScript', 'Web Crypto API', 'AES-256', 'HTML5', 'CSS3'],
    image: '/encryption-decryption-interface.png',
    isFlagship: false,
    links: {
      live: 'https://aes-crypto-tool.vercel.app',
      code: 'https://github.com/ahmed-aes-crypto',
      caseStudy: false
    },
    details: {
      overview: 'A web-based cryptography application that demonstrates AES encryption and decryption capabilities with multiple cipher modes.',
      features: [
        'AES-256 encryption/decryption',
        'Support for ECB and CBC modes',
        'Key generation and management',
        'Text and file encryption',
        'Real-time encryption/decryption',
        'Educational cryptography demonstrations'
      ],
      technologies: ['JavaScript', 'Web Crypto API', 'AES-256', 'ECB Mode', 'CBC Mode', 'HTML5', 'CSS3'],
      challenges: 'Implementing secure cryptographic operations in the browser while maintaining performance and security.',
      outcome: 'Created an educational tool that demonstrates cryptographic concepts while providing practical encryption capabilities.'
    }
  },
  {
    id: 'ping-bot',
    title: 'Network Monitoring Bot',
    subtitle: 'Automated Uptime Monitor',
    problem: 'Network administrators lack automated tools for continuous network monitoring and alerting.',
    impact: 'Reduced network downtime by 40% through automated monitoring and instant alert notifications.',
    myContribution: 'Developed automated monitoring script with email alerts, logging system, and configurable check intervals.',
    technologies: ['Linux', 'Bash', 'Cron', 'ICMP', 'Email Integration'],
    image: '/Network Monitoring Bot.png',
    isFlagship: false,
    links: {
      live: null,
      code: 'https://github.com/ahmed-ping-bot',
      caseStudy: false
    },
    details: {
      overview: 'An automated network monitoring solution that continuously checks network connectivity and provides alerts for downtime.',
      features: [
        'Automated ping monitoring',
        'Configurable check intervals',
        'Email/SMS alert system',
        'Network uptime statistics',
        'Log file management',
        'Multiple host monitoring'
      ],
      technologies: ['Bash Scripting', 'Linux Cron Jobs', 'ICMP Protocol', 'Email Integration', 'Log Management'],
      challenges: 'Creating reliable monitoring scripts that handle network failures gracefully and provide timely alerts.',
      outcome: 'Implemented a robust monitoring system that significantly improved network uptime awareness and response times.'
    }
  }
]

// Add state for showing more projects
const [showAllProjects, setShowAllProjects] = useState(false)

// Filter projects
const flagshipProjects = projects.filter(project => project.isFlagship)
const otherProjects = projects.filter(project => !project.isFlagship)
const displayedProjects = showAllProjects ? projects : flagshipProjects

  const articles = [
    {
      id: 'doc-intern-experience',
      title: 'Learning the Ropes: My Experience as a DOC Intern',
      subtitle: 'Professional Development',
      description: 'A detailed account of my internship journey as a DOC Associate, sharing insights, challenges, and key learnings from working with enterprise networking technologies.',
      publishDate: 'Published on Medium',
      readTime: '5 min read',
      tags: ['Internship', 'Networking', 'Career', 'Professional Growth'],
      image: '/networking-internship-office.png',
      mediumUrl: 'https://medium.com/@Ahmed_trying/learning-the-ropes-my-experience-as-a-doc-intern-fbafeb6ad65c',
      excerpt: 'During my internship as a DOC Associate at Magnifi Machines, I had the opportunity to dive deep into enterprise networking technologies and gain hands-on experience with industry-standard tools and practices.',
      content: {
        introduction: 'Starting my internship as a DOC Associate was both exciting and challenging. This role provided me with invaluable hands-on experience in enterprise networking and cybersecurity.',
        keyLearnings: [
          'Working with Linux systems and command-line operations',
          'Configuring and managing Fortinet firewalls',
          'Setting up Virtual Access routers and network infrastructure',
          'Implementing IPSec, VPN, and SD-WAN solutions',
          'Cloud platform management with AWS and Azure',
          'Network monitoring and troubleshooting with Zabbix',
          'Incident response and automated task scripting'
        ],
        challenges: 'The steep learning curve of enterprise networking technologies and the need to quickly adapt to complex network infrastructures while maintaining system reliability.',
        impact: 'This internship significantly enhanced my practical skills in networking and cybersecurity, providing real-world experience that complements my academic knowledge.',
        conclusion: 'The DOC internship has been instrumental in shaping my career path and providing me with the confidence to tackle complex networking challenges in professional environments.'
      }
    },
{
  id: 'mastering-putty-ssh',
  title: 'Mastering PuTTY: My Guide to Seamless SSH Connections',
  subtitle: 'Technical Tutorial',
  description: 'A comprehensive guide to using PuTTY for secure SSH connections, covering setup, configuration, and best practices for network administrators.',
  publishDate: 'Published on Medium • Nov 28, 2024',
  readTime: '4 min read',
  tags: ['SSH', 'PuTTY', 'Network Administration', 'Security', 'Tutorial'],
  image: '/Mastering PuTT  My Guide to Seamless SSH Connections.png',
  mediumUrl: 'https://medium.com/@Ahmed_trying/mastering-putty-my-guide-to-seamless-ssh-connections-831534611248',
  excerpt: 'PuTTY is a free and open-source terminal emulator that allows you to connect securely to remote machines. This guide covers everything you need to know for seamless SSH connections.',
  content: {
    introduction: 'PuTTY is an essential tool for network administrators and IT professionals who need to manage remote servers and network devices securely through SSH connections.',
    keyLearnings: [
      'Understanding PuTTY interface and basic configuration',
      'Setting up secure SSH connections to remote servers',
      'Configuring authentication methods and key management',
      'Optimizing connection settings for different network environments',
      'Troubleshooting common SSH connection issues',
      'Best practices for secure remote server management',
      'Advanced PuTTY features and customization options',
      'Session management and connection profiles'
    ],
    challenges: 'Navigating the various configuration options in PuTTY and understanding the security implications of different SSH settings while ensuring reliable connections across different network environments.',
    impact: 'This guide helps IT professionals and students master one of the most fundamental tools for secure remote server management, improving their efficiency and security practices.',
    conclusion: 'Mastering PuTTY is essential for anyone working with remote servers and network devices. Understanding its features and best practices ensures secure and efficient remote management capabilities.'
  }
}
  ]

  const recommendationLetters: { title: string; issuer: string; date: string; viewUrl: string; downloadUrl: string; summary: string }[] = [
    {
      title: 'Recommendation Letter – Faculty of Computing, UTM (Academic Advisor)',
      issuer: 'Faculty of Computing, Universiti Teknologi Malaysia',
      date: '2025-11-14',
      viewUrl: 'https://drive.google.com/file/d/1ou-abUBLjQ7GR1p3qgkuJ61lXPe5GFqm/view?usp=sharing',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1ou-abUBLjQ7GR1p3qgkuJ61lXPe5GFqm',
      summary:
        'Highlights academic progress, responsibility, and strengths in computer networks, cybersecurity, programming, and data analytics.'
    },
    {
      title: 'Recommendation Letter – Magnifi Machines (DOC Internship Supervisor)',
      issuer: 'Magnifi Machines Sdn. Bhd.',
      date: '2025-02-18',
      viewUrl: 'https://drive.google.com/file/d/1SwaP_WOUGwcsvgVq4nBnKtRXwCAu_7jK/view?usp=sharing',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1SwaP_WOUGwcsvgVq4nBnKtRXwCAu_7jK',
      summary:
        'Covers hands-on experience with Fortinet firewalls, Virtual Access routers, IPSec VPNs, SD-WAN, Linux, uptime monitoring, and professionalism.'
    },
    {
      title: 'Recommendation Letter – Final Year Project Supervisor, UTM',
      issuer: 'Faculty of Computing, Universiti Teknologi Malaysia',
      date: '2025-11-11',
      viewUrl: 'https://drive.google.com/file/d/14zOzIyEIzXfNe2LKU5xsNcgFgdidERgD/view?usp=sharing',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=14zOzIyEIzXfNe2LKU5xsNcgFgdidERgD',
      summary:
        'Emphasizes AI-driven project work, problem-solving, research ability, clear communication, and delivery of high-quality technical results.'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-700 text-white relative overflow-hidden' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}>
      {/* Background Pattern for Dark Mode */}
      {isDarkMode && (
        <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
          <div className="absolute top-10 left-10">
            <Shield size={40} className="text-blue-400" />
          </div>
          <div className="absolute top-32 right-20">
            <Network size={35} className="text-green-400" />
          </div>
          <div className="absolute top-64 left-1/4">
            <Code size={30} className="text-purple-400" />
          </div>
          <div className="absolute top-96 right-1/3">
            <Database size={45} className="text-red-400" />
          </div>
          <div className="absolute bottom-96 left-20">
            <Globe size={38} className="text-yellow-400" />
          </div>
          <div className="absolute bottom-64 right-16">
            <Award size={42} className="text-pink-400" />
          </div>
          <div className="absolute top-1/2 left-10">
            <Briefcase size={33} className="text-indigo-400" />
          </div>
          <div className="absolute top-1/3 right-10">
            <BookOpen size={36} className="text-cyan-400" />
          </div>
          <div className="absolute bottom-32 left-1/3">
            <Eye size={28} className="text-orange-400" />
          </div>
          <div className="absolute top-20 left-1/2">
            <Download size={32} className="text-teal-400" />
          </div>
          <div className="absolute bottom-20 right-1/4">
            <Mail size={34} className="text-lime-400" />
          </div>
          <div className="absolute top-80 left-3/4">
            <Phone size={29} className="text-rose-400" />
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-colors duration-300 ${isDarkMode ? 'bg-slate-800/90 border-slate-600' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle + Stats Link */}
            <div className="hidden md:flex items-center gap-3 ml-8">
              <Link href="/stats" className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`} aria-label="Open Stats">
                Stats
              </Link>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${
                      activeSection === item.id ? 'text-blue-600' : isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-3 py-2">
                  <Link href="/stats" className={`block px-3 py-2 text-base font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`} aria-label="Open Stats">Stats</Link>
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="/Ahmed Marwan.png"
                  alt="Ahmed Marwan Ali"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                Ahmed Marwan 
              </h1>
              <p className={`text-xl md:text-2xl font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Network &amp; Cybersecurity Graduate 
              </p>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>ahmedmarwan.biz@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+966543374674</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors duration-300">
                  <a href="https://linkedin.com/in/ahmedtrying" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} className="text-blue-600" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-colors duration-300">
                  <a href="https://github.com/AhmedTrying" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors duration-300">
                  <a href="https://medium.com/@Ahmed_trying" target="_blank" rel="noopener noreferrer">
                    <BookOpen size={18} className="text-green-600" />
                    Medium
                  </a>
                </Button>
              </div>
              
              <a href="https://drive.google.com/uc?export=download&id=1hiT4JLA5-3IwTekEH1Li0BfZwKsf9_SL" target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button 
                  size="lg" 
                  className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
            </div>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg mt-2"
            >
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>

      
      
      

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className={`border-0 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white' : 'bg-white'}`}>
              <CardContent className="p-8">
                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Computer Science graduate majoring in Network and Security from Universiti Teknologi Malaysia. 
                  Completed internship as a DOC Associate. Seeking a full-time opportunity in networking and cybersecurity. 
                  Passionate about building secure and efficient systems with hands-on experience in networking protocols, 
                  security practices, and modern web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-0 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Core Competencies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-blue-600" size={24} />
                  Programming Languages
                </CardTitle>
                <CardDescription>Core programming languages with strong proficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'JavaScript', 'PHP', 'Dart', 'HTML5', 'CSS3', 'TypeScript'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="text-green-600" size={24} />
                  Frameworks & Libraries
                </CardTitle>
                <CardDescription>Modern frameworks for efficient development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Express.js', 'Flutter', 'Tailwind CSS', 'Node.js'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="text-purple-600" size={24} />
                  Databases
                </CardTitle>
                <CardDescription>Database design and management systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'Firebase', 'MySQL', 'Real-time Databases'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="text-red-600" size={24} />
                  Backend & APIs
                </CardTitle>
                <CardDescription>Backend development and API design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['RESTful APIs', 'Server-side Development', 'Authentication', 'Microservices'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-indigo-600" size={24} />
                  Tools & Technologies
                </CardTitle>
                <CardDescription>Development tools and productivity software</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'VS Code', 'Figma', 'Chrome DevTools', 'Postman', 'Vercel'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Networking & Security Skills */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Networking & Security Expertise</h3>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Specialized skills in network infrastructure and cybersecurity</p>
              <div className="w-16 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="text-blue-600" size={24} />
                    Network Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['IPSec', 'VPN', 'SD-WAN', 'VLAN', 'ACLs', 'Subnetting'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="text-red-600" size={24} />
                    Security Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Fortinet', 'Zabbix', 'Virtual Access Routers', 'Packet Tracer'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="text-green-600" size={24} />
                    Cloud & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Azure', 'Docker', 'Linux', 'Bash Scripting'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Areas of Interest Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Areas of Interest</h3>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Fields I'm passionate about and actively exploring</p>
              <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Artificial Intelligence',
                'Cybersecurity',
                'Data Science', 
                'Web Development',
                'Software Architecture',
                'Cloud Computing',
                'Machine Learning',
                'DevOps',
                'UI/UX Design',
                'Blockchain Technology',
                'Internet of Things (IoT)'
              ].map((interest) => (
                <div key={interest} className="bg-green-50 hover:bg-green-100 transition-colors duration-200 rounded-lg p-4 text-center border border-green-100">
                  <span className="text-slate-700 font-medium text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className={`border-0 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="text-blue-600" size={20} />
                  DOC Associate
                </CardTitle>
                <CardDescription>Magnifi Machines • Aug 2024 – Feb 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li>• Worked with Linux, Fortinet firewalls, and Virtual Access routers</li>
                  <li>• Hands-on with IPSec, VPN, SD-WAN, AWS, and Azure</li>
                  <li>• Used Zabbix for monitoring and troubleshooting</li>
                  <li>• Managed incident response and automated tasks using scripts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="text-blue-600" size={20} />
                  Head of Computing School
                </CardTitle>
                <CardDescription>YSAG • Mar 2023 – Mar 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li>• Managed and updated the school library</li>
                  <li>• Conducted remedial IT classes and supported students</li>
                  <li>• Organized workshops and study groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="text-blue-600" size={20} />
                  E-commerce Manager
                </CardTitle>
                <CardDescription>High Sleep • Jul 2020 – Apr 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li>• Managed inventory and online sales</li>
                  <li>• Ran SEO, social media, and Google Ads campaigns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className={`border-0 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Bachelor of Computer Science (Computer Network & Security)(Hons)</CardTitle>
                <CardDescription>Universiti Teknologi Malaysia (UTM) • Aug 2021 – Jul 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-4`}>CGPA: 3.3</p>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-4`}>Proficient in TCP/IP, cryptography, firewall configuration, and secure communication systems.</p>
                
                <div className="mt-4">
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Key Coursework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Network Security & Cryptography
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Computer Networks & Protocols
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Cybersecurity & Digital Forensics
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Network Infrastructure Design
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Information Security Management
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Wireless & Mobile Security
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Network Programming
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Ethical Hacking & Penetration Testing
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Database Security
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Cloud Security Architecture
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Risk Assessment & Management
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      Software Engineering & Development
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href="/Ahmed Marwan_ Transcript - UTM.pdf" download="Ahmed_Marwan_Academic_Transcript.pdf">
                      <Download size={16} className="mr-2" />
                      Download Academic Transcript
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>High School Certificate</CardTitle>
                <CardDescription>Al-Noor School, Jeddah, Saudi Arabia • Jul 2017 – Apr 2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Completed high school education with strong academic performance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommendation Letters Section */}
      <section id="recommendations" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Recommendation Letters</h2>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-lg`}>Endorsements from academic advisors and industry supervisors</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {recommendationLetters.length === 0 ? (
            <div className={`max-w-3xl mx-auto rounded-xl border text-center p-8 ${isDarkMode ? 'border-slate-600 bg-slate-700/50 text-white' : 'border-slate-200 bg-white'}`}>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <BookOpen size={22} className="text-white" />
                </div>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>No recommendation letters yet.</p>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Add your PDFs or links to display them here.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {recommendationLetters.map((letter) => (
                <Card key={letter.title} className={`rounded-2xl border ${isDarkMode ? 'border-slate-600 bg-slate-800/60 text-white' : 'border-slate-200 bg-white'} shadow-sm hover:shadow-md transition-shadow`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <BookOpen size={18} className="text-white" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg md:text-xl leading-tight">{letter.title}</CardTitle>
                          <CardDescription className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-sm`}>{letter.issuer}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs px-2 py-1">{letter.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} text-sm leading-relaxed mb-6`}>{letter.summary}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button asChild variant="outline" className={`${isDarkMode ? 'border-slate-500 text-white hover:bg-slate-700' : ''}`}>
                        <a href={letter.viewUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${letter.title}`} className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          View
                        </a>
                      </Button>
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <a href={letter.downloadUrl} aria-label={`Download ${letter.title}`} className="flex items-center gap-2">
                          <Download size={16} />
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {displayedProjects.map((project) => (
    <Card key={project.id} className={`border-0 shadow-lg hover:shadow-xl transition-shadow group duration-300 flex flex-col h-full ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="text-sm">{project.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
          ))}
        </div>
        
        <div className="flex-grow"></div>
        
        <div className="flex gap-2 mt-auto pt-4">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.links.code || "#"} target="_blank" rel="noopener noreferrer" className={!project.links.code ? "pointer-events-none opacity-50" : ""}>
              <Github size={14} className="mr-1" />
              Code
            </a>
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1">
                <Eye size={14} className="mr-1" />
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <DialogDescription className="text-lg">{project.subtitle}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-8">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Problem</h3>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.details.problem || project.problem}</p>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{project.details.approach ? 'Approach' : 'Overview'}</h3>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.details.approach || project.details.overview}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Impact</h3>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.impact}</p>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>My Contribution</h3>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.myContribution}</p>
                  </div>
                </div>

                {project.details.result && project.details.lessons && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Result</h3>
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.details.result}</p>
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Lessons Learned</h3>
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.details.lessons}</p>
                    </div>
                  </div>
                )}

                {project.details.challenges && project.details.outcome && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Challenges & Solutions</h3>
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.details.challenges}</p>
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Outcome</h3>
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm`}>{project.details.outcome}</p>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className={`flex items-start gap-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-sm`}>
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {(project.details.technologies || project.technologies).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-3 py-1">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  {project.links.live && (
                    <Button asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Live Project
                      </a>
                    </Button>
                  )}
                  {project.links.code && (
                    <Button asChild variant="outline">
                      <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  {project.details.github && (
                    <Button asChild variant="outline">
                      <a href={project.details.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          

        </div>
      </CardContent>
    </Card>
  ))}
</div>

{/* Show More/Less Button */}
{otherProjects.length > 0 && (
  <div className="text-center mt-12">
    <Button
      onClick={() => setShowAllProjects(!showAllProjects)}
      variant="outline"
      size="lg"
      className={`${isDarkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300'}`}
    >
      {showAllProjects ? 'Show Less Projects' : `Show ${otherProjects.length} More Projects`}
    </Button>
  </div>
)}
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Featured Articles</h2>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-lg mb-6`}>Insights and experiences from my professional journey</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className={`border-0 shadow-lg hover:shadow-xl transition-shadow group duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{article.subtitle}</Badge>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-slate-500">{article.publishDate}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-4`}>{article.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                    {article.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">+{article.tags.length - 3} more</Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="flex-1" variant="outline">
                          <Eye size={16} className="mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{article.title}</DialogTitle>
                          <DialogDescription className="text-lg flex items-center gap-4">
                            <span>{article.subtitle}</span>
                            <span className="text-sm">•</span>
                            <span>{article.readTime}</span>
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Article Overview</h3>
                            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{article.excerpt}</p>
                          </div>

                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Introduction</h3>
                            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{article.content.introduction}</p>
                          </div>

                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Key Learnings</h3>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {article.content.keyLearnings.map((learning, index) => (
                                <li key={index} className={`flex items-start gap-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  {learning}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Challenges</h3>
                            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{article.content.challenges}</p>
                          </div>

                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Impact</h3>
                            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{article.content.impact}</p>
                          </div>

                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Conclusion</h3>
                            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{article.content.conclusion}</p>
                          </div>

                          <div>
                            <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Tags</h3>
                            <div className="flex flex-wrap gap-2">
                              {article.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4 pt-4 border-t">
                            <Button asChild className="flex-1">
                              <a href={article.mediumUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} className="mr-2" />
                                Read Full Article on Medium
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button asChild variant="ghost" size="sm">
                      <a href={article.mediumUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action for More Articles */}
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-slate-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">More Articles Coming Soon</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  I regularly share insights about networking, cybersecurity, and professional development. 
                  Follow me on Medium to stay updated with my latest articles and experiences.
                </p>
                <Button asChild size="lg">
                  <a href="https://medium.com/@Ahmed_trying" target="_blank" rel="noopener noreferrer">
                    <BookOpen size={18} className="mr-2" />
                    Follow on Medium
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Professional Certifications</h2>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-lg mb-6`}>Industry-recognized credentials and achievements</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cisco Certifications */}
      <div className="lg:col-span-2">
        <Card className={`border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-800">Cisco Certifications</CardTitle>
                  <p className="text-sm text-slate-600">Networking & Security Excellence</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-xs text-slate-600">Certifications</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'CCNAv7', category: 'Routing & Switching', level: 'Associate' },
                { name: 'CCNA Enterprise Networking', category: 'Security & Automation', level: 'Associate' },
                { name: 'IoT and Digital Transformation', category: 'Emerging Technologies', level: 'Specialist' },
                { name: 'Network Security', category: 'Cybersecurity', level: 'Specialist' }
              ].map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-slate-800 text-sm">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                      {cert.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600">{cert.category}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* IBM Certification */}
      <div className="lg:col-span-1">
        <Card className={`border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-2xl transition-all duration-300 h-full ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-800">IBM Certification</CardTitle>
                <p className="text-sm text-slate-600">Cybersecurity Expertise</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 border border-slate-200 hover:border-slate-400 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-slate-800 text-sm">Cybersecurity Tools & Cyberattacks</h4>
                <Badge variant="outline" className="text-xs border-slate-300 text-slate-700">
                  Professional
                </Badge>
              </div>
              <p className="text-xs text-slate-600 mb-3">Security Analysis & Threat Detection</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">Active</span>
              </div>
            </div>
            
            {/* Certification Stats */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-700 mb-1">5</div>
                <div className="text-xs text-slate-600">Total Certifications</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    {/* Certification Timeline or Additional Info */}
    <div className="mt-12">
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Committed to staying current with the latest technologies and industry best practices through ongoing professional development and certification programs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200">2021</div>
                <div className="text-sm text-blue-100">Started Certification Journey</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">5+</div>
                <div className="text-sm text-blue-100">Certifications Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">2025</div>
                <div className="text-sm text-blue-100">Pursuing Advanced Certs</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="mt-20">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Core Competencies</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="text-blue-600" size={24} />
              Programming Languages
            </CardTitle>
            <CardDescription>Core programming languages with strong proficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['C++', 'Python', 'JavaScript', 'PHP', 'Dart', 'HTML5', 'CSS3', 'TypeScript'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="text-green-600" size={24} />
              Frameworks & Libraries
            </CardTitle>
            <CardDescription>Modern frameworks for efficient development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Express.js', 'Flutter', 'Tailwind CSS', 'Node.js'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="text-purple-600" size={24} />
              Databases
            </CardTitle>
            <CardDescription>Database design and management systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Firebase', 'MySQL', 'Real-time Databases'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="text-red-600" size={24} />
              Backend & APIs
            </CardTitle>
            <CardDescription>Backend development and API design</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['RESTful APIs', 'Server-side Development', 'Authentication', 'Microservices'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-indigo-600" size={24} />
              Tools & Technologies
            </CardTitle>
            <CardDescription>Development tools and productivity software</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['Git', 'VS Code', 'Figma', 'Chrome DevTools', 'Postman', 'Vercel'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Networking & Security Expertise</h3>
          <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Specialized skills in network infrastructure and cybersecurity</p>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="text-blue-600" size={24} />
                Network Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['IPSec', 'VPN', 'SD-WAN', 'VLAN', 'ACLs', 'Subnetting'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="text-red-600" size={24} />
                Security Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Fortinet', 'Zabbix', 'Virtual Access Routers', 'Packet Tracer'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-slate-600/80 text-white hover:bg-slate-600' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="text-green-600" size={24} />
                Cloud & DevOps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Docker', 'Linux', 'Bash Scripting'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Areas of Interest</h3>
          <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Fields I'm passionate about and actively exploring</p>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Artificial Intelligence',
            'Cybersecurity',
            'Data Science', 
            'Web Development',
            'Software Architecture',
            'Cloud Computing',
            'Machine Learning',
            'DevOps',
            'UI/UX Design',
            'Blockchain Technology',
            'Internet of Things (IoT)'
          ].map((interest) => (
            <div key={interest} className="bg-green-50 hover:bg-green-100 transition-colors duration-200 rounded-lg p-4 text-center border border-green-100">
              <span className="text-slate-700 font-medium text-sm">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss networking, cybersecurity, or potential projects.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Mail className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-slate-300">ahmedmarwan.biz@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-slate-300">+966543374674</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-slate-300">Riyadh, Saudi Arabia</p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800">
                <a href="https://linkedin.com/in/ahmedtrying" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800">
                <a href="https://github.com/AhmedTrying" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800">
                <a href="https://medium.com/@Ahmed_trying" target="_blank" rel="noopener noreferrer">
                  <BookOpen size={20} className="mr-2" />
                  Medium
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Ahmed Marwan Ali. All rights reserved.</p>
        </div>
      </footer>

      {/* AI-Powered Chatbot */}
      <Chatbot 
        vectorShiftUrl="https://app.vectorshift.ai/chatbots/deployed/6895e9b7bb36832ed19ec40f" 
        useIframe={true}
      />
    </div>
  )
}

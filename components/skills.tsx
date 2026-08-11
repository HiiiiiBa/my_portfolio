'use client'

import { useState, useEffect, useRef } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { Play, Pause } from 'lucide-react'
import { SectionHeader } from './ui/section-header'

interface Skill {
  name: string
  logo?: string
  emoji?: string
}

interface SkillGroup {
  id: string
  labelFr: string
  labelEn: string
  icon: string
  skills: Skill[]
}

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    labelFr: 'Frontend',
    labelEn: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'JavaScript',   logo: `${CDN}/javascript/javascript-original.svg` },
      { name: 'TypeScript',   logo: `${CDN}/typescript/typescript-original.svg` },
      { name: 'React',        logo: `${CDN}/react/react-original.svg` },
      { name: 'Next.js',      logo: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Vite',         logo: `${CDN}/vite/vite-original.svg` },
      { name: 'Tailwind',     logo: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'HTML',         logo: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS',          logo: `${CDN}/css3/css3-original.svg` },
    ],
  },
  {
    id: 'backend',
    labelFr: 'Backend',
    labelEn: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java',     logo: `${CDN}/java/java-original.svg` },
      { name: 'Spring',   logo: `${CDN}/spring/spring-original.svg` },
      { name: 'PHP',      logo: `${CDN}/php/php-original.svg` },
      { name: 'Python',   logo: `${CDN}/python/python-original.svg` },
      { name: 'Node.js',  logo: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'FastAPI',  logo: `${CDN}/fastapi/fastapi-original.svg` },
      { name: 'Laravel',  logo: `${CDN}/laravel/laravel-original.svg` },
    ],
  },
  {
    id: 'data',
    labelFr: 'Data & IA',
    labelEn: 'Data & AI',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', emoji: '🧠' },
      { name: 'Deep Learning',    emoji: '🔬' },
      { name: 'NLP',              emoji: '💬' },
      { name: 'CNN / LSTM',       emoji: '🕸️' },
      { name: 'Word2Vec',         emoji: '📝' },
      { name: 'CamemBERT',        emoji: '🧀' },
      { name: 'Streamlit',        logo: `${CDN}/streamlit/streamlit-original.svg` },
    ],
  },
  {
    id: 'database',
    labelFr: 'Bases de Données',
    labelEn: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', logo: `${CDN}/postgresql/postgresql-original.svg` },
      { name: 'MySQL',      logo: `${CDN}/mysql/mysql-original.svg` },
      { name: 'SQLite',     logo: `${CDN}/sqlite/sqlite-original.svg` },
      { name: 'Prisma',     logo: `${CDN}/prisma/prisma-original.svg` },
      { name: 'Hibernate',  emoji: '🗃️' },
    ],
  },
  {
    id: 'devops',
    labelFr: 'DevOps & Cloud',
    labelEn: 'DevOps & Cloud',
    icon: '🛠️',
    skills: [
      { name: 'Docker',         logo: `${CDN}/docker/docker-original.svg` },
      { name: 'GitHub Actions', logo: `${CDN}/githubactions/githubactions-original.svg` },
      { name: 'Kubernetes',     logo: `${CDN}/kubernetes/kubernetes-plain.svg` },
      { name: 'Traefik',        emoji: '🚦' },
      { name: 'Terraform',      logo: `${CDN}/terraform/terraform-original.svg` },
      { name: 'Ansible',        logo: `${CDN}/ansible/ansible-original.svg` },
      { name: 'Oracle Cloud',   logo: `${CDN}/oracle/oracle-original.svg` },
      { name: 'Git',            logo: `${CDN}/git/git-original.svg` },
      { name: 'GitHub',         logo: `${CDN}/github/github-original.svg` },
      { name: 'Linux',          logo: `${CDN}/linux/linux-original.svg` },
    ],
  },
  {
    id: 'monitoring',
    labelFr: 'Observabilité & Qualité',
    labelEn: 'Observability & Quality',
    icon: '📊',
    skills: [
      { name: 'Prometheus', logo: `${CDN}/prometheus/prometheus-original.svg` },
      { name: 'Grafana',    logo: `${CDN}/grafana/grafana-original.svg` },
      { name: 'Loki',       emoji: '📋' },
      { name: 'Cypress',    logo: `${CDN}/cypressio/cypressio-original.svg` },
      { name: 'JUnit',      emoji: '🧪' },
      { name: 'Vitest',     logo: `${CDN}/vitest/vitest-original.svg` },
      { name: 'SonarQube',  logo: `${CDN}/sonarqube/sonarqube-original.svg` },
    ],
  },
]

export function Skills() {
  const { t, language } = useApp()
  const [activeTab, setActiveTab] = useState('frontend')
  const [isHovered, setIsHovered] = useState(false)
  const [isManualPaused, setIsManualPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const isPaused = isHovered || isManualPaused
  const groupIds = skillGroups.map((g) => g.id)

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const idx = groupIds.indexOf(prev)
        return groupIds[(idx + 1) % groupIds.length]
      })
    }, 2800)
  }

  useEffect(() => {
    if (!isPaused) startInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPaused])

  const handleTabClick = (id: string) => {
    setActiveTab(id)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!isPaused) startInterval()
  }

  const active = skillGroups.find((g) => g.id === activeTab)!

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      <style>{`
        @keyframes skillsProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes skill-card-in {
          from { opacity: 0; transform: scale(0.92) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Tech Stack"
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mb-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {skillGroups.map((group) => {
            const isActive = activeTab === group.id
            return (
              <button
                key={group.id}
                id={`skill-tab-${group.id}`}
                onClick={() => handleTabClick(group.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-accent text-accent-foreground shadow-md -translate-y-0.5'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <span>{group.icon}</span>
                <span>{language === 'fr' ? group.labelFr : group.labelEn}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
                )}
              </button>
            )
          })}
        </div>

        {/* Progress indicators */}
        <div
          className="flex justify-center items-center mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-2">
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => handleTabClick(group.id)}
                className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                  activeTab === group.id ? 'w-10 bg-accent/30' : 'w-2 bg-border'
                }`}
                aria-label={group.labelFr}
              >
                {activeTab === group.id && (
                  <span
                    key={activeTab + '-' + isPaused}
                    className="absolute left-0 top-0 h-full bg-accent"
                    style={{
                      animation: isPaused ? 'none' : 'skillsProgress 2800ms linear forwards',
                      width: isPaused ? '0%' : undefined,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsManualPaused((prev) => !prev)}
            className="ml-3 p-1.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
            title={isManualPaused ? 'Play' : 'Pause'}
          >
            {isManualPaused ? (
              <Play className="w-3 h-3 fill-current" />
            ) : (
              <Pause className="w-3 h-3 fill-current" />
            )}
          </button>
        </div>

        {/* Skills panel */}
        <div
          key={activeTab}
          className="rounded-3xl p-6 sm:p-8 bg-card/80 border border-border shadow-xl backdrop-blur-xl animate-fade-in"
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">{active.icon}</span>
            <h3 className="text-lg font-bold text-foreground">
              {language === 'fr' ? active.labelFr : active.labelEn}
            </h3>
            <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full font-semibold bg-accent/10 border border-accent/20 text-accent">
              {active.skills.length} {language === 'fr' ? 'compétences' : 'skills'}
            </span>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {active.skills.map((skill, idx) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl cursor-default transition-all duration-300 bg-background/60 border border-border/60 hover:border-accent/50 hover:bg-accent/10 hover:shadow-md hover:-translate-y-1"
                style={{
                  animation: `skill-card-in 0.3s ease ${idx * 0.04}s both`,
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  ) : (
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {skill.emoji}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-center leading-tight text-foreground/80">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

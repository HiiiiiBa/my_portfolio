'use client'

import { useState, useEffect, useRef } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { Play, Pause } from 'lucide-react'

interface Skill {
  name: string
  logo?: string   // devicon CDN URL
  emoji?: string  // fallback for skills without logo
}

interface SkillGroup {
  id: string
  labelFr: string
  labelEn: string
  icon: string
  color: string
  activeBg: string
  activeBorder: string
  skills: Skill[]
}

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    labelFr: 'Frontend',
    labelEn: 'Frontend',
    icon: '🖥️',
    color: 'text-blue-500',
    activeBg: 'bg-blue-500/10',
    activeBorder: 'border-blue-500/30',
    skills: [
      { name: 'HTML5',          logo: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3',           logo: `${CDN}/css3/css3-original.svg` },
      { name: 'JavaScript',     logo: `${CDN}/javascript/javascript-original.svg` },
      { name: 'TypeScript',     logo: `${CDN}/typescript/typescript-original.svg` },
      { name: 'React',          logo: `${CDN}/react/react-original.svg` },
      { name: 'Next.js',        logo: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Tailwind CSS',   logo: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Bootstrap',      logo: `${CDN}/bootstrap/bootstrap-original.svg` },
    ],
  },
  {
    id: 'backend',
    labelFr: 'Backend',
    labelEn: 'Backend',
    icon: '⚙️',
    color: 'text-emerald-500',
    activeBg: 'bg-emerald-500/10',
    activeBorder: 'border-emerald-500/30',
    skills: [
      { name: 'Python',         logo: `${CDN}/python/python-original.svg` },
      { name: 'FastAPI',        logo: `${CDN}/fastapi/fastapi-original.svg` },
      { name: 'Laravel',        logo: `${CDN}/laravel/laravel-original.svg` },
      { name: 'Spring Boot',    logo: `${CDN}/spring/spring-original.svg` },
      { name: 'Node.js',        logo: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'PHP',            logo: `${CDN}/php/php-original.svg` },
      { name: 'REST API',       emoji: '🔌' },
    ],
  },
  {
    id: 'data',
    labelFr: 'Data & IA',
    labelEn: 'Data & AI',
    icon: '🤖',
    color: 'text-violet-500',
    activeBg: 'bg-violet-500/10',
    activeBorder: 'border-violet-500/30',
    skills: [
      { name: 'Machine Learning',  emoji: '🧠' },
      { name: 'Deep Learning',     emoji: '🔬' },
      { name: 'NLP',               emoji: '💬' },
      { name: 'CNN / LSTM',        emoji: '🕸️' },
      { name: 'SVM / KNN',         emoji: '📊' },
      { name: 'Word2Vec',          emoji: '📝' },
      { name: 'TF-IDF',            emoji: '🔢' },
      { name: 'CamemBERT',         emoji: '🧀' },
      { name: 'Streamlit',         logo: `${CDN}/streamlit/streamlit-original.svg` },
      { name: 'CRISP-DM',          emoji: '🔄' },
    ],
  },
  {
    id: 'database',
    labelFr: 'Bases de Données',
    labelEn: 'Databases',
    icon: '🗄️',
    color: 'text-amber-500',
    activeBg: 'bg-amber-500/10',
    activeBorder: 'border-amber-500/30',
    skills: [
      { name: 'PostgreSQL',     logo: `${CDN}/postgresql/postgresql-original.svg` },
      { name: 'MySQL',          logo: `${CDN}/mysql/mysql-original.svg` },
      { name: 'MongoDB',        logo: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'Redis',          logo: `${CDN}/redis/redis-original.svg` },
      { name: 'Eloquent ORM',   emoji: '🔗' },
      { name: 'Power BI',       emoji: '📈' },
      { name: 'Pentaho',        emoji: '🧩' },
      { name: 'SAS',            emoji: '📉' },
    ],
  },
  {
    id: 'devops',
    labelFr: 'DevOps & Outils',
    labelEn: 'DevOps & Tools',
    icon: '🛠️',
    color: 'text-rose-500',
    activeBg: 'bg-rose-500/10',
    activeBorder: 'border-rose-500/30',
    skills: [
      { name: 'Git',            logo: `${CDN}/git/git-original.svg` },
      { name: 'GitHub',         logo: `${CDN}/github/github-original.svg` },
      { name: 'Docker',         logo: `${CDN}/docker/docker-original.svg` },
      { name: 'AWS',            logo: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Linux',          logo: `${CDN}/linux/linux-original.svg` },
      { name: 'Postman',        logo: `${CDN}/postman/postman-original.svg` },
      { name: 'Figma',          logo: `${CDN}/figma/figma-original.svg` },
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

  const groupIds = skillGroups.map(g => g.id)

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveTab(prev => {
        const idx = groupIds.indexOf(prev)
        return groupIds[(idx + 1) % groupIds.length]
      })
    }, 2500)
  }

  useEffect(() => {
    if (!isPaused) {
      startInterval()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  const handleTabClick = (id: string) => {
    setActiveTab(id)
    // Reset timer on manual click
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!isPaused) startInterval()
  }

  const active = skillGroups.find(g => g.id === activeTab)!

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 border-t border-border/50"
    >
      <style>{`
        @keyframes skillsProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t('skills.title')}
          </h2>
          <p className="text-muted-foreground">{t('skills.subtitle')}</p>
        </div>

        {/* Category Tabs */}
        <div 
          className="flex flex-wrap justify-center gap-2 mb-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => handleTabClick(group.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTab === group.id
                  ? `${group.activeBg} ${group.color} ${group.activeBorder} shadow-sm`
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted/40'
              }`}
            >
              <span>{group.icon}</span>
              <span>{language === 'fr' ? group.labelFr : group.labelEn}</span>
              {/* Active indicator dot */}
              {activeTab === group.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Auto-play progress bar */}
        <div 
          className="flex justify-center items-center mb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-2">
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => handleTabClick(group.id)}
                className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
                  activeTab === group.id
                    ? 'w-12 bg-muted-foreground/20'
                    : 'w-2 bg-border hover:bg-muted-foreground/50'
                }`}
                aria-label={group.labelFr}
              >
                {activeTab === group.id && (
                  <span
                    key={activeTab + '-' + isPaused}
                    className={`absolute left-0 top-0 h-full ${active.color.replace('text-', 'bg-')}`}
                    style={{
                      animation: isPaused ? 'none' : 'skillsProgress 2500ms linear forwards',
                      width: isPaused ? '0%' : undefined
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsManualPaused(prev => !prev)}
            className="ml-3 p-1.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center justify-center border border-border cursor-pointer"
            title={isManualPaused ? (language === 'fr' ? "Reprendre la rotation" : "Play rotation") : (language === 'fr' ? "Pause de la rotation" : "Pause rotation")}
          >
            {isManualPaused ? (
              <Play className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Pause className="w-3.5 h-3.5 fill-current" />
            )}
          </button>
        </div>

        {/* Skills Cards with Logos */}
        <div 
          className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${active.activeBg} ${active.activeBorder}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{active.icon}</span>
            <h3 className={`text-lg font-semibold ${active.color}`}>
              {language === 'fr' ? active.labelFr : active.labelEn}
            </h3>
            <span className="ml-auto text-xs text-muted-foreground">
              {active.skills.length} {language === 'fr' ? 'compétences' : 'skills'}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {active.skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-background/70 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200 cursor-default"
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
                <span className="text-xs font-medium text-center text-foreground/80 leading-tight">
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

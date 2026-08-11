'use client'

import { useApp } from '@/lib/context/AppContext'
import { ExternalLink, Code2, Sparkles } from 'lucide-react'
import { SectionHeader } from './ui/section-header'

interface Project {
  id: number
  period: string
  titleEn: string
  titleFr: string
  achievementsEn: string[]
  achievementsFr: string[]
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

const TAG_STYLES: Record<string, string> = {
  'Python':     'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Next.js':    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'FastAPI':    'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'PostgreSQL': 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  'React':      'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'Laravel':    'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  'Redis':      'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
  'AWS':        'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'Docker':     'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'NLP':        'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  'Spring Boot':'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
}

export function Projects() {
  const { language, t } = useApp()

  const projects: Project[] = [
    {
      id: 1,
      period: '2025 – 2026',
      titleEn: 'CitéConnect – Urban Reporting App',
      titleFr: 'CitéConnect – App de Signalement Urbain',
      achievementsEn: [
        'REST architecture with Spring Boot',
        'Next.js, React and TypeScript frontend',
        'Geolocation + role management (citizen, technician, admin)',
        'Dashboards, notifications and report generation',
      ],
      achievementsFr: [
        'Architecture REST avec Spring Boot',
        'Frontend Next.js, React et TypeScript',
        'Géolocalisation + gestion des rôles (citoyen, technicien, admin)',
        'Tableaux de bord, notifications et génération de rapports',
      ],
      tags: ['Spring Boot', 'Next.js', 'PostgreSQL', 'React'],
      image: '/citeconnect.png',
      liveUrl: 'https://cite-connect.vercel.app',
      githubUrl: 'https://github.com/HiiiiiBa/Cite_Connect',
    },
    {
      id: 2,
      period: '2025 – 2026',
      titleEn: 'AI Disciplinary Council – Web App',
      titleFr: 'Conseil Disciplinaire IA – Web App',
      achievementsEn: [
        'NLP models (CamemBERT) for automatic incident classification',
        'Violence detection and facial recognition system',
        'Next.js + React frontend — FastAPI backend',
        'PostgreSQL database + full test suite',
      ],
      achievementsFr: [
        'Modèles NLP (CamemBERT) pour la classification automatique',
        'Système de détection de violence et reconnaissance faciale',
        'Frontend Next.js + React — Backend FastAPI',
        'Base de données PostgreSQL + tests complets',
      ],
      tags: ['Next.js', 'FastAPI', 'NLP', 'PostgreSQL', 'React'],
      image: '/disciplinary-council.png',
    },
    {
      id: 3,
      period: '2025 – 2026',
      titleEn: 'Rate Limiting API System',
      titleFr: 'Système Rate Limiting API',
      achievementsEn: [
        'Secure REST API with FastAPI + rate limiting middleware',
        'Quota management and abuse blocking',
        'Redis for request storage and scalability',
        'Cloud deployment on AWS — dashboard + logs',
      ],
      achievementsFr: [
        'API REST sécurisée avec FastAPI + middleware rate limiting',
        'Gestion des quotas et blocage automatique',
        'Redis pour stockage et scalabilité',
        'Déploiement AWS — dashboard + logs des requêtes',
      ],
      tags: ['FastAPI', 'Redis', 'AWS', 'Python', 'Docker'],
      image: '/project-5.png',
    },
    {
      id: 4,
      period: '2024 – 2025',
      titleEn: 'Academic Website',
      titleFr: 'Site Web Académique',
      achievementsEn: [
        'MVC architecture with Laravel backend and responsive frontend',
        'Full DB management with MySQL & Eloquent ORM',
        'Teacher/student profiles, courses, publications and quizzes',
        'Internal messaging and role management',
      ],
      achievementsFr: [
        'Architecture MVC avec Laravel et frontend responsive',
        'Gestion complète de la BDD avec MySQL & Eloquent ORM',
        'Profils enseignants/étudiants, cours, publications et questionnaires',
        'Messagerie interne et gestion des rôles',
      ],
      tags: ['Laravel', 'MySQL', 'React', 'MVC'],
      image: '/academic-website-v2.png',
      liveUrl: 'https://academic-website-web.onrender.com/',
      githubUrl: 'https://github.com/HiiiiiBa/Academic-Website',
    },
    {
      id: 5,
      period: '2023 – 2024',
      titleEn: 'NLP Model – SMS Spam/Ham Classifier',
      titleFr: 'Modèle NLP – Classification SMS Spam/Ham',
      achievementsEn: [
        'Deep Learning (CNN/LSTM) and Machine Learning (SVM/KNN) algorithms',
        'Word2Vec and TF-IDF for word representation and vectorization',
        'CRISP-DM data mining methodology throughout the project',
        'Streamlit interface for real-time model testing',
      ],
      achievementsFr: [
        'Algorithmes Deep Learning (CNN/LSTM) et Machine Learning (SVM/KNN)',
        'Word2Vec et TF-IDF pour la représentation et vectorisation des mots',
        'Suivi du processus CRISP-DM tout au long du projet',
        'Interface Streamlit pour tester le modèle en temps réel',
      ],
      tags: ['Python', 'NLP', 'CNN/LSTM', 'Word2Vec', 'TF-IDF'],
      image: '/sms-classification.png',
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Projects"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          badgeClassName="text-pink-600 dark:text-pink-400 bg-pink-500/10 border border-pink-500/20"
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => {
            const achievements = language === 'fr' ? project.achievementsFr : project.achievementsEn
            const title = language === 'fr' ? project.titleFr : project.titleEn
            return (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 bg-card border border-border hover:border-accent/40 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-44 w-full overflow-hidden relative border-b border-border/60">
                  <img
                    src={project.image}
                    alt={title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      project.image === '/sms-classification.png' ? 'object-contain bg-white p-4' : 'object-cover'
                    }`}
                  />
                  {/* Period badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-background/90 text-foreground border border-border backdrop-blur-md shadow-sm">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-3.5 flex-1">
                  <h3 className="font-bold text-base leading-snug text-foreground group-hover:text-accent transition-colors duration-200">
                    {title}
                  </h3>

                  <ul className="space-y-1.5 flex-1">
                    {achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-foreground/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                          TAG_STYLES[tag] ?? 'bg-accent/10 text-accent border-accent/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex gap-2 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 shadow-sm"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {t('projects.viewProject')}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-card border border-border text-foreground hover:bg-muted transition-all duration-200"
                        >
                          <Code2 className="w-3 h-3" />
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

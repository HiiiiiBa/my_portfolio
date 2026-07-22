'use client'

import { useApp } from '@/lib/context/AppContext'
interface Project {
  id: number
  period: string
  titleEn: string
  titleFr: string
  achievementsEn: string[]
  achievementsFr: string[]
  tags: string[]
  color: string
  image: string
  liveUrl?: string
  githubUrl?: string
}

export function Projects() {
  const { language, t } = useApp()

  const projects: Project[] = [
    {
      id: 1,
      period: '2023 – 2024',
      titleEn: 'NLP Model – SMS Spam/Ham Classifier',
      titleFr: 'Modèle NLP – Classification SMS Spam/Ham',
      achievementsEn: [
        'Implementation of Deep Learning (CNN/LSTM) and Machine Learning (SVM/KNN) algorithms for classification',
        'Use of Word2Vec and TF-IDF techniques for word representation and vectorization',
        'Application of CRISP-DM data mining process throughout the project',
        'Development of a Streamlit interface for real-time model testing',
      ],
      achievementsFr: [
        'Implémentation des algorithmes de Deep Learning (CNN/LSTM) et Machine Learning (SVM/KNN) pour la classification',
        'Utilisation de techniques Word2Vec et TF-IDF pour la représentation et vectorisation des mots',
        'Suivi des étapes du processus de Data Mining CRISP-DM tout au long du projet',
        'Développement d\'une interface Streamlit pour tester le modèle en temps réel',
      ],
      tags: ['Python', 'CNN/LSTM', 'SVM/KNN', 'Word2Vec', 'TF-IDF', 'Streamlit'],
      color: 'from-violet-500/10 to-purple-500/5',
      image: '/sms-classification.png',
      liveUrl: 'https://sms-classifier.example.com',
      githubUrl: 'https://github.com/hiba/sms-spam-classifier',
    },
    {
      id: 2,
      period: '2024 – 2025',
      titleEn: 'Academic Website',
      titleFr: 'Site Web Académique',
      achievementsEn: [
        'MVC architecture with Laravel backend and responsive frontend with HTML5, CSS3, JavaScript',
        'Full database management with MySQL & Eloquent ORM',
        'Dynamic features: teacher/student profiles, course management, publications and quizzes',
        'Internal messaging and role management for smooth user interaction',
      ],
      achievementsFr: [
        'Architecture MVC avec Laravel pour le backend et frontend responsive avec HTML5, CSS3, JavaScript',
        'Gestion complète de la base de données avec MySQL & Eloquent ORM',
        'Fonctionnalités dynamiques : profils enseignants/étudiants, gestion des cours, publications et questionnaires',
        'Messagerie interne et gestion des rôles pour une interaction fluide entre utilisateurs',
      ],
      tags: ['Laravel', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'MVC'],
      color: 'from-blue-500/10 to-cyan-500/5',
      image: '/academic-website-v2.png',
      liveUrl: 'https://academic-platform.example.com',
      githubUrl: 'https://github.com/hiba/academic-website',
    },
    {
      id: 3,
      period: '2025 – 2026',
      titleEn: 'AI Disciplinary Council Management – Web App',
      titleFr: 'Gestion Intelligente du Conseil Disciplinaire – Web IA',
      achievementsEn: [
        'Implementation of NLP models (CamemBERT) for automatic incident classification',
        'Development of a violence detection and facial recognition system',
        'Frontend with Next.js, React & Tailwind CSS — Backend with FastAPI',
        'Design and management of PostgreSQL database',
        'Unit, integration and security testing',
      ],
      achievementsFr: [
        'Implémentation de modèles NLP (CamemBERT) pour la classification automatique des incidents',
        'Développement d\'un système de détection de violence et reconnaissance faciale',
        'Frontend avec Next.js, React et Tailwind CSS — Backend avec FastAPI',
        'Conception et gestion de la base de données PostgreSQL',
        'Mise en place des tests unitaires, d\'intégration et de sécurité',
      ],
      tags: ['Next.js', 'FastAPI', 'CamemBERT', 'PostgreSQL', 'React', 'NLP'],
      color: 'from-rose-500/10 to-pink-500/5',
      image: '/disciplinary-council.png',
      liveUrl: 'https://disciplinary-ai.example.com',
      githubUrl: 'https://github.com/hiba/disciplinary-council-ai',
    },
    {
      id: 4,
      period: '2025 – 2026',
      titleEn: 'CitéConnect – Urban Reporting Web App',
      titleFr: 'CitéConnect – Application Web de Signalement Urbain',
      achievementsEn: [
        'REST architecture with Spring Boot',
        'Frontend with Next.js, React and TypeScript',
        'Database management with PostgreSQL',
        'Geolocation implementation and role management (citizen, technician, admin)',
        'Dashboards, notifications and report generation',
      ],
      achievementsFr: [
        'Architecture REST avec Spring Boot',
        'Frontend avec Next.js, React et TypeScript',
        'Gestion de la base de données avec PostgreSQL',
        'Implémentation de la géolocalisation et gestion des rôles (citoyen, technicien, admin)',
        'Tableaux de bord, notifications et génération de rapports',
      ],
      tags: ['Spring Boot', 'Next.js', 'TypeScript', 'PostgreSQL', 'REST API'],
      color: 'from-emerald-500/10 to-green-500/5',
      image: '/citeconnect.png',
      liveUrl: 'https://cite-connect.vercel.app',
      githubUrl: 'https://github.com/HiiiiiBa/Cite_Connect',
    },
    {
      id: 5,
      period: '2025 – 2026',
      titleEn: 'Rate Limiting API System',
      titleFr: 'Système de Limitation de Requêtes (Rate Limiting API)',
      achievementsEn: [
        'Design and development of a secure REST API with FastAPI',
        'Rate limiting middleware implementation to control traffic per user or IP',
        'Quota exceeded management and automatic blocking of abusive requests',
        'Request storage and tracking via Redis for performance and scalability',
        'Cloud deployment on AWS — publicly accessible API',
        'Advanced features: dashboard, request logs and user level management',
      ],
      achievementsFr: [
        'Conception et développement d\'une API REST sécurisée avec FastAPI',
        'Implémentation d\'un middleware de rate limiting pour contrôler le trafic par utilisateur ou adresse IP',
        'Gestion des dépassements de quota et blocage automatique des requêtes abusives',
        'Stockage et suivi des requêtes via Redis pour performance et scalabilité',
        'Déploiement cloud sur AWS — API accessible publiquement',
        'Fonctionnalités avancées : dashboard, logs des requêtes et gestion de niveaux d\'utilisateurs',
      ],
      tags: ['FastAPI', 'Redis', 'AWS', 'Python', 'REST API', 'Docker'],
      color: 'from-amber-500/10 to-orange-500/5',
      image: '/project-5.png',
      liveUrl: 'https://rate-limiter.example.com',
      githubUrl: 'https://github.com/hiba/api-rate-limiter',
    },
  ]

  const tagColors: Record<string, string> = {
    'Python': 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
    'Next.js': 'bg-slate-500/15 text-slate-700 dark:text-slate-300',
    'FastAPI': 'bg-teal-500/15 text-teal-600 dark:text-teal-400',
    'PostgreSQL': 'bg-sky-500/15 text-sky-600 dark:text-sky-400',
    'React': 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
    'Laravel': 'bg-red-500/15 text-red-600 dark:text-red-400',
    'Redis': 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
    'AWS': 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground">{t('projects.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const achievements = language === 'fr' ? project.achievementsFr : project.achievementsEn
            const title = language === 'fr' ? project.titleFr : project.titleEn
            return (
              <div
                key={project.id}
                className={`group rounded-xl bg-gradient-to-br ${project.color} border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* Image container */}
                <div
                  className={`h-48 w-full overflow-hidden relative border-b border-border/40 ${
                    project.id === 1 ? 'bg-white flex items-center justify-center px-4 pt-6 pb-2' : ''
                  }`}
                >
                  <img
                    src={project.image}
                    alt={title}
                    className={
                      project.id === 1
                        ? 'max-h-full max-w-full w-auto h-auto object-contain object-center translate-y-2 group-hover:scale-[1.03] transition-transform duration-500'
                        : 'w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500'
                    }
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-background/90 text-foreground border border-border/50 rounded-full backdrop-blur-sm shadow-sm">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
                  {/* Title */}
                  <h3 className="font-semibold text-lg leading-snug group-hover:text-accent transition-colors">
                    {title}
                  </h3>

                  {/* Achievements */}
                  <ul className="space-y-2 flex-1">
                    {achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/75 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${tagColors[tag] ?? 'bg-accent/10 text-accent'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2.5 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all shadow-sm cursor-pointer"
                      >
                        <span>{t('projects.viewProject')}</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                      >
                        <span>{t('projects.github') || 'GitHub'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useApp } from '@/lib/context/AppContext'
import { ExperienceCard } from './ui/experience-card'
import { SectionHeader } from './ui/section-header'

type ExperienceItem = {
  title: string
  company: string
  period: string
  location: string
  achievements: string[]
  isCurrent?: boolean
  logo: string
  logoAlt: string
  logoClassName: string
  projectUrl?: string
  githubUrl?: string
}

const experiencesFr: ExperienceItem[] = [
  {
    title: 'Stage',
    company: 'DXC Technology',
    period: '06/2026 – 08/2026',
    location: 'Rabat, Maroc',
    achievements: [
      'Conception et développement de SLA Monitor, plateforme web intelligente de gestion et supervision des accords de niveau de service (SLA)',
      'Suivi temps réel de la conformité SLA, gestion des incidents, alertes et rapports, avec contrôle d’accès selon 4 rôles (Administrateur, Manager, Employé, Client)',
      'Intégration d’IA via Google Gemini : assistant conversationnel, analyse d’incidents et génération de rapports exécutifs',
      'Stack technique : Next.js, Spring Boot, PostgreSQL, WebSocket ; démarche DevOps (Docker, CI/CD, déploiement cloud et observabilité)',
    ],
    logo: '/experience/dxc.png',
    logoAlt: 'DXC Technology',
    logoClassName: 'max-h-[68px] max-w-[125px] w-auto h-auto object-contain',
    projectUrl: 'http://84.8.216.210',
    githubUrl: 'https://github.com/HiiiiiBa/SLA_Project',
  },
  {
    title: 'Stage',
    company: 'BC Skills Group',
    period: '07/2025 – 09/2025',
    location: 'Rabat, Maroc',
    achievements: [
      "Développement d'une application web intelligente – Coupe du Monde 2030",
      "Conception d'une carte interactive des zones à risque",
      'Prédiction des niveaux de risque avec Random Forest',
      'Développement avec Next.js, FastAPI et PostgreSQL',
    ],
    logo: '/experience/bc-skills.png',
    logoAlt: 'BC Skills Group',
    logoClassName: 'max-h-[80px] max-w-[110px] w-auto h-auto object-contain',
    projectUrl: 'https://morocco-2030-risk-analysis.vercel.app/',
    githubUrl: 'https://github.com/HiiiiiBa/morocco-2030-risk-analysis',
  },
  {
    title: 'Stage',
    company: 'Econocom Maroc',
    period: '04/2024 – 07/2024',
    location: 'Rabat, Maroc',
    achievements: [
      "Conception et réalisation d'un système décisionnel",
      "Réalisation de l'ETL sur Pentaho",
      "Création des cubes OLAP à l'aide de SAS",
      'Création des rapports sous Power BI',
    ],
    logo: '/experience/econocom.png',
    logoAlt: 'Econocom Maroc',
    logoClassName: 'max-h-[56px] max-w-[160px] w-auto h-auto object-contain',
  },
  {
    title: 'Stage',
    company: 'Créative X Growth',
    period: '07/2023 – 08/2023',
    location: 'Rabat, Maroc',
    achievements: [
      "Conception et développement d'un site web e-Commerce spécialisé dans la vente de templates Google Sheets personnalisés",
      "Application des bases de l'optimisation du site pour le référencement (SEO)",
    ],
    logo: '/experience/creative-x-growth.png',
    logoAlt: 'Créative X Growth',
    logoClassName: 'max-h-[52px] max-w-[120px] w-auto h-auto object-contain',
  },
]

const experiencesEn: ExperienceItem[] = [
  {
    title: 'Internship',
    company: 'DXC Technology',
    period: '06/2026 – 08/2026',
    location: 'Rabat, Maroc',
    achievements: [
      'Design and development of SLA Monitor, an intelligent web platform for SLA management and monitoring',
      'Real-time SLA compliance tracking, incident/alert/report management, with role-based access control (Admin, Manager, Employee, Client)',
      'AI integration via Google Gemini: conversational assistant, incident analysis, and executive report generation',
      'Tech stack: Next.js, Spring Boot, PostgreSQL, WebSocket; DevOps approach (Docker, CI/CD, cloud deployment, and observability)',
    ],
    logo: '/experience/dxc.png',
    logoAlt: 'DXC Technology',
    logoClassName: 'max-h-[68px] max-w-[125px] w-auto h-auto object-contain',
    projectUrl: 'http://84.8.216.210',
    githubUrl: 'https://github.com/HiiiiiBa/SLA_Project',
  },
  {
    title: 'Internship',
    company: 'BC Skills Group',
    period: '07/2025 – 09/2025',
    location: 'Rabat, Maroc',
    achievements: [
      'Development of an intelligent web application – 2030 World Cup',
      'Design of an interactive map of risk zones',
      'Risk level prediction with Random Forest',
      'Development with Next.js, FastAPI and PostgreSQL',
    ],
    logo: '/experience/bc-skills.png',
    logoAlt: 'BC Skills Group',
    logoClassName: 'max-h-[80px] max-w-[110px] w-auto h-auto object-contain',
    projectUrl: 'https://morocco-2030-risk-analysis.vercel.app/',
    githubUrl: 'https://github.com/HiiiiiBa/morocco-2030-risk-analysis',
  },
  {
    title: 'Internship',
    company: 'Econocom Morocco',
    period: '04/2024 – 07/2024',
    location: 'Rabat, Maroc',
    achievements: [
      'Design and implementation of a decision support system',
      'ETL implementation with Pentaho',
      'OLAP cube creation using SAS',
      'Report creation with Power BI',
    ],
    logo: '/experience/econocom.png',
    logoAlt: 'Econocom Morocco',
    logoClassName: 'max-h-[56px] max-w-[160px] w-auto h-auto object-contain',
  },
  {
    title: 'Internship',
    company: 'Créative X Growth',
    period: '07/2023 – 08/2023',
    location: 'Rabat, Maroc',
    achievements: [
      'Design and development of an e-Commerce website specialized in customized Google Sheets templates',
      'Applied SEO optimization fundamentals',
    ],
    logo: '/experience/creative-x-growth.png',
    logoAlt: 'Créative X Growth',
    logoClassName: 'max-h-[52px] max-w-[120px] w-auto h-auto object-contain',
  },
]

export function Experience() {
  const { t, language } = useApp()
  const experiences = language === 'fr' ? experiencesFr : experiencesEn

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(139,92,246,0.5), transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          badge="Career"
          badgeClassName=""
          badgeStyle={{
            color: '#06b6d4',
            background: 'rgba(6, 182, 212, 0.12)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
          }}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        {/* Timeline */}
        <div className="relative ml-1.5 timeline-border-mask">
          <div
            className="absolute top-0 left-0 bottom-0 w-0.5 timeline-line -ml-px"
          />
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              achievements={exp.achievements}
              isCurrent={exp.isCurrent}
              currentLabel={language === 'fr' ? 'En cours' : 'Current'}
              logo={exp.logo}
              logoAlt={exp.logoAlt}
              logoClassName={exp.logoClassName}
              projectUrl={exp.projectUrl}
              projectLinkLabel={
                language === 'fr' ? 'Voir le projet' : 'View project'
              }
              githubUrl={exp.githubUrl}
              githubLinkLabel="GitHub"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

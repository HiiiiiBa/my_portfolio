'use client'

import { useApp } from '@/lib/context/AppContext'
import { EducationCard } from './ui/education-card'
import { SectionHeader } from './ui/section-header'

const educationFr = [
  {
    degree: "Deuxième année du cycle d'ingénieur en Ingénierie Logicielle",
    school: "Ecole Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données - Taroudant",
    year: '2024 – présent',
    logo: '/education/ensiasd.png',
    logoAlt: 'ENSIASD Taroudant',
    logoContainerClassName:
      'shrink-0 w-[260px] h-[112px] rounded-xl flex items-center justify-center p-1 overflow-hidden bg-white border border-slate-200 shadow-sm',
    logoClassName: 'h-[100px] w-[250px] object-contain object-center',
  },
  {
    degree: 'DUT en Informatique Décisionnelle et Statistiques',
    school: 'Ecole Supérieure de Technologie - Fkih Ben Salah',
    year: '2022 – 2024',
    logo: '/education/est-fkih-ben-salah.png',
    logoAlt: 'EST Fkih Ben Salah',
    logoClassName: 'max-h-[115px] max-w-[102px] w-auto h-auto object-contain scale-[1.35]',
  },
  {
    degree: 'Baccalauréat en Sciences Math B',
    school: 'Lycée Qualifiant Hassan 2 - Sala Al Jadida',
    year: '2020 – 2021',
  },
]

const educationEn = [
  {
    degree: 'Second year — Software Engineering (Engineering cycle)',
    school: 'National Higher School of Artificial Intelligence and Data Science - Taroudant',
    year: '2024 – present',
    logo: '/education/ensiasd.png',
    logoAlt: 'ENSIASD Taroudant',
    logoContainerClassName:
      'shrink-0 w-[260px] h-[112px] rounded-xl flex items-center justify-center p-1 overflow-hidden bg-white border border-slate-200 shadow-sm',
    logoClassName: 'h-[100px] w-[250px] object-contain object-center',
  },
  {
    degree: 'University Diploma in Decisional IT and Statistics',
    school: 'Higher School of Technology - Fkih Ben Salah',
    year: '2022 – 2024',
    logo: '/education/est-fkih-ben-salah.png',
    logoAlt: 'EST Fkih Ben Salah',
    logoClassName: 'max-h-[115px] max-w-[102px] w-auto h-auto object-contain scale-[1.35]',
  },
  {
    degree: 'Baccalaureate in Math Sciences B',
    school: 'Hassan 2 Qualifying High School - Sala Al Jadida',
    year: '2020 – 2021',
  },
]

export function Education() {
  const { t, language } = useApp()
  const educationData = language === 'fr' ? educationFr : educationEn

  return (
    <section id="education" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), rgba(139,92,246,0.5), transparent)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          badge="Education"
          badgeClassName=""
          badgeStyle={{
            color: '#f59e0b',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
          }}
          title={t('education.title')}
          subtitle={t('education.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educationData.map((edu, idx) => (
            <EducationCard
              key={idx}
              degree={edu.degree}
              school={edu.school}
              field={edu.field}
              year={edu.year}
              logo={edu.logo}
              logoAlt={edu.logoAlt}
              logoClassName={edu.logoClassName}
              logoContainerClassName={edu.logoContainerClassName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

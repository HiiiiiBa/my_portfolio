'use client'

import { useApp } from '@/lib/context/AppContext'
import { EducationCard } from './ui/education-card'

const educationFr = [
  {
    degree: "Deuxième année du cycle d'ingénieur en Ingénierie Logicielle",
    school: "Ecole Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données - Taroudant",
    year: '2024 – présent',
    logo: '/education/ensiasd.png',
    logoAlt: 'ENSIASD Taroudant',
    logoClassName: 'h-[72px] w-auto max-w-full object-contain',
  },
  {
    degree: 'DUT en Informatique Décisionnelle et Statistiques',
    school: 'Ecole Supérieure de Technologie - Fkih Ben Salah',
    year: '2022 – 2024',
    logo: '/education/est-fkih-ben-salah.png',
    logoAlt: 'EST Fkih Ben Salah',
    logoClassName: 'h-[72px] w-auto max-w-full object-contain scale-[1.55]',
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
    logoClassName: 'h-[72px] w-auto max-w-full object-contain',
  },
  {
    degree: 'University Diploma in Decisional IT and Statistics',
    school: 'Higher School of Technology - Fkih Ben Salah',
    year: '2022 – 2024',
    logo: '/education/est-fkih-ben-salah.png',
    logoAlt: 'EST Fkih Ben Salah',
    logoClassName: 'h-[72px] w-auto max-w-full object-contain scale-[1.55]',
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
    <section id="education" className="py-20 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t('education.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('education.subtitle')}
          </p>
        </div>

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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

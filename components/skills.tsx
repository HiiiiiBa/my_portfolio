'use client'

import React from 'react'
import { useApp } from '@/lib/context/AppContext'
import { SkillCard } from './ui/skill-card'
import {
  Code2,
  Database,
  Zap,
  Palette,
  GitBranch,
  Cloud,
  Smartphone,
  Layers
} from 'lucide-react'

export function Skills() {
  const { t } = useApp()

  const skillsData = {
    frontend: [
      { icon: <Code2 className="w-8 h-8" />, name: 'React', level: 95, category: 'Frontend' },
      { icon: <Code2 className="w-8 h-8" />, name: 'TypeScript', level: 90, category: 'Frontend' },
      { icon: <Palette className="w-8 h-8" />, name: 'Tailwind CSS', level: 95, category: 'Frontend' },
      { icon: <Smartphone className="w-8 h-8" />, name: 'Responsive Design', level: 98, category: 'Frontend' },
    ],
    backend: [
      { icon: <Database className="w-8 h-8" />, name: 'Node.js', level: 90, category: 'Backend' },
      { icon: <Database className="w-8 h-8" />, name: 'PostgreSQL', level: 85, category: 'Backend' },
      { icon: <Database className="w-8 h-8" />, name: 'MongoDB', level: 80, category: 'Backend' },
      { icon: <Cloud className="w-8 h-8" />, name: 'REST APIs', level: 92, category: 'Backend' },
    ],
    tools: [
      { icon: <GitBranch className="w-8 h-8" />, name: 'Git & GitHub', level: 95, category: 'Tools' },
      { icon: <Cloud className="w-8 h-8" />, name: 'Docker', level: 80, category: 'Tools' },
      { icon: <Zap className="w-8 h-8" />, name: 'Vercel', level: 95, category: 'Tools' },
      { icon: <Layers className="w-8 h-8" />, name: 'DevOps', level: 75, category: 'Tools' },
    ],
    design: [
      { icon: <Palette className="w-8 h-8" />, name: 'UI Design', level: 88, category: 'Design' },
      { icon: <Palette className="w-8 h-8" />, name: 'UX Design', level: 85, category: 'Design' },
      { icon: <Code2 className="w-8 h-8" />, name: 'Figma', level: 80, category: 'Design' },
      { icon: <Palette className="w-8 h-8" />, name: 'Animation', level: 82, category: 'Design' },
    ],
  }

  const allSkills = [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools, ...skillsData.design]

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allSkills.map((skill, idx) => (
            <SkillCard
              key={idx}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              category={skill.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

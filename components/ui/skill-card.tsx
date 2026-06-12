import React from 'react'

interface SkillCardProps {
  icon: React.ReactNode
  name: string
  level: number
  category: string
}

export function SkillCard({ icon, name, level, category }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 p-6">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{category}</p>
        
        {/* Proficiency bar */}
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 group-hover:w-full"
            style={{ width: `${level}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-right">{level}%</p>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'

interface Project {
  id: number
  titleEn: string
  titleFr: string
  descriptionEn: string
  descriptionFr: string
  tags: string[]
  image: string
}

export function Projects() {
  const { language } = useApp()

  const projects: Project[] = [
    {
      id: 1,
      titleEn: 'Modern E-commerce Platform',
      titleFr: 'Plateforme E-commerce Moderne',
      descriptionEn: 'A complete e-commerce platform with shopping cart, payment processing, and user management.',
      descriptionFr: 'Une plateforme e-commerce complète avec panier, paiement et gestion des utilisateurs.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: '/project-1.png',
    },
    {
      id: 2,
      titleEn: 'Productivity Application',
      titleFr: 'Application de Productivité',
      descriptionEn: 'A web app for managing tasks and projects in real-time with team collaboration features.',
      descriptionFr: 'Une application web pour gérer tâches et projets en temps réel avec collaboration.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: '/project-2.png',
    },
    {
      id: 3,
      titleEn: 'Analytics Dashboard',
      titleFr: 'Dashboard Analytics',
      descriptionEn: 'An interactive dashboard to visualize and analyze real-time data with custom charts.',
      descriptionFr: 'Un tableau de bord interactif pour visualiser et analyser des données en temps réel.',
      tags: ['React', 'D3.js', 'API REST'],
      image: '/project-3.png',
    },
    {
      id: 4,
      titleEn: 'Corporate Website',
      titleFr: 'Site Institutionnel',
      descriptionEn: 'A modern and performant website for a company with SEO optimization and analytics.',
      descriptionFr: 'Site web moderne et performant pour une entreprise avec optimisation SEO.',
      tags: ['Next.js', 'Headless CMS', 'SEO'],
      image: '/project-4.png',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing my work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={language === 'en' ? project.titleEn : project.titleFr}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {language === 'en' ? project.titleEn : project.titleFr}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {language === 'en' ? project.descriptionEn : project.descriptionFr}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 flex items-center gap-2 text-accent font-medium cursor-pointer group/link">
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

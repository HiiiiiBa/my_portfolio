'use client'

import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { SectionHeader } from './ui/section-header'

const CONTACT_EMAIL = 'elouafi.hiiba@gmail.com'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+212 6 94 49 40 33',
    href: 'tel:+212694494033',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Rabat, Maroc',
    href: '#',
  },
]

export function Contact() {
  const { t } = useApp()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitted(false)
    setError(false)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio — Message de ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Failed to send message')
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Contact"
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item, idx) => {
              const Icon = item.icon
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 bg-card border border-border hover:border-accent/40 hover:shadow-md hover:translate-x-1"
                >
                  <div className="p-3 rounded-xl shrink-0 bg-accent/10 border border-accent/20 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm mt-0.5 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              )
            })}

            {/* Quote card */}
            <div className="mt-8 p-6 rounded-2xl text-center bg-card/60 border border-border/80">
              <p className="text-sm font-medium text-foreground/80">
                {`"Always open to new opportunities and collaborations"`}
              </p>
              <p className="text-xs mt-2 text-accent font-semibold">— Hiba El Ouafi</p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-xl"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-2 text-foreground">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 rounded-xl text-sm input-glow"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-2 text-foreground">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 rounded-xl text-sm input-glow"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-2 text-foreground">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm input-glow resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                disabled={isLoading}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.form.send')}
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 rounded-xl text-center text-sm font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  ✓ {t('contact.form.success')}
                </div>
              )}

              {error && (
                <div className="p-4 rounded-xl text-center text-sm font-semibold bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400">
                  ✗ {t('contact.form.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

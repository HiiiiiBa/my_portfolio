'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '@/lib/context/AppContext'

export function Contact() {
  const { t } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'elouafi.hiiba@gmail.com',
                  href: 'elouafi.hiiba@gmail.com'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '+212 6 94 49 40 33',
                  href: 'tel:+212 694494033'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Rabat, Maroc',
                  href: '#'
                }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent hover:bg-muted transition-all duration-300 group"
                  >
                    <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Twitter', url: 'https://twitter.com' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:bg-muted transition-all duration-300"
                    title={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : t('contact.form.send')}
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600 text-center">
                  {t('contact.form.success')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

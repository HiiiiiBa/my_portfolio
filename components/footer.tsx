'use client'

import { useApp } from '@/lib/context/AppContext'

export function Footer() {
  const { t } = useApp()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-gradient-to-t from-card/30 to-transparent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
              {'<Dev />'}
            </a>
            <p className="text-foreground/60 mt-2">{t('footer.madeWith')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">GitHub</a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

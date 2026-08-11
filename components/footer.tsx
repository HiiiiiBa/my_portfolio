'use client'

import { useApp } from '@/lib/context/AppContext'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export function Footer() {
  const { t } = useApp()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/60">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <p className="text-sm font-semibold gradient-text">
              Hiba El Ouafi
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} — {t('footer.copyright')}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5">
            {[
              {
                href: 'https://github.com/HiiiiiBa',
                label: 'GitHub',
                icon: <GitHubIcon />,
              },
              {
                href: 'https://www.linkedin.com/in/hiba-el-ouafi04/',
                label: 'LinkedIn',
                icon: <LinkedInIcon />,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg transition-all duration-200 bg-accent/10 border border-accent/20 text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/15 hover:-translate-y-0.5 hover:shadow-md"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

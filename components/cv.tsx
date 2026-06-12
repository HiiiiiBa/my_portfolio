'use client'

import { FileDown, Eye } from 'lucide-react'
import { useApp } from '@/lib/context/AppContext'

const CV_PATH = '/cv/hiba-el-ouafi-cv.pdf'
const CV_FILENAME = 'Hiba EL OUAFI CV.pdf'

export function CV() {
  const { t, language } = useApp()

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch('/api/cv')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = CV_FILENAME
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading CV:', error)
    }
  }

  const handleViewOnline = () => {
    window.open(CV_PATH, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t('cv.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('cv.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-card border border-border hover:border-accent/40 p-6 transition-colors">
            <div className="space-y-5">
              <div className="p-3 bg-accent/10 rounded-lg w-fit">
                <FileDown className="w-6 h-6 text-accent" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">{t('cv.downloadPDF')}</h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'fr'
                    ? 'Téléchargez mon CV complet au format PDF.'
                    : 'Download my complete CV in PDF format.'}
                </p>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                {t('cv.download')}
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-card border border-border hover:border-accent/40 p-6 transition-colors">
            <div className="space-y-5">
              <div className="p-3 bg-accent/10 rounded-lg w-fit">
                <Eye className="w-6 h-6 text-accent" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">{t('cv.viewOnline')}</h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'fr'
                    ? 'Consultez mon CV directement dans le navigateur.'
                    : 'View my CV directly in your browser.'}
                </p>
              </div>

              <button
                onClick={handleViewOnline}
                className="px-5 py-2.5 bg-card border border-border text-sm font-medium rounded-lg hover:bg-muted transition-colors inline-flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                {t('cv.viewOnline')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

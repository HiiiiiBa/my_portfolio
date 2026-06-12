'use client'

import { AppProvider } from '@/lib/context/AppContext'
import React from 'react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}

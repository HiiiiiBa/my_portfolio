'use client'

import dynamic from 'next/dynamic'

export const ComputerSceneLazy = dynamic(
  () => import('./computer-scene').then((mod) => mod.ComputerScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
      </div>
    ),
  }
)

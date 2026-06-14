import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-wmKD1mSmmzkrtwdFp1Nka0Z284bKrO.png"
        alt="Hiba El Ouafi - Software Engineer"
        width={280}
        height={80}
        className="h-16 w-auto"
        priority
      />
    </div>
  )
}

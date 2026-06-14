import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-l3AGF4xv7tfIZssPEapCsBTK9ZxeHL.png"
        alt="Hiba El Ouafi - Software Engineer"
        width={200}
        height={60}
        className="h-12 w-auto"
        priority
      />
    </div>
  )
}

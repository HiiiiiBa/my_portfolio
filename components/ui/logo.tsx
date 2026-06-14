export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <div className="flex items-center justify-center gap-3">
        <div className="h-0.5 w-6 bg-foreground" />
        <h1
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-foreground whitespace-nowrap"
        >
          Hiba <span className="italic">El</span> Ouafi
        </h1>
        <div className="h-0.5 w-6 bg-foreground" />
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground tracking-wide font-light">
        Software Engineer
      </p>
    </div>
  )
}

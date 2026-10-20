export function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      {diagonal ? (
        <path d="M7 17 17 7M8 7h9v9" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  )
}

export function ChevronIcon({ direction = 'down' }) {
  return (
    <svg
      aria-hidden="true"
      className={`chevron-icon chevron-icon--${direction}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="m3 6 5 5 5-5" />
    </svg>
  )
}

export function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="line-icon" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M7.5 3v4M16.5 3v4M4 9.5h16" />
    </svg>
  )
}

export function GuestsIcon() {
  return (
    <svg aria-hidden="true" className="line-icon" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="8" r="4" />
      <path d="M2.8 23v-1.7A6.3 6.3 0 0 1 9.1 15h1.8a6.3 6.3 0 0 1 6.3 6.3V23H2.8Z" />
      <path d="M18.1 4.7a4 4 0 0 1 0 7.5m2.4 3.3a5.9 5.9 0 0 1 4.7 5.8V23h-5.7" />
    </svg>
  )
}

export function SunIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={`line-icon sun-icon ${className}`} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.8v2.1m0 16.2v2.1M4.78 4.78l1.49 1.49m11.46 11.46 1.49 1.49M1.8 12h2.1m16.2 0h2.1M4.78 19.22l1.49-1.49M17.73 6.27l1.49-1.49" />
    </svg>
  )
}

export function RippleIcon() {
  return (
    <svg aria-hidden="true" className="line-icon ripple-icon" viewBox="0 0 24 24" fill="none">
      <path d="M2 8c2.2 0 2.2-2.2 4.4-2.2S8.6 8 10.8 8s2.2-2.2 4.4-2.2S17.4 8 19.6 8M2 15.2c2.2 0 2.2-2.2 4.4-2.2s2.2 2.2 4.4 2.2 2.2-2.2 4.4-2.2 2.2 2.2 4.4 2.2" />
    </svg>
  )
}

export function MenuIcon({ open = false }) {
  return (
    <svg aria-hidden="true" className="menu-icon" viewBox="0 0 24 24" fill="none">
      {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
    </svg>
  )
}

export default function BrandMark({ footer = false }) {
  return (
    <a className={`brand-mark${footer ? ' brand-mark--footer' : ''}`} href="/" aria-label="Crown Island home">
      {!footer ? <img className="brand-logo-image" src="/images/crown-island-logo.svg" alt="" /> : <>
        <svg className="brand-crown" viewBox="0 0 120 48" fill="none" aria-hidden="true">
          <path d="m21 27 13-15 14 12 12-19 12 19 14-12 13 15-5 11H26l-5-11Z" fill="currentColor" />
          <circle cx="34" cy="9" r="3" fill="currentColor" />
          <circle cx="60" cy="3" r="3" fill="currentColor" />
          <circle cx="86" cy="9" r="3" fill="currentColor" />
          <path d="M8 41c17-9 30-9 48-1 17 7 32 7 56-2" stroke="#0d79a7" strokeWidth="2" />
        </svg>
        <span className="brand-name">CROWN ISLAND</span>
        <span className="brand-subtitle">EL MONTAZAH</span>
      </>}
    </a>
  )
}

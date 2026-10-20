import { useEffect, useRef, useState } from 'react'
import BrandMark from './BrandMark.jsx'
import { ArrowIcon, ChevronIcon, MenuIcon } from './Icons.jsx'

const links = [
  { label: 'Beaches', href: '/beaches', underline: 'wide' },
  { label: 'Activities', href: '/activities', underline: 'wide' },
  { label: 'Dining', href: '/dining', underline: 'short' },
  { label: 'My Booking', href: '/book', underline: 'long' },
]

export default function Navbar({ page = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const isHome = page === 'home'

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return undefined
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeMenu()
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className={`site-header${isHome ? ' site-header--home' : ' site-header--interior'}`}>
      <div className="header-inner">
        <BrandMark />
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`} aria-label="Main navigation" aria-hidden={!menuOpen && undefined}>
            {links.map((link) => (
            <a key={link.label} href={link.href} aria-current={link.href === (page === 'book' ? '/book' : `/${page}`) ? 'page' : undefined} onClick={closeMenu}>
              <span className="primary-nav-label" style={{ '--nav-underline': `url('/images/nav-underline-${link.underline}.svg')` }}>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <span className="language-indicator" aria-label="Current language: English">
            EN <ChevronIcon />
          </span>
          <a className={`button header-book${isHome ? ' button--gold header-book--home' : ' header-book--outline'}`} href="/book">
            Book Now{!isHome && <ArrowIcon />}
          </a>
        </div>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </header>
  )
}

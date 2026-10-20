import BrandMark from './BrandMark.jsx'
import { SunIcon } from './Icons.jsx'

const footerLinks = [
  { label: 'Beaches', href: '/beaches' },
  { label: 'Activities', href: '/activities' },
  { label: 'Dining', href: '/dining' },
  { label: 'My Booking', href: '/book' },
]

function SocialIcons() {
  return (
    <div className="social-links" aria-label="Social media links will be connected later">
      <span aria-label="Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg>
      </span>
      <span aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-dot" cx="17.5" cy="6.7" r=".8" /></svg>
      </span>
      <span aria-label="TikTok">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.1a4.1 4.1 0 1 1-3-3.95V7a7.8 7.8 0 1 0 7 7.75V9.6c1.3 1 2.8 1.5 4 1.6V7.4c-3.2-.3-5.3-2.2-5.5-4.4H14Z" /></svg>
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <BrandMark footer />
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="footer-tools">
          <SocialIcons />
          <span className="footer-weather" aria-label="Sample weather preview; live weather is not connected">
            <SunIcon /> <span>32 °C<br />Sunny</span>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Crown Island. All rights reserved.</p>
        <div><span>Terms &amp; Conditions</span><span>Privacy Policy</span></div>
      </div>
    </footer>
  )
}

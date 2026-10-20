import { useEffect, useRef, useState } from 'react'
import BookingBar from './components/BookingBar.jsx'
import ExperienceCard from './components/ExperienceCard.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import { RippleIcon, SunIcon } from './components/Icons.jsx'
import './App.css'
import ContentPage from './components/ContentPage.jsx'

const TODAY_WEATHER_LABEL = new Intl.DateTimeFormat('en-EG', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(new Date())

const experiences = [
  {
    name: 'Calm',
    badge: 'Most Popular',
    category: 'Private Cabana · Beach',
    description: 'Unwind in your private cabana with premium service, ocean views and total relaxation.',
    image: '/images/calm.jpg',
    imageAlt: 'Quiet beach cabanas and sun loungers beneath palm trees',
  },
  {
    name: 'Freska',
    badge: 'Seasonal',
    category: 'Private Cabana · Beach',
    description: 'A vibrant beach experience with a relaxed atmosphere, refreshing drinks and endless sea views.',
    image: '/images/freska.jpg',
    imageAlt: 'Resort pool and beach club bordered by cabanas and palm trees',
  },
]

function WeatherBar() {
  return (
    <section className="weather-bar" aria-label="Sample resort weather" title="Sample weather preview; live weather is not connected.">
      <div className="weather-item weather-location">
        <SunIcon />
        <span><strong>Alexandria, Egypt</strong><small>28 °C&nbsp; Sunny</small></span>
      </div>
      <div className="weather-item weather-date">
        <RippleIcon />
        <span><strong>Today</strong><small>{TODAY_WEATHER_LABEL}</small></span>
      </div>
      <div className="weather-item weather-note">
        <RippleIcon />
        <span>Good weather · Perfect for the beach</span>
      </div>
    </section>
  )
}

function DestinationBanner() {
  return (
    <section className="destination-banner" id="banner">
      <div className="destination-copy">
        <p className="eyebrow">More than a destination</p>
        <h2>A destination like no other</h2>
        <p className="destination-description">Where natural beauty meets modern comfort.<br />Crown Island is your escape, your way.</p>
        <a className="button button--outline" href="#experiences">Explore the island <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

function HomePage() {
  const [selectedExperience, setSelectedExperience] = useState('')
  const [bookingMessage, setBookingMessage] = useState('')
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)
  const heroVideoRef = useRef(null)

  useEffect(() => {
    const motionPreference = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!motionPreference) return undefined
    const updateMotionPreference = () => {
      setReducedMotion(motionPreference.matches)
      if (motionPreference.matches) heroVideoRef.current?.pause()
      else heroVideoRef.current?.play().catch(() => {})
    }
    motionPreference.addEventListener('change', updateMotionPreference)
    return () => motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  function chooseExperience(name) {
    setSelectedExperience(name)
    setBookingMessage('')
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.setTimeout(() => document.getElementById('booking-date')?.focus({ preventScroll: true }), 450)
  }

  function searchAvailability({ date, guests, experience }) {
    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('en-EG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    setBookingMessage(
      `Your ${formattedDate} request for ${experience || 'a beach experience'} (${guests}) is ready. Live availability is not connected yet.`,
    )
  }

  return (
    <div className="page-shell" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <video
          ref={heroVideoRef}
          className="hero-video"
          src="/videos/hero.mp4"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload={reducedMotion ? 'metadata' : 'auto'}
          aria-hidden="true"
        />
        <div className="hero-shade" />
        <Navbar page="home" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Crown Island</p>
            <h1 id="hero-title">Choose how<br />your day unfolds.</h1>
            <p className="hero-description">Private beach experiences, curated for your perfect day at Crown Island. Select your date, guests and find your ideal spot by the sea.</p>
          </div>
          <div className="hero-booking-wrap">
            <BookingBar onSearch={searchAvailability} selectedExperience={selectedExperience} />
            {bookingMessage && <p className="booking-feedback" role="status">{bookingMessage}</p>}
          </div>
        </div>
      </section>

      <WeatherBar />

      <main>
        <section className="experiences-section" id="experiences" aria-labelledby="experiences-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our experience</p>
              <h2 id="experiences-title">Curated beach experience</h2>
            </div>
            <p className="section-intro">More than a beach day — it’s a feeling. Pick your experience and find your spot on the island.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.name} experience={experience} onChoose={chooseExperience} />
            ))}
          </div>
        </section>
        <DestinationBanner />
      </main>

      <Footer />
    </div>
  )
}

function normalizePath(pathname) {
  return pathname.replace(/\/$/, '') || '/'
}

function App() {
  const [route, setRoute] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    function syncRoute() {
      setRoute(normalizePath(window.location.pathname))
    }

    function handleInternalNavigation(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return

      const destination = new URL(link.href, window.location.href)
      if (destination.origin !== window.location.origin) return

      const currentPath = normalizePath(window.location.pathname)
      const destinationPath = normalizePath(destination.pathname)
      if (destinationPath === currentPath && destination.hash) return

      event.preventDefault()
      if (destinationPath === currentPath) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        return
      }

      window.history.pushState({}, '', destination.href)
      setRoute(destinationPath)
      if (destination.hash) {
        const targetId = decodeURIComponent(destination.hash.slice(1))
        requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView())
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }

    document.addEventListener('click', handleInternalNavigation)
    window.addEventListener('popstate', syncRoute)
    return () => {
      document.removeEventListener('click', handleInternalNavigation)
      window.removeEventListener('popstate', syncRoute)
    }
  }, [])

  if (route !== '/') return <ContentPage route={route} />
  return <HomePage />
}

export default App

import { useEffect, useRef, useState } from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import { ArrowIcon } from './Icons.jsx'
import { getLocalDateInputValue } from '../utils/date.js'
import '../ContentPages.css'

const activities = [
  { name: 'Snorkeling & Diving', copy: 'Discover vibrant marine life and explore the island’s crystal waters.', image: 'activity-diving.png', icon: 'activity-icon-sea.png', imageAlt: 'A snorkeler swimming above a coral reef' },
  { name: 'Island Excursions', copy: 'Explore hidden spots and nearby islands by boat.', image: 'activity-island.png', icon: 'activity-icon-boat.png', imageAlt: 'A boat sailing toward a small island at sunset' },
  { name: 'Water Sports', copy: 'From kayaking to paddleboarding, feel the thrill of the sea.', image: 'activity-water-sports.png', icon: 'activity-icon-sea.png', imageAlt: 'Guests riding a jet ski across the sea' },
  { name: 'Wellness & Yoga', copy: 'Rebalance your mind and body with beachfront sessions.', image: 'activity-yoga.png', icon: 'activity-icon-yoga.png', imageAlt: 'A yoga session on the beach at sunset' },
  { name: 'Cultural Experiences', copy: 'Immerse yourself in local culture, food, and traditions.', image: 'activity-culture.png', icon: 'activity-icon-culture.png', imageAlt: 'Visitors enjoying the island shoreline' },
  { name: 'Private Charters', copy: 'Tailor-made experiences for special moments.', image: 'activity-charters.png', icon: 'activity-icon-boat.png', imageAlt: 'A private charter boat on clear turquoise water' },
]

const dining = [
  ['The Beach Club', 'Seafood · Mediterranean · Light Bites', 'Relax by the sea with fresh flavors and ocean views.', 'dining-beach-club.png', 'Mediterranean dishes served on a wooden table'],
  ['Sunset Lounge', 'Cocktails · Tapas · International', 'Perfect for golden hour drinks and casual dining.', 'dining-sunset-lounge.png', 'Outdoor lounge seating overlooking the sunset'],
  ['Island Grill', 'Grill · Local Cuisine · Fresh Seafood', 'A rustic dining experience with the island’s freshest ingredients.', 'dining-island-grill.png', 'Guests sharing seafood dishes beside the sea'],
  ['Private Dining', 'Custom Menu · Exclusive Setting', 'Celebrate special moments with a personalized experience.', 'dining-private-dining.png', 'Private dining setup on the beach at sunset'],
  ['In-Cabana Dining', 'Private Chef · Full Menu', 'Enjoy the comfort of your villa with a curated dining experience.', 'dining-in-cabana.png', 'Fresh meal served at a seaside table'],
  ['Poolside Bites', 'Snacks · Drinks · Relaxed Vibes', 'Light bites and refreshing drinks by the pool.', 'dining-poolside-bites.png', 'A fruit platter beside the swimming pool'],
]

const features = [
  ['⌂', 'Private Cabana', 'Your own space on the beach'],
  ['♨', 'Beach Access', 'Crystal clear water'],
  ['◇', 'Premium Service', 'Dedicated staff'],
  ['♧', 'Refreshments', 'Drinks & light bites'],
]
function Features({ label = 'WHY CROWN ISLAND' }) {
  return <section className="ci-features"><p className="ci-eyebrow">{label}</p><h2>More Than Just a Beach Day</h2><div className="ci-feature-row">{features.map(([icon, title, copy]) => <div className="ci-feature" key={title}><span>{icon}</span><div><strong>{title}</strong><small>{copy}</small></div></div>)}</div></section>
}

function GalleryArrowIcon({ direction }) {
  const path = direction === 'left'
    ? 'M11.2 5.3 6.5 10l4.7 4.7 1.1-1.1-2.8-2.8h5.7V9.2H9.5l2.8-2.8z'
    : 'm8.8 5.3 4.7 4.7-4.7 4.7-1.1-1.1 2.8-2.8H4.8V9.2h5.7L7.7 6.4z'
  return <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="9.5" fill="#fff"/><path d={path} fill="#24231f"/></svg>
}

function CtaBanner() {
  return <section className="ci-cta"><div><p className="ci-eyebrow">READY TO EXPERIENCE?</p><h2>Your Perfect Day<br />Awaits</h2><p>Whether you choose calm or crave the energy,<br />Crown Island is your escape.</p><a className="button button--gold" href="/book">Book now <ArrowIcon /></a></div></section>
}

function Hero({ page }) {
  const copy = {
    beaches: { kicker: 'OUR EXPERIENCE', title: <>Two Vibes.<br />One Island.</>, text: 'Choose between two unique beach experiences, each with its own atmosphere, style, and energy. Whether you’re seeking calm and privacy or vibrant social vibes, your perfect day awaits.' },
    activities: { kicker: 'EXPLORE, EXPERIENCE, ENJOY.', title: 'Activities', text: 'From crystal-clear waters to island adventures, our curated activities bring you closer to nature, culture, and unforgettable moments.' },
    dining: { kicker: 'TASTE THE ISLAND', title: 'Dining', text: 'From fresh seafood to international cuisine, enjoy exquisite dining experiences in breathtaking ambient settings, crafted for unforgettable moments.' },
    book: { kicker: 'BOOK YOUR EXPERIENCE', title: 'Choose Your Spot', text: 'Select the perfect spot for your private cabana experience and enjoy the best views on the island.' },
  }[page]
  return <section className={`ci-hero ci-hero--${page}`}><Navbar page={page}/><div className="ci-hero-copy"><p className="ci-eyebrow">{copy.kicker}</p><h1>{copy.title}</h1><p>{copy.text}</p>{page === 'beaches' && <a className="ci-scroll" href="#beach-cards">↓ &nbsp; SCROLL TO EXPLORE</a>}</div>{page === 'book' && <div className="ci-selected-cabana"><img src="/images/booking-summary-image.png" alt="Calm private cabana by the beach"/><span><strong>Calm</strong><small>Private Cabana · Beach</small></span><a href="#spot-selection">Change</a></div>}</section>
}

function ActivityCard({ activity }) {
  return <div className="ci-activity-card-shell">
    <a className="ci-activity-card" href="/book" aria-label={`Explore ${activity.name}`}>
      <img className="ci-activity-image" src={`/images/${activity.image}`} alt={activity.imageAlt} loading="lazy" decoding="async" />
      <div className="ci-activity-details">
        <img className="ci-activity-icon" src={`/images/${activity.icon}`} alt="" aria-hidden="true" />
        <div className="ci-activity-copy"><h3>{activity.name}</h3><p>{activity.copy}</p></div>
        <img className="ci-activity-arrow" src="/images/activity-icon-arrow.png" alt="" aria-hidden="true" />
      </div>
    </a>
  </div>
}

function BeachPage() {
  const cards = [
    { name: 'CALM', type: 'Private Cabana · Serenity', copy: 'Escape the noise and enjoy a secluded beach experience with your own private cabana, personalized service and breathtaking views.', img: 'calm.jpg', badge: 'PRIVATE BEACH EXPERIENCE' },
    { name: 'FRESKA', type: 'Beach Club · Dining · Drinks', copy: 'Good food, refreshing drinks, and a vibrant atmosphere by the sea. Perfect for those who want to relax, socialize, and soak up the energy.', img: 'freska.jpg', badge: 'BEACH CLUB VIBES' },
  ]
  return <><Hero page="beaches"/><main className="ci-beaches"><div id="beach-cards" className="ci-beach-cards">{cards.map(c => <article className="ci-beach-card" key={c.name}><img className="ci-beach-card-image" src={`/images/${c.img}`} alt="" loading="lazy" decoding="async"/><div><p className="ci-eyebrow">{c.badge}</p><h2>{c.name}</h2><p className="ci-beach-type">{c.type}</p><p>{c.copy}</p><a href="/book"><span className="ci-beach-link-label">Explore {c.name}</span><span className="ci-beach-link-arrow" aria-hidden="true">→</span></a></div></article>)}</div><section className="ci-beach-heading"><p className="ci-eyebrow">WHY CROWN ISLAND</p><h2>More Than Just a Beach Day</h2></section><div className="ci-beach-feature-row">{features.map(([icon,title,copy])=><div key={title}><span>{icon}</span><strong>{title}</strong><small>{copy}</small></div>)}</div></main><CtaBanner/><Footer/></>
}

function DiningCardGrid() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      grid.classList.add('is-entered')
      return undefined
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        grid.classList.add('is-entered')
        observer.disconnect()
      }
    }, { threshold: 0.04, rootMargin: '0px 0px -6% 0px' })
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return <div className="ci-card-grid ci-dining-grid" ref={gridRef}>{dining.map((item,index)=><article className="ci-list-card ci-dining-card" key={item[0]} style={{'--dining-entry-delay': `${index * 75}ms`}}><div className={`ci-list-image ci-image-${index}`}><img src={`/images/${item[3]}`} alt={item[4]} loading="lazy" decoding="async"/></div><div className="ci-list-copy"><h3>{item[0]}</h3><p className="ci-list-meta">{item[1]}</p><p>{item[2]}</p><a href="/book" aria-label={`Explore ${item[0]}`}>→</a></div></article>)}</div>
}

function ListingPage({ type }) {
  const isDining = type === 'dining'
  return <><Hero page={type}/><main className={`ci-listing${isDining ? '' : ' ci-listing--activities'}`}><p className="ci-eyebrow">{isDining ? 'OUR DINING EXPERIENCES' : 'OUR ACTIVITIES'}</p><h2>{isDining ? 'Exceptional Flavors, Unique Settings' : 'More Than Just a Stay'}</h2><p className="ci-listing-intro">{isDining ? 'Choose from a variety of dining venues, each offering a distinct atmosphere, menu, and view of the island’s natural beauty.' : 'Whether you’re seeking adventure, relaxation, or cultural connection, Crown Island offers a variety of experiences designed to make your stay extraordinary.'}</p>{isDining ? <DiningCardGrid/> : <div className="ci-activity-grid">{activities.map(activity => <ActivityCard key={activity.name} activity={activity}/>)}</div>}</main><CtaBanner/><Footer/></>
}

const spots = [
  { id:'C03', title:'Front Row Cabana', perks:'Best Sea View · More Privacy · Shaded Area', price:'3,500', left:'70.2%', top:'35.4%' },
  { id:'C02', title:'Ocean View Cabana', perks:'Ocean View · Beach Access · Shaded Area', price:'3,000', left:'45.9%', top:'35.4%' },
  { id:'C05', title:'Palm Cabana', perks:'Garden View · Extra Privacy · Shaded Area', price:'3,200', left:'49.5%', top:'60.9%' },
]

const bookingThumbnails = [
  { image:'booking-thumb-c03.png', galleryImage:'booking-map-art.jpg', alt:'Aerial view of cabanas' },
  { image:'booking-thumb-pool.png', galleryImage:'booking-summary-image.png', alt:'Poolside cabanas' },
  { image:'booking-thumb-beach.png', galleryImage:'calm.jpg', alt:'Beach cabanas' },
  { image:'booking-thumb-pool.png', galleryImage:'booking-summary-image.png', alt:'Poolside cabanas from another angle' },
]

function MapViewToggle({ view, onChange }) {
  const views = [
    { name:'Beach View', icon:'beach' },
    { name:'Map View', icon:'map' },
  ]

  return <div className="ci-view-toggle" role="group" aria-label="Map display mode">
    {views.map(({ name, icon }) => <button key={name} type="button" className={view===name?'is-selected':''} aria-pressed={view===name} onClick={()=>onChange(name)}>
      <img className="ci-view-toggle-icon" src={icon==='beach'?'/images/view-beach-icon.svg':'/images/view-map-icon.svg'} alt="" aria-hidden="true"/>{name}
    </button>)}
  </div>
}

function BookingPage() {
  const today = getLocalDateInputValue()
  const [spotId,setSpotId] = useState('C03')
  const [step,setStep] = useState(1)
  const [submitted,setSubmitted] = useState(false)
  const [view,setView] = useState('Beach View')
  const [galleryIndex,setGalleryIndex] = useState(0)
  const [date,setDate] = useState(today)
  const [guests,setGuests] = useState('2 Adults · 1 Child')
  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('en-EG',{day:'numeric',month:'short',year:'numeric'})
  const spot = spots.find(item=>item.id===spotId)
  const mapMarkers = [
    { id:'C01', left:'25.42%', top:'28.74%', status:'available' },
    { id:'C02', left:'46.08%', top:'28.74%', status:'available' },
    { id:'C03', left:'70.47%', top:'28.74%', status:'available' },
    { id:'C04', left:'25.42%', top:'54.25%', status:'unavailable' },
    { id:'C05', left:'49.45%', top:'54.25%', status:'available' },
    { id:'C06', left:'76.88%', top:'54.25%', status:'available' },
  ]
  return <><Hero page="book"/><nav className="ci-stepper" aria-label="Booking steps">{['Choose Spot','Date & Guests','Summary','Payment','Confirmation'].map((label,i)=><button key={label} className={step===i+1?'active':''} type="button" onClick={()=>{if(i<step)setStep(i+1)}}><span>{i+1===step?'●':i+1}.</span> {label}</button>)}</nav><main id="spot-selection" className="ci-booking-main"><div className="ci-booking-title"><p className="ci-eyebrow">{step===1?'SELECT YOUR SPOT':`STEP ${step} OF 5`}</p><h2>{step===1?'Find Your Perfect Spot':['','Find Your Perfect Spot','Choose Date & Guests','Review Your Booking','Payment Details','Booking Confirmed'][step]}</h2><p>Each cabana offers a unique view and level of privacy. Choose the one that fits your mood and enjoy a special day on the island.</p></div><div className="ci-booking-layout"><section className="ci-map-column" aria-label="Choose a cabana">
    <div className="ci-map-selector"><div className="ci-map"><img className="ci-map-art" src={`/images/${bookingThumbnails[galleryIndex].galleryImage}`} alt={bookingThumbnails[galleryIndex].alt} loading="eager" decoding="async"/><MapViewToggle view={view} onChange={setView}/><button type="button" className="ci-gallery-arrow ci-gallery-arrow--previous" aria-label="Previous gallery image" onClick={()=>setGalleryIndex(index=>(index-1+bookingThumbnails.length)%bookingThumbnails.length)}><GalleryArrowIcon direction="left"/></button><button type="button" className="ci-gallery-arrow ci-gallery-arrow--next" aria-label="Next gallery image" onClick={()=>setGalleryIndex(index=>(index+1)%bookingThumbnails.length)}><GalleryArrowIcon direction="right"/></button>{galleryIndex===0&&mapMarkers.map(marker=>{const selectedSpot=spots.find(item=>item.id===marker.id);const selected=spotId===marker.id;const status=selected?'selected':marker.status;const markerContent=<><img className="ci-map-pin-art" src={`/images/map-marker-${status}.svg`} alt=""/><span className="ci-map-pin-label">{marker.id}</span><span className="ci-map-pin-dot" aria-hidden="true"/></>;return selectedSpot?<button key={marker.id} type="button" className="ci-map-pin" aria-label={`Select cabana ${marker.id}`} aria-pressed={selected} style={{left:marker.left,top:marker.top}} onClick={()=>setSpotId(marker.id)}>{markerContent}</button>:<span key={marker.id} className="ci-map-pin ci-map-pin--static" aria-hidden="true" style={{left:marker.left,top:marker.top}}>{markerContent}</span>})}</div>
      <div className="ci-map-legend" aria-label="Spot availability"><div className="available"><span className="ci-map-legend-dot available"/>Available</div><div className="selected"><span className="ci-map-legend-dot selected"/>Selected</div><div className="unavailable"><span className="ci-map-legend-dot unavailable"/>Unavailable</div></div>
      <div className="ci-thumbnails" aria-label="Image gallery">{bookingThumbnails.map((thumbnail,index)=><button key={`${thumbnail.galleryImage}-${index}`} className={galleryIndex===index?'selected':''} type="button" onClick={()=>setGalleryIndex(index)} aria-label={`Show ${thumbnail.alt}`} aria-pressed={galleryIndex===index}><img src={`/images/${thumbnail.image}`} alt="" loading="lazy" decoding="async"/></button>)}</div>
    </div>
    <article className="ci-spot-detail"><img src={`/images/${spot.id==='C03'?'booking-spot-detail-image.png':spot.id==='C02'?'booking-thumb-pool.png':'booking-thumb-beach.png'}`} alt={`Aerial view for ${spot.title}`} loading="lazy" decoding="async"/><div className="ci-spot-detail-copy"><span className="ci-spot-id">{spot.id}</span><h3>{spot.title}</h3><div className="ci-spot-perks"><span><img src="/images/booking-perk-sea.png" alt=""/>Best Sea View</span><span><img src="/images/booking-perk-privacy.png" alt=""/>More Privacy</span><span><img src="/images/booking-perk-shade.png" alt=""/>Shaded Area</span></div><p>Perfectly located in the front row with a direct view of the ocean. Enjoy the ultimate privacy and comfort in your own cabana.</p></div></article>
    </section><aside className="ci-summary"><p className="ci-eyebrow">YOUR BOOKING</p><div className="ci-summary-place"><img src="/images/booking-summary-image.png" alt="Calm private cabana beside the pool"/><span><strong>Calm</strong><small>Private Cabana · Beach</small></span><button type="button" onClick={()=>setStep(1)}>Change</button></div>
      <div className="ci-summary-line ci-summary-line--spot"><img className="ci-summary-icon" src="/images/booking-icon-spot.png" alt=""/><span><small>Selected Spot</small><span>{spot.id} · {spot.title}</span></span><button type="button" onClick={()=>setStep(1)}>Change</button></div>
      <div className="ci-summary-line ci-summary-line--date"><img className="ci-summary-icon" src="/images/booking-icon-date.png" alt=""/><span><small>Date</small>{step>=2?<input type="date" value={date} min={today} required onChange={event=>setDate(event.target.value)}/>:<span>{formattedDate}</span>}</span><button type="button" onClick={()=>setStep(2)}>Change</button></div>
      <div className="ci-summary-line ci-summary-line--guests"><img className="ci-summary-icon" src="/images/booking-icon-guests.png" alt=""/><span><small>Guests</small>{step>=2?<select value={guests} onChange={event=>setGuests(event.target.value)}><option>1 Adult</option><option>2 Adults</option><option>2 Adults · 1 Child</option><option>2 Adults · 2 Children</option><option>4 Adults</option></select>:<span>{guests}</span>}</span><button type="button" onClick={()=>setStep(2)}>Change</button></div>
      <p className="ci-price-label">From</p><p className="ci-price">EGP {spot.price} <small>/ day</small></p>{submitted?<p role="status" className="ci-submit-message">Your booking request is ready. Online payment and live availability are not connected.</p>:<button className="ci-continue" type="button" onClick={()=>{if(step===2&&!date)return;if(step<3){setStep(step+1)}else{setSubmitted(true)}}}>{step<3?'Continue':'Confirm booking'} <ArrowIcon/></button>}</aside></div><Features label="WHY YOU’LL LOVE IT"/></main><Footer/></>
}

export default function ContentPage({route}) {
  if(route==='/beaches') return <div className="ci-page"><BeachPage/></div>
  if(route==='/activities'||route==='/dining') return <div className="ci-page"><ListingPage type={route.slice(1)}/></div>
  return <div className="ci-page ci-page--book"><BookingPage/></div>
}

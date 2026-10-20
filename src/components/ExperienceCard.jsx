import { ArrowIcon, GuestsIcon, SunIcon } from './Icons.jsx'

export default function ExperienceCard({ experience, onChoose }) {
  return (
    <article className="experience-card">
      <div className="experience-image-wrap">
        <img className="experience-image" src={experience.image} alt={experience.imageAlt} loading="lazy" decoding="async" />
        <span className={`experience-badge${experience.badge === 'Seasonal' ? ' experience-badge--seasonal' : ''}`}>
          {experience.badge}
        </span>
      </div>
      <div className="experience-card-body">
        <p className="experience-type">Beach experience</p>
        <h3>{experience.name}</h3>
        <p className="experience-category">{experience.category}</p>
        <p className="experience-description">{experience.description}</p>
        <div className="experience-meta">
          <span><GuestsIcon /> Up to 4 guests</span>
          <span className="availability"><SunIcon /> <i /> Available</span>
        </div>
        <p className="experience-price">From EGP 3,000 / day</p>
        <button className="experience-details" type="button" onClick={() => onChoose(experience.name)}>
          View details <ArrowIcon />
        </button>
        <button className="button button--gold experience-book" type="button" onClick={() => onChoose(experience.name)}>
          Book now <ArrowIcon />
        </button>
      </div>
    </article>
  )
}

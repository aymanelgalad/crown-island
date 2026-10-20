import { CalendarIcon, ChevronIcon, GuestsIcon, ArrowIcon } from './Icons.jsx'
import { getLocalDateInputValue } from '../utils/date.js'

export default function BookingBar({ onSearch, selectedExperience }) {
  const today = getLocalDateInputValue()
  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    onSearch({
      date: form.get('date'),
      guests: form.get('guests'),
      experience: selectedExperience,
    })
  }

  return (
    <form className="booking-bar" id="booking" onSubmit={handleSubmit}>
      <label className="booking-field booking-field--date">
        <CalendarIcon />
        <span className="booking-field-copy">
          <span className="booking-label">Date</span>
          <input id="booking-date" name="date" type="date" defaultValue={today} min={today} required />
        </span>
        <ChevronIcon />
      </label>
      <label className="booking-field booking-field--guests">
        <GuestsIcon />
        <span className="booking-field-copy">
          <span className="booking-label">Guests</span>
          <select name="guests" defaultValue="2 Adults · 1 Child" aria-label="Number of guests">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults · 1 Child</option>
            <option>2 Adults · 2 Children</option>
            <option>4 Adults</option>
          </select>
        </span>
        <ChevronIcon />
      </label>
      <button className="button button--gold booking-submit" type="submit">
        Explore availability <ArrowIcon />
      </button>
    </form>
  )
}

import React from 'react'
import './Navigation.css'

export default function Navigation({ isActive, handleClick }) {
  return (
    <section className="Navigation">
      <button
        name="characters"
        onClick={handleClick}
        className="Navigation-button"
      >
        Characters
      </button>
      <button
        name="locations"
        onClick={handleClick}
        className="Navigation-button"
      >
        Locations
      </button>
    </section>
  )
}

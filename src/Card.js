import React, { useState } from 'react'
import './Card.css'

export default function Card({ name, status, species, gender, image }) {
  const [isVisible, setIsVisble] = useState(false)

  return (
    <section className={species === 'Alien' ? 'Card--alien Card' : 'Card'}>
      <h2>{name}</h2>
      <img src={image} alt="" className="image" />
      <button className="Card-button" onClick={() => setIsVisble(!isVisible)}>
        {' '}
        {isVisible ? 'Hide it' : 'Show more'}
      </button>
      {isVisible && (
        <p className="Card-list">
          Species {species.toLowerCase()}, {gender.toLowerCase()} and status is{' '}
          {status.toLowerCase()}.
        </p>
      )}
    </section>
  )
}

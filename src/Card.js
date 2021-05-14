import React, { useState, useEffect } from 'react'
import './Card.css'

export default function Card({ name, status, id, species, image }) {
  const [isVisible, setIsVisble] = useState(true)
  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={image} alt="" className="image" />
      <button className="Card-button" onClick={() => setIsVisble(!isVisible)}>
        {' '}
        {isVisible ? 'Hide more' : 'Show more'}
      </button>
      {isVisible && (
        <ul className="Card-list">
          <li>Status: {status}</li>
          <li>Species: {species}</li>
        </ul>
      )}
    </section>
  )
}

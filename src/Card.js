import React, { useState, useEffect } from 'react'
import './Card.css'

export default function Card({ name, status, id, species, image }) {
  const [isVisible, setIsVisble] = useState(true)
  return (
    <section className="Card">
      <h2>{name}</h2>
      <button onClick={() => setIsVisble(!isVisible)}>
        {' '}
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && (
        <>
          <ul className="Card-list">
            <li>
              <img src={image} alt="" className="image" />
            </li>
            <li>Status: {status}</li>
            <li>Species: {species}</li>
          </ul>
        </>
      )}
    </section>
  )
}

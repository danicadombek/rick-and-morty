import React from 'react'
import './Location.css'

export default function Location({ id, name, dimension }) {
  return (
    <section key={id} className="Location">
      <h2>{name}</h2>
      <ul className="Location-list">
        <li>Dimension: {dimension}</li>
      </ul>
    </section>
  )
}

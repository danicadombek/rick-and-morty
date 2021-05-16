import React from 'react'
import './Location.css'

export default function Location({ id, name, dimension }) {
  return (
    <section key={id} className="Location">
      <h2>Location</h2>
      <ul>
        <li>Name: {name}</li>
        <li>Dimension {dimension}</li>
      </ul>
    </section>
  )
}

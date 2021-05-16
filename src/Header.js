import React from 'react'
import './Header.css'
import image from './assets/rick-morty-header.jpg'

export default function Header() {
  return (
    <section>
      <img src={image} className="Header-image" alt="" />
    </section>
  )
}

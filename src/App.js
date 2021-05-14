import React, { useState, useEffect } from 'react'
import './App.css'
import './Header'
import Header from './Header'

export default function App() {
  const [characters, setCharacters] = useState([])
  const url = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <Header />
      <ul>
        {characters.map(el => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  )
}

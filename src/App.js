import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
  }, [url])

  return (
    <div className="App">
      <ul>
        {characters.map(el => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  )
}

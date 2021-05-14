import React, { useState, useEffect } from 'react'
import './App.css'
import './Header'
import './Card'
import Header from './Header'
import Card from './Card'

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

      {characters.map(character => {
        const { name, status, id, species, image } = character

        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
          />
        )
      })}
    </div>
  )
}

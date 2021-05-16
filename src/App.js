import React, { useState, useEffect } from 'react'
import './App.css'
import './Header'
import './Card'
import Header from './Header'
import Card from './Card'
import background from '../src/assets/rick-morty.jpg'

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
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />

      {characters.map(character => {
        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        )
      })}
    </div>
  )
}

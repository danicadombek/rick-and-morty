import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'
import background from '../src/assets/rick-morty.jpg'
import Navigation from './Navigation'

export default function App() {
  const [characters, setCharacters] = useState([])
  const url = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [url])

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Navigation />
      {characters.map(character => {
        return (
          <Card
            key={character.id}
            name={character.name.toUpperCase()}
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

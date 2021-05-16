import React, { useState, useEffect } from 'react'
import background from '../src/assets/rick-morty.jpg'
import './App.css'
import Header from './Header'
import Card from './Card'
import Navigation from './Navigation'
import Location from './Location'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([])
  const url = 'https://rickandmortyapi.com/api/character'
  const url2 = 'https://rickandmortyapi.com/api/location'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [url])

  useEffect(() => {
    fetch(url2)
      .then(res => res.json())
      .then(res => setLocations(res.results))
      .catch(error => console.error(error))
  }, [url2])

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

      {locations.map(location => {
        const { name, dimension, id } = location
        return (
          <Location key={id} name={name.toUpperCase()} dimension={dimension} />
        )
      })}
    </div>
  )
}

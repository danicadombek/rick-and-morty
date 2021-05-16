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
  const urlCharacters = 'https://rickandmortyapi.com/api/character'
  const urlLocations = 'https://rickandmortyapi.com/api/location'

  const [isActive, setIsActive] = useState({
    characters: true,
    locations: false,
  })

  useEffect(() => {
    fetch(urlCharacters)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [urlCharacters])

  useEffect(() => {
    fetch(urlLocations)
      .then(res => res.json())
      .then(res => setLocations(res.results))
      .catch(error => console.error(error))
  }, [urlLocations])

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Navigation isActive={isActive} handleClick={handleClick} />

      {isActive.characters &&
        characters.map(character => {
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

      {isActive.locations &&
        locations.map(location => {
          const { name, dimension, id } = location
          return <Location key={id} name={name} dimension={dimension} />
        })}
    </div>
  )

  function handleClick(event) {
    const value = event.target.name
    const object = { characters: false, locations: false }
    object[value] = true
    setIsActive(object)
  }
}

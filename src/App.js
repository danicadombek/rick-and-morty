import './App.css'

let characters

getAllCharacters().then(data => {})

export default function App() {
  return <div>Hello world</div>
}

function getAllCharacters() {
  const url = 'https://rickandmortyapi.com/api/character'
  return fetch(url).then(response => response.json())
}

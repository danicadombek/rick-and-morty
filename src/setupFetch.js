export default function setupFetch() {
  getAllCharacters()

  function getAllCharacters() {
    const url = 'https://rickandmortyapi.com/api/character'
    return fetch(url).then(response => response.json())
  }
}

function filterPlayers (namePlayer, players, callback) {
  const playersContainer = document.createElement('div')

  players.forEach(player => {
    if (namePlayer.length > 0 && player.name.startsWith(namePlayer)) {
      const playerElement = document.createElement('div')
      playerElement.classList.add('result')
      playerElement.setAttribute('data-id', player.id)
      playerElement.innerHTML = `${player.name}`
      playersContainer.appendChild(playerElement)
    }
  })

  return playersContainer.outerHTML
}

function Search (players, callback) {
  const searchContainer = document.createElement('div')
  const input = document.createElement('input')
  const results = document.createElement('div')

  searchContainer.classList.add('search')
  results.classList.add('search-results')

  input.addEventListener('keyup', (e) => {
    results.innerHTML = filterPlayers(e.target.value, players, callback)
  })

  results.addEventListener('click', e => {
    const target = e.target
    if (target.className.includes('result')) {
      const playerIdSelected = target.getAttribute('data-id')
      callback(playerIdSelected)
    }
  })

  searchContainer.append(input)
  searchContainer.append(results)

  return searchContainer
}

export default Search

import state from "../utils/state"

function updatePlaceholder(input) {
    input.placeholder = `Intento ${state.attempts+1} de 6`
}


function filterPlayers(namePlayer) {
    const playersContainer = document.createElement('div')

    state.players.forEach(player => {
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

function Search(callback) {
    const searchContainer = document.createElement('div')
    const input = document.createElement('input')
    const results = document.createElement('div')

    updatePlaceholder(input)
    searchContainer.classList.add('search')
    results.classList.add('search-results')

    input.addEventListener('keyup', (e) => {
        results.innerHTML = filterPlayers(e.target.value)
    })

    results.addEventListener('click', e => {
        const target = e.target
        if (target.className.includes('result')) {
            const playerIdSelected = target.getAttribute('data-id')
            input.value = ''

            state.lives--
            state.attempts++

            callback(playerIdSelected)
            updatePlaceholder(input)
        }
    })

    searchContainer.append(input)
    searchContainer.append(results)

    return searchContainer
}

export default Search

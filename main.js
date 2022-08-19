import Search from './components/Search'
import './style.css'
import generateRandomPlayer from './utils/generateRandomPlayer'
import getPlayers from './utils/getPlayers'
import renderPlayer from './components/Player'
import state from './utils/state'

const app = document.querySelector('#app')

function renderWin() {
    const searchContainer = document.querySelector('.search')
    searchContainer.classList.add('win')
    searchContainer.innerHTML = `
        <span>${state.playerAnswer.name}</span>
    `
}

function selector(playerId) {
    if (state.win) {
        return
    }

    const playerSelected = state.players.find((player) => player.id == playerId)

    const playersContiners = document.createElement('div')
    playersContiners.appendChild(renderPlayer(playerSelected))
    app.appendChild(playersContiners)

    console.log(playerId, state.playerAnswer.id)

    if (parseInt(playerId) === state.playerAnswer.id) {
        alert('Win!!' + ", Attempts: " + state.attempts)
        state.win = true
        renderWin()
    }
}

async function init() {
    state.players = await getPlayers()
    state.playerAnswer = await generateRandomPlayer(state.players)

    app.appendChild(Search(selector))
}

document.addEventListener('DOMContentLoaded', init)

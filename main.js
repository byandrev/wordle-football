import './style.css'

import generateRandomPlayer from './utils/generateRandomPlayer'
import getPlayers from './utils/getPlayers'
import state from './utils/state'
import getFlags from './utils/getFlags'

import Search from './components/Search'
import renderPlayer from './components/Player'

const app = document.querySelector('#app')

function renderWin () {
  const searchContainer = document.querySelector('.search')
  searchContainer.classList.add('win')
  searchContainer.innerHTML = `
        <span>${state.playerAnswer.name}</span>
    `
}

function selector (playerId) {
  if (state.win) {
    return
  }

  const playerSelected = state.players.find((player) => player.id === parseInt(playerId))
  const flagPlayer = state.flags.find(flag => flag.name === playerSelected.nationality) || null

  playerSelected.flagImage = flagPlayer.image

  const playersContiners = document.createElement('div')
  playersContiners.appendChild(renderPlayer(playerSelected))
  app.appendChild(playersContiners)

  if (parseInt(playerId) === state.playerAnswer.id) {
    alert('Win!!' + ', Attempts: ' + state.attempts)
    state.win = true
    renderWin()
  }
}

async function init () {
  state.players = await getPlayers()
  state.playerAnswer = await generateRandomPlayer(state.players)
  state.flags = await getFlags()

  app.appendChild(Search(selector))
}

document.addEventListener('DOMContentLoaded', init)

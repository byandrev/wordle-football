import Search from './components/Search'
import './style.css'
import generateRandomPlayer from './utils/generateRandomPlayer'
import getPlayers from './utils/getPlayers'
import renderPlayer from './components/Player'

const app = document.querySelector('#app')
let players = null
let playerAnswer = null
let lives = 6

function selector (playerId) {
  const playerSelected = players[playerId]

  const playersContiners = document.createElement('div')
  playersContiners.appendChild(renderPlayer(playerSelected, playerAnswer))
  app.appendChild(playersContiners)

  lives--
}

async function init () {
  playerAnswer = await generateRandomPlayer()
  players = await getPlayers()

  app.appendChild(Search(players, selector))
}

document.addEventListener('DOMContentLoaded', init)

import state from "../utils/state"

function renderPlayer (player) {
  const playerContainer = document.createElement('div')
  const playerAnswer = state.playerAnswer
  playerContainer.classList.add('player')

  playerContainer.innerHTML = `
    <div>
      <span class="player-name">${player.name}</span>
    </div>
    <div class="player-info">
      <span class="${player.country === playerAnswer.country && 'correct'}">${player.country}</span>
      <span class="${player.league === playerAnswer.league && 'correct'}">${player.league}</span>
      <span class="${player.team === playerAnswer.team && 'correct'}">${player.team}</span>
      <span class="${player.age === playerAnswer.age && 'correct'}">
        ${player.age !== playerAnswer.age ? player.age > playerAnswer.age ? '🔻' : '🔺' : ''}
        ${player.age}
      </span>
      <span class="${player.pos === playerAnswer.pos && 'correct'}">${player.pos}</span>
    </div>
  `

  return playerContainer
}

export default renderPlayer

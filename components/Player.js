import state from '../utils/state'

async function renderPlayer (player) {
  const playerContainer = document.createElement('div')
  const playerAnswer = state.playerAnswer
  playerContainer.classList.add('player')

  console.log(player)

  playerContainer.innerHTML = `
    <div class="player-header">
      <img src="${player.photo}" class="player-avatar" />
      <span class="player-name">${player.name}</span>
    </div>
    <div class="player-info">
      <span class="${
        player.nationality === playerAnswer.nationality && 'correct'
      }">
        <img src="${player.flagImage}" />
      </span>
      <span class="${
        player.league.name === playerAnswer.league.name && 'correct'
      }">${player.league.name}</span>
      <span class="${
        player.team.name === playerAnswer.team.name && 'correct'
      }">${player.team.name}</span>
      <span class="${player.age === playerAnswer.age && 'correct'}">
        ${
          player.age !== playerAnswer.age
            ? player.age > playerAnswer.age
              ? '🔻'
              : '🔺'
            : ''
        }
        ${player.age}
      </span>
      <span class="${player.position === playerAnswer.position && 'correct'}">${
    player.position
  }</span>
    </div>
  `

  return playerContainer
}

export default renderPlayer

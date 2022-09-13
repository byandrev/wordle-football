import state from '../utils/state'

function renderPlayer (player) {
  const playerContainer = document.createElement('div')
  const playerAnswer = state.playerAnswer
  playerContainer.classList.add('player')

  playerContainer.innerHTML = `
    <div class="player-header">
      <img src="${player.photo}" class="player-avatar" />
      <span class="player-name">${player.name}</span>
    </div>
    <div class="player-info">
      <span class="${
        player.league.name === playerAnswer.league.name && 'correct'
      }">
        <img src="${player.league.logo}" title="${player.league.name}" class="player-logo player-team" />
      </span>

      <span class="${
        player.team.name === playerAnswer.team.name && 'correct'
      }">
        <img src="${player.team.logo}" title="${player.team.name}" class="player-logo" />
      </span>

      <span class="${
        player.nationality === playerAnswer.nationality && 'correct'
      }">
        <img src="${player.flagImage}" title="${player.nationality}" class="player-logo player-flag" />
      </span>

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

function renderPlayer (player, playerAnswer) {
  const playerContainer = document.createElement('div')
  playerContainer.classList.add('players-selecteds')

  playerContainer.innerHTML = `
    <div>
      ${player.id} - ${player.name}
    </div>
    <div class="player-info">
      <span class="${player.country === playerAnswer.country && 'correct'}">${player.country}</span> - 
      <span class="${player.team === playerAnswer.team && 'correct'}">>${player.team}</span> - 
      <span>${player.age}</span> - 
      <span class="${player.pos === playerAnswer.pos && 'correct'}">>${player.pos}</span>
    </div>
  `

  return playerContainer
}

export default renderPlayer

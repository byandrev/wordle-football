import React from 'react'
import Player from "./Player"

import styles from '../styles/PlayersSelecteds.module.css'

function PlayersSelected ({ players = [], playerAnswer }) {
  return <div className={styles.playersSelecteds}>
    { players.map(player => (
      <Player key={player.id} playerAnswer={playerAnswer} {...player} />
    )) }
  </div>
}

export default React.memo(PlayersSelected)

import React, { useEffect, useState } from 'react'
import styles from '../styles/Search.module.css'

import PlayerResult from './PlayerResult'

function Search ({ players = [], win, setPlayerSelected, playerAnswer, playersHistory }) {
  const [playerName, setPlayerName] = useState('')
  const [playersResult, setPlayersResult] = useState(players)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const filters = players.filter(player => player.name.toLowerCase().includes(playerName.toLowerCase()))
    setPlayersResult([...new Map(filters.map((m) => [m.id, m])).values()])
  }, [playerName])

  const handleChange = (evt) => {
    setPlayerName(evt.target.value.trim())

    if (evt.target.value.length === 0) {
      setShowResults(false)
      return
    }

    setShowResults(true)
  }

  const handleClick = (player) => {
    setPlayerSelected(player)
    setShowResults(false)
    setPlayerName('')
  }

  return <div className={styles.search}>
    <input type="text" disabled={win} placeholder={`Intento ${playersHistory.length} / 6`} className={`${styles.input} ${win && 'block'}`} value={playerName} onChange={handleChange} />

    {showResults &&
      <div className={styles.results}>
        { playersResult.map(player => (
            <div onClick={() => handleClick(player)} key={player.id}>
              <PlayerResult
                name={player.name}
                avatar={player.photo}
              />
            </div>))
        }
      </div>
    }
  </div>
}

export default Search

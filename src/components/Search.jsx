import React, { useEffect, useState } from 'react'

import styles from '../styles/Search.module.css'

import PlayerResult from './PlayerResult'

function Search ({ players, selectPlayer }) {
  const [playerName, setPlayerName] = useState('')
  const [filteredsPlayers, setFilteredsPlayers] = useState(players)
  const [showSearchResults, setShowSearchResults] = useState(false)

  useEffect(() => {
    const filters = players.filter(player => player.name.toLowerCase().includes(playerName))
    setFilteredsPlayers([...new Map(filters.map((m) => [m.id, m])).values()])
  }, [playerName])

  const handleChange = (evt) => {
    setPlayerName(evt.target.value.trim())
    setShowSearchResults(true)
  }

  const handleClick = (player) => {
    selectPlayer(player)
    setShowSearchResults(false)
    setPlayerName('')
  }

  return <div className={styles.search}>
    <input type="text" className={styles.input} value={playerName} onChange={handleChange} />

    {showSearchResults &&
      <div className={styles.results}>
        { filteredsPlayers.map(player => (
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

export default React.memo(Search)

import { useEffect, useState } from 'react'
import styles from '../styles/Player.module.css'
import PlayerItem from './PlayerItem'

function Player ({ flags, playerAnswer, name, photo, team, league, nationality, position, age }) {
  const [flag, setFlag] = useState(null)

  useEffect(() => {
    setFlag(flags.find(flag => flag.name === nationality))
  }, [])

  return <div className={styles.player}>
    <div className={styles.header}>
      <img src={photo} className={styles.avatar} />
      <span className={styles.name}>{name}</span>
    </div>

    <div className={styles.info}>
      <PlayerItem selected={team.name} answer={playerAnswer.team.name} icon={team.logo} />
      <PlayerItem selected={league.name} answer={playerAnswer.league.name} icon={league.logo} />
      <PlayerItem selected={nationality} answer={playerAnswer.nationality} icon={flag && flag.image} />
      <PlayerItem selected={age} answer={playerAnswer.age} content={age} />
      <PlayerItem selected={position} answer={playerAnswer.position} content={position} />
    </div>
  </div>
}

export default Player

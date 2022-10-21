import styles from '../styles/Player.module.css'
import PlayerItem from './PlayerItem'

// TODO: Poner las banderas de las nacionalidades

function Player ({ playerAnswer, name, photo, team, league, nationality, position, age }) {
  return <div className={styles.player}>
    <div className={styles.header}>
      <img src={photo} className={styles.avatar} />
      <span className={styles.name}>{name}</span>
    </div>

    <div className={styles.info}>
      <PlayerItem selected={team.name} answer={playerAnswer.team.name} icon={team.logo} />
      <PlayerItem selected={league.name} answer={playerAnswer.league.name} icon={league.logo} />
      <PlayerItem selected={nationality} answer={playerAnswer.nationality} icon={league.flag} />
      <PlayerItem selected={age} answer={playerAnswer.age} content={age} />
      <PlayerItem selected={position} answer={playerAnswer.position} content={position} />
    </div>
  </div>
}

export default Player

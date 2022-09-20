import styles from '../styles/Player.module.css'

function Player ({ playerAnswer, name, photo, team, league, position, age }) {
  return <div className={styles.player}>
    <div className={styles.header}>
      <img src={photo} className={styles.avatar} />
      <span className={styles.name}>{name}</span>
    </div>

    <div className={styles.info}>
      <div className={`${styles.item} ${playerAnswer.team.name === team && 'correct'}`}>
        <img src={team.logo} className={styles.logo} />
      </div>

      <div className={styles.item}>
        <img src={league.logo} className={styles.logo} />
      </div>

      <div className={styles.item}>
        <img src={league.flag} className={styles.logo} />
      </div>

      <div className={styles.item}>
        <span>{age}</span>
      </div>

      <div className={styles.item}>
        <span>{position}</span>
      </div>
    </div>
  </div>
}

export default Player

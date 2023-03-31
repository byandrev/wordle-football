import styles from '../styles/PlayerResult.module.css'

function PlayerResult ({ name, avatar }) {
  return <div className={styles.player}>
    <img src={avatar} className={styles.avatar} />
    <p className={`nes-text is-primary ${styles.name}`}>{name}</p>
  </div>
}

export default PlayerResult

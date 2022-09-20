import styles from '../styles/PlayerResult.module.css'

function PlayerResult ({ name, avatar }) {
  return <div className={styles.player}>
    <img src={avatar} className={styles.avatar} />
    <p className={styles.name}>{name}</p>
  </div>
}

export default PlayerResult

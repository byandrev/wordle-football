import styles from '../styles/PlayerItem.module.css'

function PlayerItem ({ selected, answer, icon = null, content = null }) {
  return <div className={`${styles.item} ${selected === answer && styles.correct}`}>
    { icon && <img src={icon} className={styles.logo} /> }
    { content && <span>{content}</span> }
  </div>
}

export default PlayerItem

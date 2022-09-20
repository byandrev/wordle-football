import styles from '../styles/Header.module.css'

function Header () {
  return <header className={styles.header}>
    <h1 className={styles.logo}>Wordle Football</h1>
  </header>
}

export default Header

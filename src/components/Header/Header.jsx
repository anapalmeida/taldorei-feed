import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo Tal'Dorei Feed" />
    </header>
  )
}

export default Header

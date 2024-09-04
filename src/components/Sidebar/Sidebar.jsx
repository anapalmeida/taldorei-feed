import { SignOut } from 'phosphor-react'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1544390539-0ccefa1b29af?q=60&w=430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <a href="#">
          <img src="https://i.imgur.com/BHOVUB4.jpeg" />
        </a>
        <a href="#">
          <strong>Laudna</strong>
        </a>
        <span>Hollow One sorcerer/warlock and a member of Bells Hells</span>
      </div>
      <footer>
        <a href="#">
          <SignOut size={20} />
          Sair
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar

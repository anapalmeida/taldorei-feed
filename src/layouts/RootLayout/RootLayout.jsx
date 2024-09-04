import Header from '../../components/Header/Header'
import PropTypes from 'prop-types'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './RootLayout.module.css'

function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </main>
    </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node and is required
}

export default RootLayout

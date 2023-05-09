import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.homeInner}>
        <Outlet />
      </div>
    </>
  )
}

export default Home

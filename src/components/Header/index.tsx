import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Logo from '../../assets/Logo'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import classNames from 'classnames'
import styles from './Header.module.scss'

const Header = () => {
  const menu = [
    { menu: 'Поиск Вакансий', link: '/' },
    { menu: 'Избранное', link: '/favorites' }
  ]
  const [menuActive, setMenuActive] = useState('Поиск Вакансий')
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(menuActive)
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Link to={'/'}>
          <Logo />
        </Link>
        <div className={styles.menu} onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <AiOutlineClose color="#5e96fc" /> : <AiOutlineMenu color="#5e96fc" />}
        </div>
        <ul className={styles.menuList}>
          {menu.map((value, index) => (
            <li
              onClick={() => {
                setMenuActive(value.menu)
                navigate(value.link)
              }}
              key={index}
              className={classNames(styles.menuItem, { [styles.active]: location.pathname === value.link })}>
              {value.menu}
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(styles.wrapModal, { [styles.wrapModalshow]: openMenu })}>
        <div className={classNames(styles.menuModal, { [styles.menuModalActive]: openMenu })}>
          <ul className={styles.menuListModal}>
            {menu.map((value, index) => (
              <li
                onClick={() => {
                  setMenuActive(value.menu)
                  navigate(value.link)
                  setOpenMenu(false)
                }}
                key={index}
                className={classNames(styles.menuItemModal, {
                  [styles.activemenuModal]: location.pathname === value.link
                })}>
                {value.menu}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

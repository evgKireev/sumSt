import { useNavigate } from 'react-router-dom'
import NoCardIcons from '../../assets/NoCardIcons'
import Button from '../Button'

import styles from './NoCard.module.scss'
import classNames from 'classnames'

type NoCardType = {
  text: string
  className?: string
  search?: boolean
}

const NoCard: React.FC<NoCardType> = ({ text, className, search }) => {
  const navigate = useNavigate()
  return (
    <div className={classNames(styles.wrap, className)}>
      <NoCardIcons />
      <div className={styles.title}>{text}</div>
      {search ? null : <Button onClick={() => navigate('/')} title={'Поиск Вакансий'} className={styles.btn} />}
    </div>
  )
}

export default NoCard

import Loc from '../../assets/Loc'
import Star from '../../assets/Star'
import StarFavorite from '../../assets/StarFavorite'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setVacanciesFavorites } from '../../redux/vacanciesSlice'

import styles from './Card.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

type CardType = {
  id: number
  profession: string
  firmName?: string
  town: string
  catalogues?: string
  typeWork: string
  paymentTo: number
  paymentFrom: number
  currency: string
}

const Card: React.FC<CardType> = ({ id, profession, town, typeWork, paymentTo, paymentFrom, currency }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const { vacanciesFavorites, dataVacancies } = useAppSelector((state) => state.vacanciesSlice)

  const navigateOneCard = (id: number) => {
    navigate(`/vacancies/${id}`)
  }
  const starVacancieHandler = (id: number) => {
    if (pathname === '/favorites') {
      const vacancie = vacanciesFavorites.find((value) => value.id === id)
      vacancie && dispatch(setVacanciesFavorites(vacancie))
    } else {
      const vacancie = dataVacancies.find((value) => value.id === id)
      vacancie && dispatch(setVacanciesFavorites(vacancie))
    }
  }
  const isBookmark = vacanciesFavorites.findIndex((value) => value.id === id) > -1
  return (
    <div data-elem={`vacancy-${id}`} className={styles.wrap}>
      <div className={styles.innerTitle}>
        <div onClick={() => navigateOneCard(id)}>{profession}</div>
        <div data-elem={`vacancy-${id}-shortlist-button`} onClick={() => starVacancieHandler(id)}>
          {isBookmark ? <StarFavorite /> : <Star />}
        </div>
      </div>
      <div className={styles.salary}>
        {paymentTo ? `з/п от ${paymentFrom} - ${paymentTo} ${currency}` : `з/п от ${paymentFrom} ${currency}`}
        <span>
          <span className={styles.dot}>•</span> {typeWork}
        </span>
      </div>
      <div className={styles.loc}>
        <Loc />
        {town}
      </div>
    </div>
  )
}

export default Card

import { useAppSelector } from '../../redux/hooks'

import Card from '../../components/Card'

import styles from './FavoriteVacancies.module.scss'
import NoCard from '../../components/NoCard'
import { useEffect } from 'react'

const FavoriteVacancies = () => {
  const { vacanciesFavorites } = useAppSelector((state) => state.vacanciesSlice)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(vacanciesFavorites))
  }, [vacanciesFavorites])
  return (
    <div className={styles.wrap}>
      {!vacanciesFavorites.length ? (
        <NoCard text={'Упс, здесь еще ничего нет!'} />
      ) : (
        vacanciesFavorites.map((value) => (
          <Card
            key={value.id}
            id={value.id}
            profession={value.profession}
            town={value.town.title}
            typeWork={value.type_of_work.title}
            paymentTo={value.payment_to}
            paymentFrom={value.payment_from}
            currency={value.currency}
          />
        ))
      )}
    </div>
  )
}

export default FavoriteVacancies

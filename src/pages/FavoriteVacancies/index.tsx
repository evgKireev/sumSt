import { useAppSelector } from '../../redux/hooks'

import Card from '../../components/Card'

import styles from './FavoriteVacancies.module.scss'
import NoCard from '../../components/NoCard'
import { useEffect } from 'react'
import usePagination from '../../hooks/usePagination'
import { Pagination } from '@mantine/core'

const FavoriteVacancies = () => {
  const { vacanciesFavorites } = useAppSelector((state) => state.vacanciesSlice)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(vacanciesFavorites))
  }, [vacanciesFavorites])
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } = usePagination({
    contentPerPage: 4,
    count: vacanciesFavorites.length
  })
  return (
    <>
      <div className={styles.wrap}>
        {!vacanciesFavorites.length ? (
          <NoCard text={'Упс, здесь еще ничего нет!'} />
        ) : (
          <div className="items">
            {vacanciesFavorites.slice(firstContentIndex, lastContentIndex).map((value: any) => (
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
            ))}
          </div>
        )}
      </div>
      {!vacanciesFavorites.length ? null : (
        <Pagination className={styles.pagination} value={page} onChange={setPage} total={totalPages} />
      )}
    </>
  )
}

export default FavoriteVacancies

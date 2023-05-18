import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Filter from '../../components/Filtr'
import Search from '../../components/Search'

import styles from './Main.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { authUser } from '../../redux/authUserSlice'
import { getVacancies } from '../../redux/vacanciesSlice'
import Loader from '../../components/Loader'
import NoCard from '../../components/NoCard'
import Pogination from '../../components/Pogination'
import classNames from 'classnames'

const Main = () => {
  const [valueSelect, setValueSelect] = useState<string | null>(null)
  const [valueSelectFrom, setValueSelectFrom] = useState<number | ''>('')
  const [valueSelectTo, setValueSelectTo] = useState<number | ''>('')
  const { dataVacancies, dataSelect, searchValue, statusVacancies, vacanciesFavorites, total } = useAppSelector(
    (state) => state.vacanciesSlice
  )
  const { poginationSelect } = useAppSelector((state) => state.poginationSlice)
  const totalPageCount = total > 500 ? Math.ceil(500 / 4 + 1) : Math.ceil(total / 4 + 1)
  const dispatch = useAppDispatch()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(vacanciesFavorites))
  }, [vacanciesFavorites])

  const btnSearchHandler = () => {
    dispatch(
      getVacancies({
        keyword: searchValue,
        page: poginationSelect,
        payment_from: valueSelectFrom,
        payment_to: valueSelectTo,
        catalogues: dataSelect.key
      })
    )
  }

  useEffect(() => {
    dispatch(authUser({}))
    btnSearchHandler()
  }, [searchValue, poginationSelect])

  return (
    <div className={styles.mainInner}>
      <Filter
        valueSelect={valueSelect}
        valueSelectFrom={valueSelectFrom}
        valueSelectTo={valueSelectTo}
        setValueSelect={setValueSelect}
        setValueSelectFrom={setValueSelectFrom}
        setValueSelectTo={setValueSelectTo}
      />
      <div className={styles.content}>
        <Search btnSearchHandler={btnSearchHandler} />
        {statusVacancies === 'fullfilled' ? (
          <div className={styles.contentCard}>
            {!dataVacancies.length && searchValue ? (
              <NoCard search={true} className={styles.noSearch} text={'Поиск не дал результатов'} />
            ) : (
              dataVacancies.map((value, index) => (
                <Card
                  key={index}
                  profession={value.profession}
                  town={value.town.title}
                  typeWork={value.type_of_work?.title}
                  paymentTo={value.payment_to}
                  paymentFrom={value.payment_from}
                  currency={value.currency}
                  id={value.id}
                />
              ))
            )}
          </div>
        ) : (
          <Loader className={styles.loader} />
        )}
        {!dataVacancies.length ? null : (
          <Pogination
            clasName={classNames({ [styles.pagination]: statusVacancies !== 'fullfilled' })}
            totalPageCount={totalPageCount}
          />
        )}
      </div>
    </div>
  )
}

export default Main

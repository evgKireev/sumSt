import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { getVacancie } from '../../redux/vacanciesSlice'

import Card from '../../components/Card'
import DescriptionCard from '../../components/DescriptionCard'
import Loader from '../../components/Loader'

import styles from './OneCard.module.scss'

export const OneCard = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { dataVacancie, statusVacancies } = useAppSelector((state) => state.vacanciesSlice)
  useEffect(() => {
    dispatch(getVacancie({ id }))
  }, [id])
  console.log()
  return (
    <div className={styles.wrap}>
      {statusVacancies === 'fullfilled' ? (
        <>
          {dataVacancie && (
            <Card
              id={dataVacancie.id}
              profession={dataVacancie?.profession}
              town={dataVacancie.town.title}
              typeWork={dataVacancie.type_of_work.title}
              paymentTo={dataVacancie?.payment_to}
              paymentFrom={dataVacancie?.payment_from}
              currency={dataVacancie?.currency}
            />
          )}
          <DescriptionCard />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

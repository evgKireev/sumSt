import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getIndustry, getVacancies, setSearchValue } from '../../redux/vacanciesSlice'

import Close from '../../assets/Close'
import Button from '../Button'
import SelectComponent from '../Select'
import NumInput from '../NumberInput'

import styles from './Filter.module.scss'
import classNames from 'classnames'
import { setPoginationSelect } from '../../redux/poginationSlice'

type FilterType = {
  valueSelect: string | null
  valueSelectFrom: number | ''
  valueSelectTo: number | ''
  setValueSelect: React.Dispatch<React.SetStateAction<string | null>>
  setValueSelectFrom: React.Dispatch<React.SetStateAction<number | ''>>
  setValueSelectTo: React.Dispatch<React.SetStateAction<number | ''>>
}

const Filter: React.FC<FilterType> = ({
  valueSelect,
  valueSelectFrom,
  valueSelectTo,
  setValueSelect,
  setValueSelectFrom,
  setValueSelectTo
}) => {
  const { industry, dataSelect } = useAppSelector((state) => state.vacanciesSlice)
  const dispatch = useAppDispatch()

  const filterVacanciesHandler = () => {
    dispatch(setPoginationSelect(0))
    dispatch(getVacancies({ payment_from: valueSelectFrom, payment_to: valueSelectTo, catalogues: dataSelect.key }))
  }

  const resetFilterHandler = () => {
    dispatch(setPoginationSelect(0))
    dispatch(setSearchValue(''))
    setValueSelect('')
    setValueSelectFrom('')
    setValueSelectTo('')
    dispatch(getVacancies({ payment_from: '', payment_to: '', catalogues: 0, keyword: '' }))
  }

  const disabled = useMemo(() => {
    return dataSelect.key || valueSelectFrom || valueSelectTo || valueSelect
  }, [dataSelect.key, valueSelectFrom, valueSelectTo, valueSelect])

  useEffect(() => {
    dispatch(getIndustry({}))
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.title}>Фильтры</div>
        <div className={classNames(styles.reset, { [styles.disabled]: !disabled })} onClick={resetFilterHandler}>
          Сбросить все <Close />
        </div>
      </div>
      <div className={styles.industry}>
        <div className={styles.selectTitle}>Отрасль</div>
        <SelectComponent industry={industry} valueSelect={valueSelect} onChange={setValueSelect} />
      </div>
      <div className={styles.salary}>
        <div className={styles.selectTitle}>Оклад</div>
        <div className={styles.select}>
          <div data-elem="salary-from-input">
            <NumInput placeholder={'От'} value={valueSelectFrom} onChange={setValueSelectFrom} />
          </div>
          <div data-elem="salary-to-inpu">
            <NumInput placeholder={'До'} value={valueSelectTo} onChange={setValueSelectTo} />
          </div>
        </div>
      </div>
      <Button disabled={!disabled} onClick={filterVacanciesHandler} title={'Применить'} />
    </div>
  )
}

export default Filter

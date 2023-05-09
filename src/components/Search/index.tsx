import { useDebounce } from 'usehooks-ts'
import { useEffect, useState } from 'react'

import SearchIcons from '../../assets/SearchIcons'
import Button from '../Button'
import styles from './Search.module.scss'
import { useAppDispatch } from '../../redux/hooks'
import { setSearchValue } from '../../redux/vacanciesSlice'

type SearchType = {
  btnSearchHandler: () => void
}
const Search: React.FC<SearchType> = ({ btnSearchHandler }) => {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 600)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setSearchValue(debouncedValue))
  }, [debouncedValue])

  return (
    <div dtat-elem="search-input" className={styles.wrap}>
      <SearchIcons className={styles.icon} />
      <input
        value={value}
        className={styles.input}
        placeholder="Введите название вакансии"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <div data-elem="search-button">
        <Button onClick={btnSearchHandler} title={'Поиск'} className={styles.btn} />
      </div>
    </div>
  )
}

export default Search

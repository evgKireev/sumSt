import parse from 'html-react-parser'

import styles from './DescriptionCard.module.scss'
import { useAppSelector } from '../../redux/hooks'

const DescriptionCard = () => {
  const { dataVacancie } = useAppSelector((state) => state.vacanciesSlice)

  return <div className={styles.wrap}>{parse(`${dataVacancie?.vacancyRichText}`)}</div>
}

export default DescriptionCard

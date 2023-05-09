import classNames from 'classnames'
import ReactPaginate from 'react-paginate'

import { setPoginationSelect } from '../../redux/poginationSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import styles from './Pogination.module.scss'
import NextArrow from '../../assets/NextArrow'
import PrevArrow from '../../assets/PrevArrow'

type PoginationType = {
  totalPageCount: number
  clasName: string
}

const Pogination: React.FC<PoginationType> = ({ totalPageCount, clasName }) => {
  const { poginationSelect } = useAppSelector((state) => state.poginationSlice)
  const dispatch = useAppDispatch()
  const handlePageClick = (event: any) => {
    dispatch(setPoginationSelect(event))
  }
  return (
    <div className={clasName}>
      <ReactPaginate
        className={styles.items}
        disabledClassName={styles.disabled}
        pageClassName={classNames(styles.item)}
        pageLinkClassName={classNames('page-link')}
        previousClassName={classNames(styles.previous__item)}
        previousLinkClassName={classNames('page-link')}
        nextClassName={classNames(styles.next__item)}
        nextLinkClassName={classNames('page-link')}
        breakClassName="page-item"
        breakLinkClassName={classNames('page-link')}
        activeClassName={classNames(styles.active)}
        breakLabel="..."
        nextLabel={<NextArrow />}
        previousLabel={<PrevArrow />}
        onPageChange={(event) => handlePageClick(event.selected)}
        pageCount={totalPageCount}
        forcePage={poginationSelect}
      />
    </div>
  )
}

export default Pogination

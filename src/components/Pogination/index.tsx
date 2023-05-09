import classNames from 'classnames'
import ReactPaginate from 'react-paginate'

import { setPoginationSelect } from '../../redux/poginationSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import styles from './Pogination.module.scss'
import NextArrow from '../../assets/NextArrow'
import PrevArrow from '../../assets/PrevArrow'
import { useEffect } from 'react'

type PoginationType = {
  totalPageCount: number
  clasName: string
}

const Pogination: React.FC<PoginationType> = ({ totalPageCount, clasName }) => {
  const dispatch = useAppDispatch()
  const handlePageClick = (event: any) => {
    dispatch(setPoginationSelect(event.selected + 1))
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
        onPageChange={handlePageClick}
        pageCount={totalPageCount}
      />
    </div>
  )
}

export default Pogination

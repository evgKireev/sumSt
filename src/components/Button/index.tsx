import { FC } from 'react'

import styles from './Button.module.scss'
import classNames from 'classnames'

type ButtonProps = {
  title: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ title, onClick, className, disabled }) => {
  return (
    <button
      className={classNames(styles.button, className, { [styles.disabled]: disabled })}
      onClick={onClick}
      disabled={disabled}>
      {title}
    </button>
  )
}

export default Button

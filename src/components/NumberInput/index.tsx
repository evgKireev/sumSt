import { NumberInput } from '@mantine/core'

import styles from './NumberInput.module.scss'
type NumInputType = {
  placeholder: string
  value: number | ''
  onChange: React.Dispatch<React.SetStateAction<number | ''>>
}

const NumInput: React.FC<NumInputType> = ({ placeholder, value, onChange }) => {
  return (
    <NumberInput
      className={styles.input}
      radius={8}
      styles={{
        input: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px'
        },
        rightSection: {
          '&[mantine-NumberInput-control]': { borderLeft: 'none' }
        },
        controlUp: {
          border: 'none'
        },
        controlDown: {
          border: 'none'
        }
      }}
      min={0}
      type="number"
      placeholder={placeholder}
      size="md"
      value={value}
      onChange={onChange}
    />
  )
}

export default NumInput

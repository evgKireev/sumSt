import { NumberInput } from '@mantine/core'
import { NONE } from 'apisauce'

type NumInputType = {
  placeholder: string
  value: number | ''
  onChange: React.Dispatch<React.SetStateAction<number | ''>>
}

const NumInput: React.FC<NumInputType> = ({ placeholder, value, onChange }) => {
  return (
    <NumberInput
      radius={8}
      styles={{
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

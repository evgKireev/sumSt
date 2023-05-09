import { useEffect, useState } from 'react'

import { IndustryType } from '../../@types/vacancies'

import ArrowU from '../../assets/ArrowU'
import ArrowD from '../../assets/ArrowD'
import { Select } from '@mantine/core'
import { useAppDispatch } from '../../redux/hooks'
import { setDataSelect } from '../../redux/vacanciesSlice'

type SelectComponentType = {
  industry: IndustryType[]
  valueSelect: string | null
  onChange: any
}

const SelectComponent: React.FC<SelectComponentType> = ({ industry, valueSelect, onChange }) => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const data = industry.map((value) => {
    return {
      value: value.title,
      label: value.title,
      key: value.key
    }
  })
  useEffect(() => {
    if (valueSelect) {
      dispatch(setDataSelect(data.find((value) => value.value === valueSelect)))
    }
  }, [valueSelect])
  return (
    <Select
      data-element="industry-select"
      dropdownComponent="div"
      onDropdownClose={() => setOpen(false)}
      onDropdownOpen={() => setOpen(true)}
      styles={{
        rightSection: { pointerEvents: 'none' },
        input: {
          fontSize: '14px',
          borderRadius: '8px'
        },
        item: {
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '20px',
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor: '#5E96FC',
              color: '#FFFFFF',
              borderRadius: '8px'
            }
          },
          '&[data-hovered]': {
            backgroundColor: '#DEECFF'
          }
        }
      }}
      onChange={onChange}
      value={valueSelect}
      placeholder="Выберете отрасль"
      rightSection={open ? <ArrowU /> : <ArrowD />}
      data={data}
    />
  )
}

export default SelectComponent

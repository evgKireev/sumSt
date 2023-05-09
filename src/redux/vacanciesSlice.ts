import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IndustryType, VacanciesType, VacanciesTypePayload } from '../@types/vacancies'
import { getVacLS } from './utils/getVacanciesFavoritesLS'

type initialStateType = {
  dataVacancies: VacanciesType[]
  dataVacancie: VacanciesType | undefined
  vacanciesFavorites: VacanciesType[]
  searchValue: string
  statusVacancies: string
  statusVacancie: string
  industry: IndustryType[]
  dataSelect: IndustryType
  valueSelect: string | null
  valueSelectFrom: number | ''
  valueSelectTo: number | ''
  total: number
}
const { vacanciesFavorites } = getVacLS()
const initialState: initialStateType = {
  dataVacancies: [],
  vacanciesFavorites,
  dataVacancie: undefined,
  searchValue: '',
  statusVacancies: '',
  statusVacancie: '',
  industry: [],
  dataSelect: { title: '', key: 0 },
  valueSelect: null,
  valueSelectFrom: 0,
  valueSelectTo: 0,
  total: 0
}

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    getVacancies: (state, actions: PayloadAction<VacanciesTypePayload>) => {},
    getVacancie: (state, actions: PayloadAction<VacanciesTypePayload>) => {},
    getIndustry: (state, actions) => {},
    setVacancies: (state, actions) => {
      state.dataVacancies = actions.payload
    },
    setVacancie: (state, actions) => {
      state.dataVacancie = actions.payload
    },
    setSearchValue: (state, actions) => {
      state.searchValue = actions.payload
    },
    setStatusVacancies: (state, actions) => {
      state.statusVacancies = actions.payload
    },
    setStatusVacancie: (state, actions) => {
      state.statusVacancies = actions.payload
    },
    setVacanciesFavorites: (state, actions: PayloadAction<VacanciesType>) => {
      const vacancie = actions.payload
      const vacanciesFavoritesIndex = state.vacanciesFavorites.findIndex((value) => value.id === vacancie.id)
      if (vacanciesFavoritesIndex === -1) {
        state.vacanciesFavorites.push(vacancie)
      } else {
        state.vacanciesFavorites.splice(vacanciesFavoritesIndex, 1)
      }
    },
    setIndustry: (state, actions) => {
      state.industry = actions.payload
    },
    setDataSelect: (state, actions) => {
      state.dataSelect = actions.payload
    },
    setValueSelect: (state, actions) => {
      state.valueSelect = actions.payload
    },
    setValueSelectFrom: (state, actions) => {
      state.valueSelectFrom = actions.payload
    },
    setValueSelectTo: (state, actions) => {
      state.valueSelectTo = actions.payload
    },
    setTotal: (state, actions) => {
      state.total = actions.payload
    }
  }
})

export const {
  getVacancies,
  setVacancies,
  setSearchValue,
  getVacancie,
  setVacancie,
  setStatusVacancies,
  setStatusVacancie,
  setVacanciesFavorites,
  setIndustry,
  getIndustry,
  setDataSelect,
  setTotal,
  setValueSelect,
  setValueSelectFrom,
  setValueSelectTo
} = vacanciesSlice.actions

export default vacanciesSlice.reducer

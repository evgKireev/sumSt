import { ReactElement } from 'react'

type TownType = {
  declension: string
  genitive: string
  hasMetro: boolean
  id: number
  title: string
}

type CataloguesType = [{ id: number; key: number; positions: any; title: string }]

type WorkType = {
  id: number
  title: string
}

export type VacanciesType = {
  id: number
  profession: string
  firm_name: string
  town: TownType
  catalogues: CataloguesType
  type_of_work: WorkType
  payment_from: number
  payment_to: number
  currency: string
  vacancyRichText: ReactElement
}

export type VacanciesTypePayload = {
  keyword?: string
  id?: string
  published?: number
  payment_from?: number | ''
  payment_to?: number | ''
  catalogues?: number
  page?: number
}

export type IndustryType = {
  title: string
  key: number
}

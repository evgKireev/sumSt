import { create } from 'apisauce'
import { ACCESS_TOKEN_KEY, client_id, client_secret, login, password } from '../../@types/constants'
import { VacanciesTypePayload } from '../../@types/vacancies'

const token = sessionStorage.getItem(ACCESS_TOKEN_KEY)

export const API = create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com'
})

const authUser = () => {
  return API.get(
    `2.0/oauth2/password`,
    { login, password, client_id, client_secret },
    {
      headers: {
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id': client_secret
      }
    }
  )
}

const getVacancies = ({ keyword, payment_from, payment_to, catalogues, page }: VacanciesTypePayload) => {
  const published = 1
  const count = 4
  return API.get(
    `2.0/vacancies/?`,
    { published, keyword, payment_from, payment_to, catalogues, count, page },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id': client_secret
      }
    }
  )
}

const getVacancie = ({ id }: VacanciesTypePayload) => {
  return API.get(
    `2.0/vacancies/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id': client_secret
      }
    }
  )
}

const getIndustry = () => {
  return API.get(
    `2.0/catalogues/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id': client_secret
      }
    }
  )
}

export default { authUser, getVacancies, getVacancie, getIndustry }

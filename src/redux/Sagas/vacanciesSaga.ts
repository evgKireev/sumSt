import { all, call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { VacanciesTypePayload } from '../../@types/vacancies'

import {
  getIndustry,
  getVacancie,
  getVacancies,
  setIndustry,
  setStatusVacancie,
  setStatusVacancies,
  setTotal,
  setVacancie,
  setVacancies
} from '../vacanciesSlice'

import API from '../utils/API'
import { toast } from 'react-toastify'

function* getVacanciesWorker(actions: PayloadAction<VacanciesTypePayload>) {
  yield put(setStatusVacancies('pending'))
  const { keyword, published, payment_from, payment_to, catalogues, page } = actions.payload
  const { data, ok } = yield call(API.getVacancies, { keyword, published, payment_from, payment_to, catalogues, page })
  if (ok) {
    yield put(setStatusVacancies('fullfilled'))
    yield put(setVacancies(data.objects))
    yield put(setTotal(data.total))
  } else {
    yield put(setStatusVacancies('regected'))
    toast.error('Не удалось загрузить вакансии. Попробуйте еще раз!')
  }
}

function* getVacancieWorker(actions: PayloadAction<VacanciesTypePayload>) {
  yield put(setStatusVacancie('pending'))
  const { keyword, id } = actions.payload
  const { data, ok } = yield call(API.getVacancie, { keyword, id })
  if (ok) {
    yield put(setStatusVacancie('fullfilled'))
    yield put(setVacancie(data))
  } else {
    yield put(setStatusVacancie('regected'))
    toast.error('Не удалось загрузить вакансию. Попробуйте еще раз!')
  }
}

function* getIndustryWorker() {
  const { data, ok } = yield call(API.getIndustry)
  if (ok) {
    yield put(setIndustry(data))
  } else {
    console.warn('error get industry ')
  }
}

export default function* vacanciesSaga() {
  yield all([takeLatest(getVacancies, getVacanciesWorker)])
  yield all([takeLatest(getVacancie, getVacancieWorker)])
  yield all([takeLatest(getIndustry, getIndustryWorker)])
}

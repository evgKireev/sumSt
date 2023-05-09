import { all } from 'redux-saga/effects'

import platformsSaga from './authSaga'
import vacanciesSaga from './vacanciesSaga'

export function* rootSaga() {
  yield all([platformsSaga(), vacanciesSaga()])
}

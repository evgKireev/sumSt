import { all, call, takeLatest } from 'redux-saga/effects'
import { authUser } from '../authUserSlice'
import { ACCESS_TOKEN_KEY } from '../../@types/constants'

import API from '../utils/API'

function* authUserWorker() {
  const { data, ok } = yield call(API.authUser)
  if (ok) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, data?.access_token)
  }
}

export default function* platformsSaga() {
  yield all([takeLatest(authUser, authUserWorker)])
}

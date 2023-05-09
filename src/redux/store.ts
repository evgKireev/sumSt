import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './Sagas/rootSaga'

import authUserSlice from './authUserSlice'
import vacanciesSlice from './vacanciesSlice'
import poginationSlice from './poginationSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    authUserSlice,
    vacanciesSlice,
    poginationSlice
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

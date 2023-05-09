import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {}

const initialState: initialStateType = {}

const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, actions) => {}
  }
})

export const { authUser } = authUserSlice.actions

export default authUserSlice.reducer

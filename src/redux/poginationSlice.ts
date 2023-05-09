import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  poginationSelect: number
}

const initialState: initialStateType = {
  poginationSelect: 0
}

const poginationSlice = createSlice({
  name: 'poginstion',
  initialState,
  reducers: {
    setPoginationSelect: (state, actions: PayloadAction<number>) => {
      state.poginationSelect = actions.payload
    }
  }
})

export const { setPoginationSelect } = poginationSlice.actions
export default poginationSlice.reducer

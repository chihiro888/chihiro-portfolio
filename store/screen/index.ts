import { createSlice } from '@reduxjs/toolkit'

export const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    isLargeScreen: true
  },
  reducers: {
    setIsLargeScreen: (state, action) => {
      state.isLargeScreen = action.payload
    }
  }
})

export const { setIsLargeScreen } = screenSlice.actions

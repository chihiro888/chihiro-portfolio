import { configureStore } from '@reduxjs/toolkit'
import { screenSlice } from './screen'

const store = configureStore({
  reducer: {
    screen: screenSlice.reducer
  }
})

export default store

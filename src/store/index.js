import { configureStore } from '@reduxjs/toolkit'
import restorauntSlice from './reducers/restoraunt.reducer'

export const store = configureStore({
  reducer: {
    restoraunt: restorauntSlice
  }
})

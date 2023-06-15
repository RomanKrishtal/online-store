import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './features/contentSlice.jsx'

export default configureStore({
  reducer: {
    items: itemReducer
  }
})
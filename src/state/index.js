import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { canvasSlice } from './canvas'

export const store = configureStore({
  reducer: combineReducers({
    canvas: canvasSlice.reducer
  })
})

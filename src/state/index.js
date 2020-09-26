import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { canvasSlice } from './canvas'
import undoable from 'redux-undo'

export const store = configureStore({
  reducer: combineReducers({
    canvas: undoable(canvasSlice.reducer)
  })
})

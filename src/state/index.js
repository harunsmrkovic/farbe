import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { canvasSlice, includeActionsUndo } from './canvas'
import undoable, { includeAction } from 'redux-undo'

export const store = configureStore({
  reducer: combineReducers({
    canvas: undoable(canvasSlice.reducer, {
      filter: includeAction(includeActionsUndo)
    })
  })
})

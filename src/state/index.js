import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import { canvasSlice, includeActionsUndo } from './canvas'
import undoable, { includeAction } from 'redux-undo'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const undoableCanvasReducer = undoable(canvasSlice.reducer, {
  filter: includeAction(includeActionsUndo),
  limit: 10
})

export const PERSIST_CANVAS_KEY = 'canvas'

const persistedCanvasReducer = persistReducer(
  { key: PERSIST_CANVAS_KEY, storage, whitelist: ['present'] },
  undoableCanvasReducer
)

export const store = configureStore({
  reducer: combineReducers({
    canvas: persistedCanvasReducer
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: false // If not turned off, redux-persist triggers warnings
  })
})

export const persistor = persistStore(store)

import { createSlice } from '@reduxjs/toolkit'
import { pathOr } from 'ramda'
import { Theme } from '../../constants/Theme'
import { Tools } from '../../constants/Tools'

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    backgroundColor: Theme.color.grey5,
    selectedTool: Tools.brush.id,
    shapes: []
  },
  reducers: {
    selectTool: (state, action) => {
      return {
        ...state,
        selectedTool: action.payload
      }
    },
    addShape: (state, action) => {
      return {
        ...state,
        shapes: [...state.shapes, action.payload]
        // shapes: { ...state.shapes, [action.payload.id]: action.payload }
      }
    }
    // editShape: (state, action) => {
    //   return {
    //     ...state,
    //     shapes: {
    //       ...state.shapes,
    //       [action.payload.id]: {
    //         ...pathOr({}, ['shapes', action.payload.id], state),
    //         ...action.payload
    //       }
    //     }
    //   }
    // }
  }
})

import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../../constants/Theme'
import { Tools } from '../../constants/Tools'

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    backgroundColor: Theme.color.grey5,
    selectedTool: Tools.brush.id,
    strokeSize: 5,
    selectedColor: { hex: '#fff', rgb: { r: 255, g: 255, b: 255, a: 1 } },
    shapes: []
  },
  reducers: {
    selectTool: (state, action) => ({
      ...state,
      selectedTool: action.payload
    }),
    selectColor: (state, action) => ({
      ...state,
      selectedColor: action.payload
    }),
    selectBackgroundColor: (state, action) => ({
      ...state,
      backgroundColor: action.payload
    }),
    setStrokeSize: (state, action) => ({
      ...state,
      strokeSize: action.payload
    }),
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

import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../../constants/Theme'
import { Tools } from '../../constants/Tools'

const defaultBackgroundColor = Theme.color.grey5
export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    backgroundColor: defaultBackgroundColor,
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
        // TODO: reconsider the shape of shapes :)
        // shapes: { ...state.shapes, [action.payload.id]: action.payload }
      }
    },
    startNew: state => {
      // Note: this logic would usually be in an Async Thunk, but as `window.confirm` is synchronous, keeping it here for simplicity
      if (
        state.shapes.length > 0 &&
        window.confirm(
          'By starting a New drawing, you will lose all unsaved changes in current one. Do you want to?'
        )
      ) {
        return {
          ...state,
          shapes: [],
          backgroundColor: defaultBackgroundColor
        }
      }

      return state
    }
    // TODO: remove this?
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

const { actions } = canvasSlice
export const includeActionsUndo = [
  actions.addShape.type,
  actions.selectBackgroundColor.type
]

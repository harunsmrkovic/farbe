import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../../constants/Theme'
import { Tools } from '../../constants/Tools'

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    backgroundColor: Theme.color.grey5,
    selectedTool: Tools.select.id,
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
      console.log(action)
      return state
    }
  }
})

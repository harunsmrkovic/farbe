import { path } from 'ramda'

export const getSelectedTool = path(['canvas', 'selectedTool'])

export const getBackgroundColor = path(['canvas', 'backgroundColor'])

export const getShapes = path(['canvas', 'shapes'])

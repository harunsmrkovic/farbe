import fileDownload from 'js-file-download'
import { REHYDRATE } from 'redux-persist'
import { useDispatch, useSelector } from 'react-redux'

import {
  getShapes,
  getStringifiedCanvas
} from '../../../state/canvas/selectors'
import { PERSIST_CANVAS_KEY } from '../../../state'

export const useImportExport = () => {
  const stringifiedCanvasState = useSelector(getStringifiedCanvas)
  const shapes = useSelector(getShapes)
  const dispatch = useDispatch()

  const onExport = () => {
    fileDownload(stringifiedCanvasState, 'farbe-export.json')
  }

  const onImport = e => {
    e.stopPropagation()
    e.preventDefault()

    const [file] = e.target.files
    if (!file) return

    if (
      shapes.length > 0 &&
      !window.confirm(
        'By importing, you will lose all unsaved changes in current drawing. Do you want to continue?'
      )
    ) {
      return
    }

    file.text().then(json => {
      try {
        const payload = JSON.parse(json)
        dispatch({
          type: REHYDRATE,
          key: PERSIST_CANVAS_KEY,
          payload
        })
      } catch (e) {
        alert(
          'An error occurred while importing this file - maybe you are importing a wrong JSON? Remember, we can only support JSON exported by Farbe.'
        )
      }
    })
  }

  return { onImport, onExport }
}

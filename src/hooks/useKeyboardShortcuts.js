import { useEffect } from 'react'
import { persistor } from '../state'

export const useKeyboardShortcuts = () => {
  useEffect(() => {
    console.log(persistor, persistor.getState())
    // persistor
  }, [])
}

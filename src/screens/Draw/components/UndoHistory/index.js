import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reverse } from 'ramda'
import styled from 'styled-components/macro'
import {
  getPastCanvas,
  getFutureCanvas
} from '../../../../state/canvas/selectors'
import { MiniCanvas } from '../../components/MiniCanvas'
import { ActionCreators } from 'redux-undo'

const canvasWidth = 200
const canvasHeight = 150
export const UndoHistory = () => {
  const dispatch = useDispatch()
  const past = useSelector(getPastCanvas)
  const future = useSelector(getFutureCanvas)

  const goToPast = i => {
    dispatch(ActionCreators.jumpToPast(past.length - i - 1))
  }

  const goToFuture = i => {
    dispatch(ActionCreators.jumpToFuture(future.length - i - 1))
  }

  // Handling of showing Undo History
  // Should show after future is filled, and should remain shown while user is hovering
  const [showUndoHistory, setShowUndoHistory] = useState(false)
  const showUndoHistoryTimeout = useRef()

  const setUndoWrapTimeout = timeout =>
    (showUndoHistoryTimeout.current = setTimeout(() => {
      setShowUndoHistory(false)
    }, timeout))

  const onWrapMouseOver = () => clearTimeout(showUndoHistoryTimeout.current)
  const onWrapMouseLeave = () => setUndoWrapTimeout(500)

  useEffect(() => {
    if (future.length === 0) return

    setShowUndoHistory(true)
    clearTimeout(showUndoHistoryTimeout.current)

    setUndoWrapTimeout(2000)
    return () => clearTimeout(showUndoHistoryTimeout.current)
  }, [future.length])

  if (!showUndoHistory) return null
  if (past.length === 0 && future.length === 0) {
    return null
  }

  return (
    <Wrap onMouseOver={onWrapMouseOver} onMouseLeave={onWrapMouseLeave}>
      {reverse(future).map((event, i) => (
        <MiniCanvasWrap
          key={`${event.backgroundColor}-${i}`}
          onClick={() => goToFuture(i)}
        >
          <MiniCanvas width={canvasWidth} height={canvasHeight} {...event} />
        </MiniCanvasWrap>
      ))}
      {reverse(past).map((event, i) => (
        <MiniCanvasWrap
          key={`${event.backgroundColor}-${i}`}
          onClick={() => goToPast(i)}
        >
          <MiniCanvas width={canvasWidth} height={canvasHeight} {...event} />
        </MiniCanvasWrap>
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  position: absolute;
  display: flex;
  overflow-x: scroll;
  left: ${({ theme }) => theme.layoutSizes.toolbarWidth}px;
  right: ${({ theme }) => theme.layoutSizes.settingsWidth}px;
  height: ${canvasHeight}px;
  bottom: 0;
  border-top: 2px solid ${({ theme }) => theme.color.grey10};
  background-color: #000;
  z-index: 100;
`

const MiniCanvasWrap = styled.button`
  opacity: 0.5;
  margin-right: 2px;

  transition: opacity ${({ theme }) => theme.transition.normal};

  &:hover {
    opacity: 1;
  }
`

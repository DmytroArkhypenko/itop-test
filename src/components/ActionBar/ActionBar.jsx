/* eslint-disable no-nested-ternary */
import React from "react"
import PropTypes from "prop-types"
import { Button, ButtonsContainer } from "./styles"

export const ActionBar = ({
  isActive,
  timer,
  startTimer,
  stopTimer,
  resetTimer,
  pauseTimer,
}) => {
  let prevClick
  let timeout
  const onDoubleClickCheck = (event) => {
    const currentTime = new Date().getTime()
    const tapLength = currentTime - prevClick
    clearTimeout(timeout)
    if (tapLength < 300 && tapLength > 0) {
      pauseTimer()
      event.preventDefault()
    } else {
      timeout = setTimeout(() => {
        clearTimeout(timeout)
      }, 300)
    }
    prevClick = currentTime
  }

  const reset = () => {
    stopTimer()
    startTimer()
  }

  return (
    <>
      {isActive ? (
        <ButtonsContainer>
          <Button onClick={stopTimer}>Stop</Button>
          <Button onClick={(event) => onDoubleClickCheck(event)}>Wait</Button>
          <Button onClick={resetTimer}>Reset</Button>
        </ButtonsContainer>
      ) : timer === 0 ? (
        <ButtonsContainer>
          <Button onClick={startTimer}>Start</Button>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <Button onClick={startTimer}>Start</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonsContainer>
      )}
    </>
  )
}

ActionBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  pauseTimer: PropTypes.func.isRequired,
}

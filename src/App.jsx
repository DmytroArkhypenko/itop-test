import React, { useState } from "react"
import { interval } from "rxjs"
import { ActionBar } from "./components/ActionBar/ActionBar"
import { Timer } from "./components/Timer/Timer"
import { Container } from "./styles"

import "./global.scss"

const observableInterval = interval(1000)

export const App = () => {
  const [timer, setTimer] = useState(0)
  const [subscription, setSubscription] = useState()
  const [isActive, setIsActive] = useState(false)

  const startTimer = () => {
    setIsActive(true)
    let seconds = timer
    setSubscription(
      observableInterval.subscribe(() => {
        seconds += 1
        setTimer(seconds)
      })
    )
  }

  const stopTimer = () => {
    subscription.unsubscribe()
    setIsActive(false)
  }

  const resetTimer = () => {
    subscription.unsubscribe()
    setIsActive(false)
    setTimer(0)
  }

  return (
    <Container>
      <div className="stopwatch">
        <Timer timer={timer} />
        <ActionBar
          isActive={isActive}
          timer={timer}
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
        />
      </div>
    </Container>
  )
}

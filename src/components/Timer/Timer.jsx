import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Container } from "./styles"

export const Timer = ({ timer }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useEffect(() => {
    setHours(Math.floor(timer / 3600))
    setMinutes(Math.floor(timer / 60) - hours * 60)
    setSeconds(timer - hours * 3600 - minutes * 60)
  }, [hours, minutes, timer])

  return (
    <Container>
      <p>
        {hours >= 10 ? hours : `0${hours}`}:
        {minutes >= 10 ? minutes : `0${minutes}`}:
        {seconds >= 10 ? seconds : `0${seconds}`}
      </p>
    </Container>
  )
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
}

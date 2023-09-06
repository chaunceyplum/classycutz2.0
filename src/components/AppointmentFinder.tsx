import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const AppointmentFinder = () => {
  const [appointments, setAppointments] = useState()
  const headers = {
    'Access-Control-Allow-Origin': 'cors',
  }
  useEffect(() => {
    fetch(
      'https://hairbackend-f9069fe5a798.herokuapp.com/getAppointments',
      // 'http://localhost:5000',
      headers
    )
      .then((response) => response.json())
      .then((data) => setAppointments(data))
  }, [])

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <div>
          <h1>Appointmentifnder</h1>
        </div>
        <div></div>
      </Container>
    </div>
  )
}

export default AppointmentFinder

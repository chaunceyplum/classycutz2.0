import React, { useState } from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import DateTimePick from './DateTimePick'
import axios from 'axios'

const BookingForm = () => {
  interface Appointment {
    data: {
      fcustomerId: number
      fbarberId: number
      date: String
      appointmentDate: String
    }
  }
  const [userCustomerId, setUserCustomerId] = useState(Number)
  const [userBarberId, setUserBarberId] = useState(Number)
  const [userDate, setUserDate] = useState('')
  const [userAppointmentDate, setUserAppointmentDate] = useState('')

  const clearBoth = () => {
    setUserCustomerId(0)
    setUserBarberId(0)
    setUserDate('')
    setUserAppointmentDate('')
  }

  //const apiUrl = 'https://classycutzbackend.herokuapp.com/newportContactinfo'

  const apiUrl = '/api/Appointment'

  // const forceUpdateHandler = () => {
  //   this.forceUpdate()
  // }
  const user: Appointment = {
    data: {
      fcustomerId: userCustomerId,
      fbarberId: userBarberId,
      date: userDate,
      appointmentDate: userAppointmentDate,
    },
  }
  const logIn = async (user: object) => {
    try {
      const res = await axios.post(`${apiUrl}`, user)

      console.log(res.data)

      res.data
        ? console.log(res.data)
        : console.log('unable to run setter func')

      return res.data
    } catch (err: any) {
      return err.FirstName
    }
    // forceUpdateHandler()
  }
  const hashPass = (unHashedPass: String) => {
    // {
    //   return bcrypt.hash(unHashedPass, 10).then((hash: string) => {
    //     return hash
    //   })
  }

  const submitUser = (event: any) => {
    // const newPass = hashPass(userPassword)
    const userDetails: Appointment = {
      data: {
        fcustomerId: userCustomerId,
        fbarberId: userBarberId,
        date: userDate,
        appointmentDate: userAppointmentDate,
      },
    }

    console.log(userDetails)
    logIn(userDetails)

    return userDetails
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className='bg '>
        {/* <div
          style={{
            backgroundImage: `url(${scales})`,
            objectFit: 'cover',
          }}
        > */}
        <Container className='titleBlock title textColor center'>
          <h2>Book Here!</h2>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col xs={10} className=' Form center'>
            <div>
              <Container>
                <Form>
                  <Container>
                    <h3>
                      Got a question or proposal, or just want to say hello? Go
                      ahead.
                    </h3>
                  </Container>
                  <br />
                  <Container>
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your Name Here!'
                            //onChange={(e) => setUserEmail(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl
                            size='sm'
                            type='email'
                            placeholder='Enter Your Email Here!'
                            //onChange={(e) => setUserPassword(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <FormGroup>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl
                        size='sm'
                        type='textarea'
                        placeholder='Enter a message here!'
                        //onChange={(e) => setUserMessage(e.target.value)}
                      ></FormControl>
                    </FormGroup>
                  </Container>

                  <br />

                  <Container className='center'>
                    <Row>
                      <Col>
                        <FormGroup>
                          {/* <FormLabel>Your Message</FormLabel> */}

                          <DateTimePick />
                        </FormGroup>
                      </Col>
                      <Col />
                      <Col>
                        <FormGroup>
                          <FormLabel>What can we help you with?</FormLabel>
                          <FormControl size='sm' type='enum'></FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Container>
                  <br />
                  <Container>
                    <Row>
                      <Col>
                        <div className='center text-center'>
                          <Button
                            className='bgColor'
                            // onClick={() => {
                            //   clearBoth()
                            // }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </Col>
                      <Col>
                        <div className='center text-center'>
                          <Button
                            className='bgColor'
                            // onClick={(e) => {
                            //   submitUser(e)
                            // }}
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </Container>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default BookingForm

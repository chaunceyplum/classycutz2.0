import React, { ReactNode, useState } from 'react'
import { FormControl, FormLabel, FormSelect } from 'react-bootstrap'
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import DateTimePick from './DateTimePick'
import axios from 'axios'
import SignupForm from './SignupForm'
import { useSelector } from 'react-redux'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const BookingForm = () => {
  interface Appointment {
    data: {
      fcustomerId: number
      fbarberId: number
      Date: any
      appointmentDate: any
      phoneNumber: String
    }
  }
  const [userCustomerId, setUserCustomerId] = useState(Number)
  const [userBarberId, setUserBarberId] = useState(Number)
  const [userDate, setUserDate] = useState('')
  const [userAppointmentDate, setUserAppointmentDate] = useState('')
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const User = useSelector((state: any) => state.User)
  const [startDate, setStartDate] = useState(new Date())
  const clearBoth = () => {
    setUserCustomerId(0)
    setUserBarberId(0)
    setUserDate('')
    setUserAppointmentDate('')
    setUserPhoneNumber('')
  }

  //const apiUrl = 'https://classycutzbackend.herokuapp.com/newportContactinfo'

  const apiUrl = '/api/appointment'

  // const forceUpdateHandler = () => {
  //   this.forceUpdate()
  // }
  const user: Appointment = {
    data: {
      fcustomerId: userCustomerId,
      fbarberId: userBarberId,
      Date: userDate,
      appointmentDate: userAppointmentDate,
      phoneNumber: userPhoneNumber,
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
    console.log(User)
    const date = new Date()
    const userDetails: Appointment = {
      data: {
        fcustomerId: User.user.data.customerId,
        fbarberId: Number(userBarberId),
        Date: date,
        appointmentDate: startDate,
        phoneNumber: User.user.data.phoneNumber,
      },
    }

    console.log(userDetails)
    logIn(userDetails)

    return userDetails
  }

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className='bg '>
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
                        Got a question or proposal, or just want to say hello?
                        Go ahead.
                      </h3>
                    </Container>
                    <br />
                    <Container>
                      {/* <Row>
                        <FormGroup>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your Name Here!'
                            onChange={(e) => setUser(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl
                            size='sm'
                            type='email'
                            placeholder='Enter Your Email Here!'
                            onChange={(e) => setUserPassword(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Row> */}
                    </Container>
                    <Container>
                      <FormGroup>
                        <FormLabel>Your Barber</FormLabel>

                        <FormSelect
                          type='select'
                          name='select'
                          id='exampleSelect'
                          onChange={(e) => setUserBarberId(e.target.value)}
                        >
                          <option value='1'>Reggie</option>
                          <option value='2'>Rome</option>
                          <option value='3'>Kev</option>
                        </FormSelect>
                      </FormGroup>
                    </Container>

                    <Container className=''>
                      <Row>
                        <FormGroup>
                          <FormLabel>What can we help you with?</FormLabel>
                          <FormControl size='sm' type='enum'></FormControl>
                        </FormGroup>
                      </Row>
                      {/* <Row>
                        <FormGroup>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl
                            size='sm'
                            type='number'
                            onChange={(e) => setUserPhoneNumber(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Row> */}
                      <Row>
                        <FormGroup>
                          {/* <FormLabel>Your Message</FormLabel> */}

                          <DatePicker
                            closeOnScroll={true}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            timeFormat='HH:mm'
                            timeIntervals={15}
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                          />
                        </FormGroup>
                      </Row>
                    </Container>
                    <br />
                    <Container>
                      <Row>
                        <Col>
                          <div className='center text-center'>
                            <Button
                              className='bgColor'
                              onClick={() => {
                                clearBoth()
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </Col>
                        <Col>
                          <div className='center text-center'>
                            <Button
                              className='bgColor'
                              onClick={(e) => {
                                submitUser(e)
                              }}
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
    </div>
  )
}

export default BookingForm

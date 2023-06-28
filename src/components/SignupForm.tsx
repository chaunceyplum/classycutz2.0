'use client'
import React, { useState } from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import DateTimePick from './DateTimePick'
import axios from 'axios'
// import bcrypt from 'bcrypt'
// const bcrypt = require('bcrypt')
import { useThemeContext } from '@/context/context'
const SignupForm = () => {
  interface Customer {
    data: {
      firstName: String
      lastName: String
      city: String
      phoneNumber: String
      ffavoriteBarber: Number
      email: String
      password: String
    }
  }
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [userFavoriteBarber, setUserFavoriteBarber] = useState(Number)
  // const { userData, setUserData } = useThemeContext()

  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
    setUserFirstName('')
    setUserLastName('')
    setUserCity('')
    setUserPhoneNumber('')
    setUserFavoriteBarber(1)
  }

  //const apiUrl = 'https://classycutzbackend.herokuapp.com/newportContactinfo'

  const apiUrl = '/api/customer'

  // const forceUpdateHandler = () => {
  //   this.forceUpdate()
  // }
  const user: Customer = {
    data: {
      email: userEmail,
      password: userPassword,
      firstName: userFirstName,
      lastName: userLastName,
      city: userCity,
      phoneNumber: userPhoneNumber,
      ffavoriteBarber: userFavoriteBarber,
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
    const userDetails: Customer = {
      data: {
        email: userEmail,
        password: userPassword,
        firstName: userFirstName,
        lastName: userLastName,
        city: userCity,
        phoneNumber: userPhoneNumber,
        ffavoriteBarber: 1,
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
        <Container className=' center header1'>
          <h2 className=' center header1'>Sign Up Here!</h2>
        </Container>
      </div>
      {/* <br />
      <br />
      <br />
      <br /> */}
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
                          <FormLabel>Your Email Goes Here</FormLabel>
                          <FormControl
                            size='sm'
                            type='email'
                            placeholder='Enter Your Email Here!'
                            onChange={async (e) => setUserEmail(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Password</FormLabel>
                          <FormControl
                            size='sm'
                            type='password'
                            placeholder='Enter Your Email Here!'
                            onChange={(e) => setUserPassword(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your First Name</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your First Name here!'
                            onChange={(e) => setUserFirstName(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Last Name</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your Last Name here!'
                            onChange={(e) => setUserLastName(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your City</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your City here!'
                            onChange={(e) => setUserCity(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Phone Number</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your Phone Number here!'
                            onChange={(e) => setUserPhoneNumber(e.target.value)}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col />
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Favorite Barber</FormLabel>
                          <FormControl
                            size='sm'
                            type='number'
                            placeholder='Enter Your Favorite Barber here!'
                            onChange={(e) => {
                              // setUserFavoriteBarber(parseInt(e.target.value))
                            }}
                          ></FormControl>
                        </FormGroup>
                      </Col>
                      <Col />
                    </Row>
                  </Container>
                  <br />
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
  )
}

export default SignupForm

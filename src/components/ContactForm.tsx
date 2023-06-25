import React, { useState } from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import DateTimePick from './DateTimePick'
import axios from 'axios'

const ContactForm = () => {
  interface Contact {
    data: {
      Name: String
      Email: String
      Message: String
    }
  }
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const clearBoth = () => {
    setUserEmail('')
    setUserName('')
    setUserMessage('')
  }

  //const apiUrl = 'https://classycutzbackend.herokuapp.com/newportContactinfo'

  const apiUrl = '/api/contact'

  // const forceUpdateHandler = () => {
  //   this.forceUpdate()
  // }
  const user: Contact = {
    data: {
      Email: userEmail,
      Name: userName,
      Message: userMessage,
    },
  }
  const logIn = async (user: object) => {
    try {
      const res = await axios.post(`${apiUrl}`, user)

      //console.log(res.data)

      res.data
        ? console.log(`submitted user ${user}`)
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
    const userDetails: Contact = {
      data: {
        Email: userEmail,
        Name: userName,
        Message: userMessage,
      },
    }

    //console.log(userDetails)
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
        <Container className=' center header1'>
          <h2 className=' center header1'>Contact Us Here!</h2>
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
                          <FormLabel>Your Name</FormLabel>
                          <FormControl
                            size='sm'
                            type='text'
                            placeholder='Enter Your Name Here!'
                            onChange={(e) => setUserName(e.target.value)}
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
                            onChange={(e) => setUserEmail(e.target.value)}
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
                        onChange={(e) => setUserMessage(e.target.value)}
                      ></FormControl>
                    </FormGroup>
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

export default ContactForm

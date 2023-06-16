import React from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import DateTimePick from './DateTimePick'

const BookingForm = () => {
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
                    <FormGroup>
                      {/* <FormLabel>Your Message</FormLabel> */}

                      <DateTimePick />
                    </FormGroup>
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

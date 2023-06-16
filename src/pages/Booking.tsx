/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import PricingTable from '../components/PricingTable'
import Calendar from '../components/Calendar'
import MyNav from '../components/MyNav'
import cut from '../../public/photos/barbershop.jpeg'
import NavWithHero from '@/components/NavWithHero'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Footer from '@/components/Footer'
import DateTimePick from '@/components/DateTimePick'
import { DateTimePicker } from '@mui/x-date-pickers'
import BookingForm from '@/components/BookingForm'
const Booking = () => {
  interface Customer {
    customerId: number
    firstName: String
    lastName: String
    city: String
    phoneNumber: String
    ffavoriteBarber: number
  }

  return (
    <div className='bg'>
      <NavWithHero />
      <Container>
        <Row>
          <Col>
            <div className=' homeRow'>
              <br />
              <br />
              <br />
              <br />

              <Container className=''>
                <Row>
                  <Col>
                    <h3 className='text-center center header1'>Booking</h3>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col>
                    <h3 className='text-center'>
                      Experience exceptional grooming services tailored to your
                      style at our barbershop. Our team of skilled barbers is
                      dedicated to providing the perfect cut and grooming
                      experience for every client. Whether you're looking for a
                      classic gentlemen's haircut or a modern style, we've got
                      you covered. Our easy-to-use online booking system allows
                      you to secure your preferred appointment time with just a
                      few clicks. Say goodbye to long waits and enjoy a
                      personalized grooming experience at our barbershop. Book
                      your appointment now and step into a world of style and
                      sophistication.
                    </h3>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className=''>
              <Container>
                <h3>Booking Rules</h3>
                <Row>
                  <Col xs={12} md={6} lg={4} xl={3}>
                    <div>
                      <Card>
                        <CardHeader className=''>Payments</CardHeader>
                        <CardBody className=''>
                          I only Accept cash! Any other method of payment will
                          result in a processing fee of 7$
                          (cashapp,zelle,paypal, etc)
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={3}>
                    <div>
                      <Card>
                        <CardHeader className=''>Schedule</CardHeader>
                        <CardBody className=''>
                          My hours do vary week to week. although if you do see
                          a time that isnt availabile please reach out to me so
                          we can set up a time that acomodates us both
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={3}>
                    <div>
                      <Card>
                        <CardHeader className=''>Travel</CardHeader>
                        <CardBody className=''>
                          I do travel and will travel for a small fee starting
                          at $40 depending on the distance.
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={3}>
                    <div>
                      <Card>
                        <CardHeader className=''>Lateness</CardHeader>
                        <CardBody className=''>
                          there is a 10 minute grace period for lateness. if a
                          customer does arrive after the grace period, the
                          customer is expected to pay a lateness fee of 5$.
                          after 15 minutes, your appointment will be cancelled
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* <div className=''>
              <Container>
                <div>
                  <h3>Pricing Table</h3>
                  <div>
                    <PricingTable />
                  </div>
                </div>
              </Container>
            </div> */}
            <div className=''>
              <Container>
                <Container>
                  <BookingForm />
                  {/* <DateTimePicker /> */}
                </Container>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Booking

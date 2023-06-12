import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import homePic1 from '../photos/homepic1.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <Container className='homeLayout'>
        <Row className='homeRow'>
          <Col xs={12}>
            <div className=''>
              <br />
              <br />
              <br />
              <br />
              <h2 className='header1 '>
                Our Goal is to make you look extraordinary
              </h2>
              <br />
              <h3>
                Located just steps from New York City’s famed Times Square
                District, David Ryan Salon has been an icon in the City’s Hell’s
                Kitchen neighborhood for more than 20 years. Our mission is
                provide the highest quality service to all our guests with the
                utmost professionalism. Our staff is dedicated to all aspects of
                beauty and style - helping you feel and look your best.
              </h3>
              <br />
            </div>
            <br />
            <br />
            <Container>
              <Row>
                <Col xs={3}>
                  <button className='btn btn-dark'>Learn More</button>
                </Col>
                <Col xs={9}>
                  <p>Over 5000+ happy customers!</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12}>
            <Container>
              <Row>
                <Col xs={12} className='center'>
                  <br />
                  <br />
                  <Container>
                    <Image
                      src={homePic1}
                      style={{ height: '100%', width: '100%' }}
                      alt='homepic1'
                    />
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero

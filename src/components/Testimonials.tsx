/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'

const Testimonials = () => {
  return (
    <div className='bg'>
      <Container className='homeLayout'>
        <div>
          <h2>Testimonials</h2>
          <br />
          <Container>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:4/5</h6>
                    <CardText>9 months ago</CardText>
                    <br />
                    <h6>
                      Carmen is a great washer and does hair just as well also.
                      Eli is the owner and she is impeccable. They use great
                      products, and keep you coming back with the fantastic
                      services.
                    </h6>
                    <br />
                    <h5>- Stephanie Q</h5>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:5/5</h6>
                    <CardText>3 months ago</CardText>
                    <br />
                    <h6>
                      Been going there the past 5 years since I started growing
                      back my hair. Eli’s is a family friendly place where all
                      are welcome. Just remember to give them a little extra if
                      you are able too. Enjoy your time there. Be calm and be
                      patient. Thank you
                    </h6>
                    <br />
                    <h5>- Charles A</h5>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:4.5/5</h6>
                    <CardText>2 months ago</CardText>
                    <br />
                    <h6>
                      Carmen is an excellent washer. Ellie is the one who trims
                      my hair. This is an excellent Salon to visit. I don'tike
                      alot of heat and they aim to please.
                    </h6>
                    <br />
                    <h5>- Sophia M</h5>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card>
                  <CardBody className='bg'>
                    <h6>Rating:5/5</h6>
                    <CardText>7 months ago</CardText>
                    <br />
                    <h6>
                      Took my young daughter in for a deep condition and blow
                      dry. The stylist was awesome and my daughter's hair was
                      amazing. The only hiccup for me was that the washing
                      chairs were not comfortable for a little person. Her head
                      slipped right through the opening and she wasn't supported
                      enough.
                    </h6>
                    <br />
                    <h5>- Ava P</h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <br />
            <div>
              <h2>Meet the barbers</h2>
              <br />
              <Container>
                <Row></Row>
              </Container>
              <br />
            </div>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Testimonials

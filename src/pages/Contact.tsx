/* eslint-disable react/no-unescaped-entities */
import {
  Col,
  Container,
  // Form,
  // FormGroup,
  Row,
  // FormLabel,
  // FormText,
  // Button,
  // FormControl,
} from 'reactstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import MyNav from '../components/MyNav'
import cut from '../../public/photos/barbershop.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Footer from '@/components/Footer'
import NavWithHero from '@/components/NavWithHero'

const Contact = () => {
  return (
    <div className='bg'>
      <NavWithHero />
      <Container>
        <Row>
          <Col className='center'>
            <h3>Contact</h3>
          </Col>
        </Row>
        <Row>
          <Col className='bg'>
            <Form className='contactForm'>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='email' placeholder='Enter Name Here' />
                <Form.Text className='text1'>
                  We'll <strong>NEVER</strong> share your data with anyone
                </Form.Text>
              </Form.Group>

              <Form.Group className='formMargin'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email Here' />
              </Form.Group>
              <Button variant='secondary' type='submit' className='buttons1'>
                Submit
              </Button>
              <br />
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Contact

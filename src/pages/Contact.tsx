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
import ContactForm from '@/components/ContactForm'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Contact = () => {
  const router = useRouter()

  return (
    <div className='bg'>
      <Container>
        <ContactForm />
      </Container>
    </div>
  )
}

export default Contact

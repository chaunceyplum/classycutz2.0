import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import MyNav from '../components/MyNav'
import cut from '../../public/photos/barbershop.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Footer from '@/components/Footer'
import NavWithHero from '@/components/NavWithHero'
import SignupForm from '@/components/SignupForm'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
const Signup = () => {
  const User = useSelector((state: any) => state.User)
  const loggedIn = useSelector((state: any) => state.isLoggedIn)

  return (
    <div className='bg'>
      <Container>
        <SignupForm />
      </Container>
    </div>
  )
}

export default Signup

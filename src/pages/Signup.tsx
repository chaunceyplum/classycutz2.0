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

const Signup = () => {
  return (
    <div className='bg'>
      <NavWithHero />
      <Container>
        <SignupForm />
      </Container>
      <Footer />
    </div>
  )
}

export default Signup

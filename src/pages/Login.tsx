import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import MyNav from '../components/MyNav'
import cut from '../../public/photos/barbershop.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Footer from '@/components/Footer'
import NavWithHero from '@/components/NavWithHero'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const LogIn = () => {
  return (
    <div className='bg'>
      <NavWithHero />
      <Container>
        <Form>
          <FormGroup>
            <Label for='exampleEmail'>Email</Label>
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='with a placeholder'
            />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <Input
              type='password'
              name='password'
              id='examplePassword'
              placeholder='password placeholder'
            />
          </FormGroup>
          <button className='btn'>submit</button>
        </Form>
      </Container>
      <Footer />
    </div>
  )
}

export default LogIn

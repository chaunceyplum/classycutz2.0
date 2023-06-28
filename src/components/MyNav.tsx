import { createContext, useContext, useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
  Button,
  Modal,
} from 'reactstrap'
import MyModal from './MyModal'
import { ThemeContext } from '@/context/context'

// const userContext = createContext<T>(defaultValue: T)</T>

const MyNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [userData, setUserData] = useState()
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div className='navbg'>
        <Container>
          <Navbar sticky='top' expand='lg'>
            <NavbarBrand href='/' className='text-white'>
              <h1 className='brand'>
                <strong>Hair</strong>
              </h1>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className='ms-auto nav' navbar>
                <NavItem>
                  <NavLink className='text-white NavLink' href='/Booking'>
                    <strong className='NavLink'>Booking</strong>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='text-white' href='/Contact'>
                    <strong className='NavLink'>Contact</strong>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='text-white' href='/Signup'>
                    <strong className='NavLink'>Sign Up</strong>
                  </NavLink>
                </NavItem>
                <NavItem className='NavLink'>
                  <MyModal />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  )
}

export default MyNav

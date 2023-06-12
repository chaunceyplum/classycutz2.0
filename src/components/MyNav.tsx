import { useState } from 'react'
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

const MyNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

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
                  <NavLink className='text-white' href='/Login'>
                    <strong className='NavLink'>Log In</strong>
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

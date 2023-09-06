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
  Label,
  Input,
} from 'reactstrap'
import MyModal from './MyModal'
import { ThemeContext } from '@/context/context'
import { useDispatch, useSelector } from 'react-redux'
import Welcome from './Welcome'
import {
  Col,
  Form,
  FormGroup,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'react-bootstrap'
import axios from 'axios'
import { UserAction } from '@/redux/store'
import Link from 'next/link'

// const userContext = createContext<T>(defaultValue: T)</T>

const MyNav = (User: any, loggedIn: any, args: any): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const [useruser, setUserUser] = useState()
  const [userLoggedIn, setUserLoggedIn] = useState()
  const toggle = () => setIsOpen(!isOpen)
  // const User = useSelector((state: any) => state.User)
  // const loggedIn = useSelector((state: any) => state.isLoggedIn)
  interface Customer {
    data: {
      email: String
      password: String
    }
  }

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const dispatcher = useDispatch()
  // const loggedIn = useSelector((state: any) => state.isLoggedIn)
  // const User = useSelector((state: any) => state.User)

  // const { userData, setUserData } = useThemeContext()

  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
  }

  const apiUrl = 'https://hairbackend-f9069fe5a798.herokuapp.com/login'
  //const apiUrl = 'http://127.0.0.1:5000/login/'
  // const apiUrl = '/api/login'
  // const [, updateState] = React.useState()

  const forceUpdateHandler = () => {}
  const user: Customer = {
    data: {
      email: userEmail,
      password: userPassword,
    },
  }
  const logIn = async (user: object) => {
    const headers = {
      'Access-Control-Allow-Origin': 'cors',
    }

    try {
      const userDetails: Customer = {
        data: {
          email: userEmail,
          password: userPassword,
        },
      }
      const res = await axios.post(`${apiUrl}`, user, {
        headers: headers,
      })
      console.log(user)

      // console.log(res.data)
      console.log(res.status)

      res.data
        ? console.log(res.data)
        : console.log('unable to run setter func')

      if ((res.status = 200)) {
        dispatcher(UserAction.setUser(res.data))
        setterFunc(res.data, true)
        return res.data
      } else {
        return {}
      }
    } catch (err: any) {
      return err.FirstName
    }
    // forceUpdateHandler()
  }
  const setterFunc = (User: any, loggedIn: any) => {
    setUserUser(User)
    setUserLoggedIn(loggedIn)
  }
  const hashPass = (unHashedPass: String) => {
    // {
    //   return bcrypt.hash(unHashedPass, 10).then((hash: string) => {
    //     return hash
    //   })
  }
  // const forceUpdate = React.useCallback(() => updateState({}), [])
  const submitUser = (event: any, User: any) => {
    // const newPass = hashPass(userPassword)
    const userDetails: Customer = {
      data: {
        email: userEmail,
        password: userPassword,
      },
    }
    logIn(userDetails)

    return { ...userDetails }
  }
  // const username = JSON.parse(useruser)

  const [modal, setModal] = useState(false)

  const toggle1 = () => setModal(!modal)

  return (
    <>
      <div className='navbg'>
        <Container>
          <Navbar sticky='top' expand='lg'>
            {/* <NavbarBrand className='text-white'> */}
            <Link href='/'>
              <h1 className='brand text-white'>
                <strong>Hair</strong>
              </h1>
            </Link>
            {/* </NavbarBrand> */}
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className='ms-auto nav' navbar>
                <NavItem>
                  {/* <NavLink> */}
                  <Link className='text-white nav-link' href='/Booking'>
                    <strong className='NavLink'>Booking</strong>
                  </Link>
                  {/* </NavLink> */}
                </NavItem>
                <NavItem>
                  {/* <NavLink> */}
                  <Link className='text-white nav-link' href='/Contact'>
                    <strong className='NavLink'>Contact</strong>
                  </Link>
                  {/* </NavLink> */}
                </NavItem>
                <NavItem>
                  {/* <NavLink> */}
                  <Link className='text-white nav-link' href='/Signup'>
                    <strong className='NavLink'>Sign Up</strong>
                  </Link>
                  {/* </NavLink> */}
                </NavItem>
                {/* <NavItem className='NavLink'> */}
                {userLoggedIn ? (
                  <div>
                    <NavLink className='text-white text-center' href='/Signup'>
                      <h6 className='text-white text-center'>
                        Welcome,
                        <br />
                        {useruser.email}
                      </h6>
                      <Button
                        onClick={() => {
                          dispatcher(UserAction.clearUser())
                        }}
                      >
                        Log Out
                      </Button>
                    </NavLink>
                  </div>
                ) : (
                  <div>
                    <Button color='secondary' onClick={toggle1}>
                      <strong className='NavLink'>Log In</strong>
                    </Button>
                    <Modal isOpen={modal} toggle={toggle1} {...args}>
                      <ModalHeader>Modal title</ModalHeader>
                      <ModalBody>
                        <Container>
                          <Form>
                            <FormGroup>
                              <Label for='exampleEmail'>Email</Label>
                              <Input
                                type='email'
                                name='email'
                                id='exampleEmail'
                                placeholder='with a placeholder'
                                onChange={async (e) =>
                                  setUserEmail(e.target.value)
                                }
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for='examplePassword'>Password</Label>
                              <Input
                                type='password'
                                name='password'
                                id='examplePassword'
                                placeholder='password placeholder'
                                onChange={async (e) =>
                                  setUserPassword(e.target.value)
                                }
                              />
                            </FormGroup>
                          </Form>
                        </Container>
                      </ModalBody>
                      <ModalFooter>
                        <Container>
                          <Row>
                            <Col xs={6}>
                              <div className='center text-center'>
                                <Button
                                  className='bgColor'
                                  onClick={() => {
                                    toggle1()
                                  }}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </Col>
                            <Col xs={6}>
                              <div className='center text-center'>
                                <Button
                                  className='bgColor'
                                  onClick={(e) => {
                                    submitUser(e, User)
                                  }}
                                >
                                  Submit
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </ModalFooter>
                    </Modal>
                  </div>
                )}
                {/* </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  )
}

export default MyNav

import { ThemeContext } from '@/context/context'
import { UserAction } from '@/redux/store'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import Welcome from './Welcome'
// import { getStaticProps } from '@/pages/index'

function MyModal(args: any) {
  interface Customer {
    data: {
      email: String
      password: String
    }
  }
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const dispatcher = useDispatch()
  const loggedIn = useSelector((state: any) => state.isLoggedIn)
  const User = useSelector((state: any) => state.User)

  // const { userData, setUserData } = useThemeContext()

  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
  }

  //const apiUrl = 'https://classycutzbackend.herokuapp.com/newportContactinfo'

  const apiUrl = '/api/login'

  // const forceUpdateHandler = () => {
  //   this.forceUpdate()
  // }
  const user: Customer = {
    data: {
      email: userEmail,
      password: userPassword,
    },
  }
  const logIn = async (user: object) => {
    try {
      const res = await axios.post(`${apiUrl}`, user)

      // console.log(res.data)

      res.data
        ? console.log('logged in sucessfully')
        : console.log('unable to run setter func')

      return res.data
    } catch (err: any) {
      return err.FirstName
    }
    // forceUpdateHandler()
  }
  const hashPass = (unHashedPass: String) => {
    // {
    //   return bcrypt.hash(unHashedPass, 10).then((hash: string) => {
    //     return hash
    //   })
  }

  const submitUser = (event: any, User: any) => {
    // const newPass = hashPass(userPassword)
    const userDetails: Customer = {
      data: {
        email: userEmail,
        password: userPassword,
      },
    }

    //console.log(userDetails)
    logIn(userDetails)
    dispatcher(UserAction.setUser(userDetails))
    console.log(User)
    // getStaticProps(userDetails)

    return userDetails
  }
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <div>
        <Button color='secondary' onClick={toggle}>
          <strong className='NavLink'>Log In</strong>
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
                    onChange={async (e) => setUserEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='examplePassword'>Password</Label>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='password placeholder'
                    onChange={async (e) => setUserPassword(e.target.value)}
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
                        clearBoth()
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
    </div>
  )
}

export default MyModal

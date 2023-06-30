import { UserAction } from '@/redux/store'
import React from 'react'
import { Button, NavLink } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Welcome = (User: any) => {
  const dispatcher = useDispatch()

  return (
    <div>
      <NavLink className='text-white' href='/Signup'>
        <h6 className='text-white'>Welcome, {User.data}</h6>
        <Button
          onClick={() => {
            dispatcher(UserAction.clearUser())
          }}
        >
          Log Out
        </Button>
      </NavLink>
    </div>
  )
}

export default Welcome

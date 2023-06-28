import React from 'react'
import { NavLink } from 'react-bootstrap'

const Welcome = (User: any) => {
  return (
    <div>
      <NavLink className='text-white' href='/Signup'>
        <h6 className='text-white'>Welcome, {User.data}</h6>
      </NavLink>
    </div>
  )
}

export default Welcome

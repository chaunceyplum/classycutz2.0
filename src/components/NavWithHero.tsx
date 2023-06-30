import React from 'react'
import MyNav from './MyNav'
import { Container } from 'reactstrap'
import cut from '../photos/barbershop.jpeg'
import Image from 'next/image'

const NavWithHero = (User: any, loggedIn: any) => {
  return (
    <div>
      <div
        className='homeDiv'
        // style={{ backgroundImage: `url('${cut}')`, objectFit: 'contain' }}
      >
        <Container>
          <MyNav User={User} loggedIn={loggedIn} />
        </Container>
        <Image src={cut} alt='img' className='heroImg' />
      </div>
    </div>
  )
}

export default NavWithHero

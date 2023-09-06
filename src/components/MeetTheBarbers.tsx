import { Avatar } from '@mui/material'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { CardBody, CardHeader } from 'reactstrap'

const MeetTheBarbers = () => {
  const barbers = [
    { firstname: 'Rome', barberid: 1 },
    { firstname: 'Rome', barberid: 2 },
    { firstname: 'Reggie', barberid: 3 },
    { firstname: 'Kev', barberid: 4 },
    { firstname: 'Harold', barberid: 5 },
    { firstname: 'Harold', barberid: 6 },
  ]

  return (
    <div>
      <div>
        <Container>
          <Row>
            {barbers.map((i, k) => {
              const firstname = i.firstname
              const firstLetter = () => {
                const firstname = i.firstname
                const letter = firstname[0]
                return letter
              }

              return (
                <Col key={k} className=''>
                  <div className=''>
                    <h3 className=''>{firstname}</h3>
                    <Avatar>{firstLetter()}</Avatar>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MeetTheBarbers

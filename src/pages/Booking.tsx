/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import PricingTable from '../components/PricingTable'
import Calendar from '../components/Calendar'
import MyNav from '../components/MyNav'
import cut from '../../public/photos/barbershop.jpeg'
import NavWithHero from '@/components/NavWithHero'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Footer from '@/components/Footer'
import DateTimePick from '@/components/DateTimePick'
import { DateTimePicker } from '@mui/x-date-pickers'
import BookingForm from '@/components/BookingForm'
import BookingCheckout from '../components/BookingCheckout'
import BookingPage from '@/components/BookingPage'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Booking = () => {
  interface Customer {
    customerId: number
    firstName: String
    lastName: String
    city: String
    phoneNumber: String
    ffavoriteBarber: number
  }

  return (
    <div className='bg'>
      <BookingPage />
    </div>
  )
}

export default Booking

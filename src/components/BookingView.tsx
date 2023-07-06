import React from 'react'
import Calendar from 'reactjs-availability-calendar'

export default function BookingView() {
  const bookings = [
    {
      from: new Date('01-16-2022'),
      to: new Date('01-27-2022'),
      middayCheckout: true,
    },
    {
      from: '06-25-2022',
      to: '07-03-2022',
      middayCheckout: false,
    },
  ]

  return <Calendar bookings={bookings} />
}

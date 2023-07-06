import React from 'react'
import stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { Container } from 'react-bootstrap/esm'

const BookingCheckout = () => {
  // const stripePromise = loadStripe(
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  // )
  // const handleCheckout = async () => {
  //   try {
  //     const stripe = await stripePromise
  //     const checkoutSession = await axios.post('/api/checkout-session', {
  //       cart,
  //     })
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: checkoutSession.data.id,
  //     })
  //     if (result.error) {
  //       alert(result.error.message)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // return (
  //   <Container>
  //     <div>
  //       <button onClick={handleCheckout}>Checkout</button>
  //     </div>
  //   </Container>
  // )
}

export default BookingCheckout

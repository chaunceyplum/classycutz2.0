import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  interface Appointment {
    appointmentId: Number
    fcustomerId: Number
    fbarberId: Number
    Date: Date
    appointmentDate: Date
  }
  if (req.method == 'GET') {
    try {
      const data = await prisma.appointment.findMany()
      res.status(200).send({ data })
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  } else if (req.method == 'POST') {
    try {
      // const newBarber = req.body
      const data = await prisma.appointment.create(req.body)
      res.status(200).send({ data })
    } catch (err) {
      res.status(500).send({ error: err })
      console.log(err)
    }
  }
}

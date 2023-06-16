import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  interface Barber {
    firstName: String
  }

  if (req.method == 'GET') {
    try {
      const data = await prisma.barber.findMany()
      res.status(200).send({ data })
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  } else if (req.method == 'POST') {
    try {
      // const newBarber = req.body
      const data = await prisma.barber.create(req.body)
      res.status(200).send({ data })
    } catch (err) {
      res.status(500).send({ error: err })
      console.log(err)
    }
  }
}

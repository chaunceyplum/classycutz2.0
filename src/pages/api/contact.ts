import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  interface Contact {
    Name: String
    Email: String
    Message: String
  }

  if (req.method == 'GET' || req.method == 'DELETE' || req.method == 'PUT') {
    try {
      res.status(200).send({ error: 'THis type of request isnt allowed' })
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  } else if (req.method == 'POST') {
    try {
      // const newBarber = req.body
      const data = await prisma.contact.create(req.body)
      res.status(200).send({ data })
    } catch (err) {
      res.status(500).send({ error: err })
      console.log(err)
    }
  }
}

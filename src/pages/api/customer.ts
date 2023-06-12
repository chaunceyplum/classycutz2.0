import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    try {
      const data = await prisma.customer.findMany()
      res.status(200).send({ data })
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  } else if (req.method == 'POST') {
  }
}

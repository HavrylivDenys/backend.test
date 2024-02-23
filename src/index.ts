import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const port = 3000
const prisma = new PrismaClient()

app.get('/', (req, res) => {
  prisma.movies
    .findMany()
    .then((movies) => res.status(200).send(movies))
    .catch((error) => res.status(500).send(error))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

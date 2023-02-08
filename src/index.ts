import { schema } from '@graphql'
import cors from 'cors'
import express, { Application } from 'express'
import { graphqlHTTP } from 'express-graphql'

const api = async () => {
  const PORT = 3001
  const app: Application = express()

  app.use(cors())
  app.use(express.json())
  app.use(
    '/api',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  )
  app.listen(PORT, () => {
    console.log(`Server runnig in port ${PORT}`)
  })
}

api().catch((err) => {
  console.log(err)
})

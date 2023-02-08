import { GraphQLSchema } from 'graphql'
import { query } from './mainType/query'

export const schema = new GraphQLSchema({
  query: query,
})

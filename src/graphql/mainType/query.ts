import { getGreeting } from '@graphql/demo/qry/getGreeting'
import { GraphQLObjectType } from 'graphql'

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query List',
  fields: {
    getGreeting,
  },
})

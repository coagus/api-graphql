import { GraphQLObjectType, GraphQLString } from 'graphql'

export const GreetingType = new GraphQLObjectType({
  name: 'Greeting',
  description: 'Greeting Result',
  fields: () => ({
    greeting: { type: GraphQLString },
  }),
})

import { GreetingType } from '../type/greetingType'
import { GraphQLString } from 'graphql'

export const getGreeting = {
  type: GreetingType,
  description: 'Get a greeting.',
  args: {
    name: { type: GraphQLString },
  },
  resolve(_: any, args: any) {
    const { name } = args
    if (name === '') return { greeting: `Hola, Cuál es tu nombre?` }
    return { greeting: `Hola ${name}` }
  },
}

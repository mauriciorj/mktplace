
import express from 'express'
import cors from 'cors'

import { ApolloServer } from 'apollo-server-express'

import schema from './schema/schema'
import resolvers from './schema/resolvers'

//const graphqlHTTP = require('express-graphql')
//import { graphqlHTTP } from 'express-graphql'
//import bodyParser from 'body-parser'
// import { GraphQLResponse } from 'apollo-server-types'

const app = express();

const server = new ApolloServer({ 
  typeDefs: schema,
  resolvers: resolvers,
})

app.use(cors())

server.applyMiddleware({ app, path: '/graphql' })

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at https://localhost:${PORT}`);
});
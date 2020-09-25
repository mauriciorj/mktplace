import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema'
//const graphqlHTTP = require('express-graphql')

// import bodyParser from 'body-parser'

// import { ApolloServer } from 'apollo-server-express'
// import { GraphQLResponse } from 'apollo-server-types'


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`🚀 Server is running at https://localhost:${PORT}`);
});
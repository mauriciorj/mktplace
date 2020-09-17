import express from 'express';

import bodyParser from 'body-parser'

import { ApolloServer } from 'apollo-server-express'
import { GraphQLResponse } from 'apollo-server-types'


const app = express();
const PORT = 4000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`🚀 Server is running at https://localhost:${PORT}`);
});
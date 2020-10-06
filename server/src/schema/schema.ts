import { gql } from 'apollo-server'

const schema = gql`
  type User {
    id: ID!
    firstName: String
    lastName: Mission
  }

  type Query{
    users(id: String!): User
  }
`;

export default schema;
const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    name: String!
    age: Int!
    isSingle: Boolean
    numbers: [Int!]!
    location: Location
    users: [User!]!
  }
  type Mutation {
    addUser(name: String!, age: Int!): [User!]!
    updateUser(id: ID!, name: String, age: Int): User!
    deleteUser(id: ID!): User!
  }
  type Subscription {
    update: User!
  }
  type Location {
    state: String!
    city: String!
  }
  type User {
    id: ID!
    name: String!
    age: Int!
    location: Location
  }
`;

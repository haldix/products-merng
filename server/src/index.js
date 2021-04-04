const { ApolloServer } = require('apollo-server');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const users = require('./utils/functions');
const typeDefs = require('./schema.js');
require('../db/connection');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => console.log('ERROR:', err?.message));

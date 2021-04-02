const { ApolloServer, gql, PubSub } = require('apollo-server');
const { v4: uuidv4 } = require('uuid');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const users = require('./utils/users');
const pubsub = new PubSub();
const typeDefs = require('./schema.js');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
  context: {
    users,
    pubsub,
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => console.log('ERROR:', err?.message));

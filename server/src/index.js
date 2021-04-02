const { ApolloServer, gql, PubSub } = require('apollo-server');
const { v4: uuidv4 } = require('uuid');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const users = require('./utils/users');
const pubsub = new PubSub();
const typeDefs = require('./schema.js');
const server = new ApolloServer({
  // subscriptions: {
  //   path: '/subscriptions',
  // },
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

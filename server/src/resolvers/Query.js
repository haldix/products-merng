const users = require('../utils/users');
const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
const Query = {
  name() {
    return 'Dan';
  },
  age() {
    return 50;
  },
  isSingle() {
    return null;
  },
  numbers() {
    return [10, 20, 30, 40];
  },
  location() {
    return {
      state: 'New York',
      city: 'Albany',
    };
  },
  users() {
    return users;
  },
};
module.exports = Query;

const { PubSub } = require('apollo-server');
const pubsub = new PubSub();

const Subscription = {
  update: {
    subscribe(parent, args, ctx, info) {
      return pubsub.asyncIterator('update_user');
    },
  },
};
module.exports = Subscription;

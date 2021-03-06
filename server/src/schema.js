const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    products: [Product!]!
    reviews(skuId: ID!): [Review!]!
  }

  type Mutation {
    addProduct(skuId: ID!, data: ProductInput): Product!
    editProduct(skuId: ID, data: ProductInput): Product!
    deleteProduct(skuId: ID): Product!
    addReview(skuId: ID!, data: AddReviewInput): Review!
    deleteReview(reviewId: ID!): Boolean!
  }

  input ProductInput {
    name: String!
    description: String!
    price: Float!
  }

  input AddReviewInput {
    title: String!
    comment: String!
  }

  type Product {
    skuId: ID!
    name: String!
    description: String!
    price: Float!
    updatedAt: String!
  }

  type CustomReview {
    skuId: ID!
    review: Review!
  }

  type Review {
    _id: ID!
    title: String!
    comment: String!
    updatedAt: String!
  }
`;

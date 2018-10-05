const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
   type Book {
    id: ID!
    title: String!
    author: String!
    isbn: String!
    url: String!
  }

  type Query {
    allBooks: [Book!]!
  }

  type Mutation {
    createBook(title: String!, author: String!): Book
  }
`;

module.exports = typeDefs;
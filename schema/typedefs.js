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

  type Mutation {
    createBook(title: String!, author: String!): Book
  }

  type Query {
    allBooks(filter: bookFilter): [Book!]!
  }
  
  input bookFilter {
    id: ID
    title: String
    author: String
    isbn: String
    url: String
  }
`;

module.exports = typeDefs;
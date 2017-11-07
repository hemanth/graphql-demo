const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./resolvers')

// Define your types here.
const typeDefs = `
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
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers})

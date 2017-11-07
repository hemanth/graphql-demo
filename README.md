## graphql-demo

A simple graphql-demo, which exposes an endPoint which can be quiered for books.

__Schema:__

```js
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
```

Try the [endPoint](https://graphql-demo.now.sh/graphiql).


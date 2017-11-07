const books = require('./books.json')

module.exports = {
  Query: {
    allBooks: () => books
  },
  Mutation: {
    createBook: (_, data) => {
      const newBook = Object.assign({id: books.length + 1}, data)
      books.push(newBook)
      return newBook
    }
  }
}

const books = require('./books.json')

module.exports = {
  Query: {
    allBooks: (root, {filter}) => {
      return filter && Object.keys(filter).length ?
      books.filter(book => {
        book;
        return book[Object.keys(filter)[0]] === Object.values(filter)[0]
      }) :
      books
    }
  },
  Mutation: {
    createBook: (_, data) => {
      const newBook = Object.assign({id: books.length + 1}, data)
      books.push(newBook)
      return newBook
    }
  }
}

import { ApolloServer, gql } from 'apollo-server-micro';

let books = [
  {
    id: 1,
    name: 'In the End',
    author: 'Just Smith',
  },
  {
    id: 2,
    name: 'Something Different',
    author: 'Ben Brown',
  },
];

const typeDefs = gql`
  type Book {
    id: Int
    name: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(id: Int, name: String, author: String): Book
    deleteBook(id: Int): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },

  Mutation: {
    addBook: (_root, args) => {
      books = [...books, args];
      console.log(books);
      return books;
    },
    deleteBook: (_root, args) => {
      const newBooks = books.filter((book) => book.id !== args.id);
      books = newBooks;
      console.log(books);
      return books;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: '/api/graphql-data' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

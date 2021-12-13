import { useQuery, useMutation, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query {
    books {
      id
      name
      author
    }
  }
`;

const ADD_BOOK = gql`
  mutation addBook($id: Int, $name: String, $author: String) {
    addBook(id: $id, name: $name, author: $author) {
      id
      name
      author
    }
  }
`;

const DELETE_BOOK = gql`
  mutation ($id: Int) {
    deleteBook(id: $id) {
      id
      name
      author
    }
  }
`;

const newBook = {
  id: 3,
  name: 'Never ending story',
  author: 'Joe Burton',
};

const BookInfo = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const [addTodo] = useMutation(ADD_BOOK);

  const updateCache = (cache) => {
    let { books } = cache.readQuery({ query: GET_BOOKS });
    const newBooks = books.filter((book) => book.id !== 3);

    cache.writeQuery({
      query: GET_BOOKS,
      data: {
        books: newBooks,
      },
    });
  };

  const [deleteBook] = useMutation(DELETE_BOOK, { update: updateCache });

  const deleteBookFromDatabase = () => {
    deleteBook({
      variables: {
        id: 3,
        name: 'Never ending story',
        author: 'Joe Burton',
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() =>
          addTodo({
            variables: newBook,
            update: (cache) => {
              let { books } = cache.readQuery({ query: GET_BOOKS });
              cache.writeQuery({
                query: GET_BOOKS,
                data: {
                  books: [...books, newBook],
                },
              });
            },
          })
        }
      >
        Add Book
      </button>
      <button onClick={deleteBookFromDatabase}>Delete Book 3</button>
    </div>
  );
};

export default BookInfo;

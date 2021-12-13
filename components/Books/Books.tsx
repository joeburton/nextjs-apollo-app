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

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.books.map((book, i) => {
        return (
          <li key={i}>
            Developer name: {book.name}, Developer skills: {book.author}
          </li>
        );
      })}
    </ul>
  );
};

export default Books;

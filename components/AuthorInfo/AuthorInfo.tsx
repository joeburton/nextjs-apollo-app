import { useQuery, gql } from '@apollo/client';

const GET_BOOK_DETAILS = gql`
  query {
    books {
      id
      name
      author
    }
  }
`;

const AuthorInfo = () => {
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
};

export default AuthorInfo;

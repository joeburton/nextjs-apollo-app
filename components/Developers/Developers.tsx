import { useQuery, gql } from '@apollo/client';

const GET_DEVELOPERS = gql`
  query {
    developers {
      id
      name
      skills
    }
  }
`;

const Developers = () => {
  const { loading, error, data } = useQuery(GET_DEVELOPERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.developers.map((developers, i) => {
        return (
          <li key={i}>
            Developer name: {developers.name}, Developer skills:{' '}
            {developers.author}
          </li>
        );
      })}
    </ul>
  );
};

export default Developers;

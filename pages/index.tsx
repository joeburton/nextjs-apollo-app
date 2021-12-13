import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { DeveloperList, DevelopersData, AddDeveloper } from '../components';

const Home = () => {
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          developers: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql-data',
    cache: cache,
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <AddDeveloper />
        <DeveloperList />
        <DevelopersData />
      </div>
    </ApolloProvider>
  );
};

export default Home;

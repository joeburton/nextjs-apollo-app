import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BookInfo, AuthorInfo } from '../components';

const Home = () => {
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          books: {
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
        <BookInfo />
        <AuthorInfo />
      </div>
    </ApolloProvider>
  );
};

export default Home;

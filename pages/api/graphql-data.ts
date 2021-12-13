import { ApolloServer, gql } from 'apollo-server-micro';

let developers = [
  {
    id: 1,
    name: 'Joe Burton',
    skills: 'React, CSS, HTML',
  },
  {
    id: 2,
    name: 'Jill Hill',
    skills: 'C#, SQL',
  },
];

const typeDefs = gql`
  type Developer {
    id: Int
    name: String
    skills: String
  }

  type Query {
    developers: [Developer]
  }

  type Mutation {
    editDeveloper(id: Int, name: String, skills: String): [Developer]
    addDeveloper(id: Int, name: String, skills: String): [Developer]
    deleteDeveloper(id: Int): [Developer]
  }
`;

const resolvers = {
  Query: {
    developers: () => developers,
  },

  Mutation: {
    addDeveloper: (_root, args) => {
      developers = [...developers, args];
      console.log(developers);
      return developers;
    },
    deleteDeveloper: (_root, args) => {
      const updatedDevelopers = developers.filter(
        (book) => book.id !== args.id
      );
      developers = updatedDevelopers;
      console.log(developers);
      return developers;
    },
    editDeveloper: (_root, args) => {
      const updatedDevelopers = developers.map((book) =>
        book.id === args.id ? args : book
      );
      developers = updatedDevelopers;
      console.log(developers);
      return developers;
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

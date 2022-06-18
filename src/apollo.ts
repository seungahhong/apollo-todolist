import { ApolloClient, InMemoryCache } from '@apollo/client';

import todoVar from './store/todo';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getTodos: {
          read() {
            return todoVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  // uri: 'https://!!',
  cache,
});

export default client;
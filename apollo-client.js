import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.API_URL,
});

const authLink = setContext((_, { headers }) => {
  const apiToken = process.env.API_KEY;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${apiToken}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
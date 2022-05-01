import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/47ao35a8uy0j',
});

const authLink = setContext((_, { headers }) => {
  const token = 'VbvCqvUnVXcz5E0S7zevH5TdsY6Cf2tjx9BnNRwn9Ps';
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
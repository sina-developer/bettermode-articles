import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  // Retrieve the token from localStorage or other storage
  // const token = localStorage.getItem('authToken');
  const token = import.meta.env.VITE_API_TOKEN;

  // Return the headers to the context, including the authorization token if it exists
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = from([
  authLink,
  errorLink,
  new HttpLink({ uri: 'https://api.bettermode.com/' }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

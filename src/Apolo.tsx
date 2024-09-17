import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { CONSTS } from './constants';
import { toast } from 'react-toastify';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message }) => {
      toast.error(message);
    });
  if (networkError) toast.error(networkError.message);
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(CONSTS.TOKEN);

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

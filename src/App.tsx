import { ApolloProvider } from '@apollo/client';
import List from './components/list/list';
import { client } from './Apolo';

function App() {
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
}

export default App;

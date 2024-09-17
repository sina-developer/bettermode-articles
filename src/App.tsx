import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from './Apolo';
import Layout from './components/common/layout';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { AuthProvider } from './providers/auth-provider';
import AppRouter from './router/router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;

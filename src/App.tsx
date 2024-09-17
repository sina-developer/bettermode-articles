import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from './Apolo';
import Layout from './components/common/layout';
import { AuthProvider } from './providers/auth-provider';
import AppRouter from './router/router';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;

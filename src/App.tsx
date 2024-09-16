import { ApolloProvider } from '@apollo/client';
import Articles from './pages/articles/articles';
import { client } from './Apolo';
import Layout from './components/common/layout/layout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './pages/article/article';
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Articles />} />
            <Route path='/post/:id' element={<Article />} />
          </Routes>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { SliderData } from './components/SliderData';
import ImageSlider from './pages/ImageSlider';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ImageSlider slides={SliderData} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/counselor" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

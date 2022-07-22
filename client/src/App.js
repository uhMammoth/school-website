import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SliderData } from './components/SliderData';
import ImageSlider from './pages/ImageSlider';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import LogIn from './pages/LogIn';
import Page from './pages/Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ImageSlider slides={SliderData} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/page" element={<Page />} />
          <Route path="/counselor" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

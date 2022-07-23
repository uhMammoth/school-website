import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { SliderData } from './components/SliderData';
import ImageSlider from './pages/ImageSlider';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import LogIn from './pages/LogIn';
import Calendar from './pages/Calendar';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/counselor" element={<ImageSlider slides={SliderData} />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;


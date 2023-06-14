import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Concierge from './pages/services/Concierge';
import DocumentProcurement from './pages/services/DocumentProcurement';
import PassengerSupport from './pages/services/PassengerSupport';

function App() {
  return (
    <div>
      <Router>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/concierge" element={<Concierge />} />
              <Route path="/services/passenger-support" element={<PassengerSupport />} />
              <Route path="/services/document-procurement" element={<DocumentProcurement />} />
            </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

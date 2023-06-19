import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Concierge from './pages/services/Concierge';
import DocumentProcurement from './pages/services/DocumentProcurement';
import PassengerSupport from './pages/services/PassengerSupport';
import Hotel from './pages/services/Hotel';
import Tour from './pages/services/Tour';

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
              <Route path="/services/hotel" element={<Hotel />} />
              <Route path="/services/tour" element={<Tour />} />
            </Routes>
        <Footer />
        <a
              href="https://wa.me/2347042408821"
              target="_blank"
              rel="noreferrer"
            >
          <div className="whatsapp text-center">
            
             <i class="fa-brands fa-2x fa-square-whatsapp fa-whatsapp2"></i>
           
            <br />
            <b className='chat'><b>Live Chat</b></b>
          </div>
          </a>
      </Router>
    </div>
  );
}

export default App;

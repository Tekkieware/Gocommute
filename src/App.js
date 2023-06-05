import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

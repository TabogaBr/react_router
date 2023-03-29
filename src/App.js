import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

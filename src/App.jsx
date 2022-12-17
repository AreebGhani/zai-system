import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Blogs from './pages/Blogs/Blogs';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Cursor from './components/Cursor';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blogs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </main>
      <ScrollTop />
      <Cursor />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Flowers from './components/Flowers';
import Cart from './components/Cart';
import Login from './components/Login';
import FlowersSearchResults from './components/FlowersSearchResults';
import { CartProvider } from './context/CartContext';
import './styles/style.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/flowers-search" element={<FlowersSearchResults />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

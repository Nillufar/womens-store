import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LocaleProvider } from './context/LocaleContext';
import HomePage from './pages/HomePage';
import SalePage from './pages/SalePage';
import CartPage from './pages/CartPage';
import ComingSoonPage from './pages/ComingSoonPage';
import './App.css';

const App: React.FC = () => {
  return (
    <LocaleProvider>
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </CartProvider>
    </LocaleProvider>
  );
};

export default App;

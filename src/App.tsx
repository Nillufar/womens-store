import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import SaleSection from './components/SaleSection/SaleSection';
import ArrivingSoon from './components/ArrivingSoon/ArrivingSoon';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Hero />
        <FeaturedProducts />
        <SaleSection />
        <ArrivingSoon />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;

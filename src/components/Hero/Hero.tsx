import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>New Collection 2024</h1>
        <p>Discover the latest trends in women's fashion</p>
        <button className="btn-primary" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

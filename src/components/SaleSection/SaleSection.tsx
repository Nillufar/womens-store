import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { saleProducts } from '../../data/products';
import './SaleSection.css';

const SaleSection: React.FC = () => {
  const scrollToSaleProducts = () => {
    const saleProductsElement = document.getElementById('sale-products');
    if (saleProductsElement) {
      saleProductsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sale" className="sale-section">
      <div className="container">
        <div className="sale-banner">
          <div className="sale-content">
            <h2>Summer Sale</h2>
            <p className="sale-discount">Up to 50% OFF</p>
            <p className="sale-description">Don't miss out on our biggest sale of the year!</p>
            <button className="btn-secondary" onClick={scrollToSaleProducts}>
              Shop Sale
            </button>
          </div>
        </div>
        <div id="sale-products" className="sale-products-grid">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} isSale={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleSection;

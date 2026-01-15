import React from 'react';
import { FaEye, FaShoppingBag } from 'react-icons/fa';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSale = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Implement quick view logic
    console.log('Quick view:', product.name);
  };

  return (
    <div className={`product-card ${isSale ? 'sale-product-card' : ''}`}>
      {isSale && product.discount && (
        <div className="sale-badge">-{product.discount}%</div>
      )}
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-overlay">
          <button className="quick-view" onClick={handleQuickView} aria-label="Quick view">
            <FaEye />
          </button>
          <button className="add-to-cart" onClick={handleAddToCart} aria-label="Add to cart">
            <FaShoppingBag />
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
          )}
          <span className={product.oldPrice ? 'new-price' : ''}>
            ${product.price.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

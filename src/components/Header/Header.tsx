import React, { useState } from 'react';
import { FaTshirt, FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import LanguageSelector from './LanguageSelector';
import Navigation from './Navigation';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="logo">
              <FaTshirt className="logo-icon" />
              <span>Fashion Store</span>
            </div>
            <div className="header-actions">
              <LanguageSelector />
              <button className="search-btn" aria-label="Search">
                <FaSearch />
              </button>
              <button className="cart-btn" aria-label="Shopping Cart">
                <FaShoppingBag />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
              <button
                className="menu-toggle"
                aria-label="Menu"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;

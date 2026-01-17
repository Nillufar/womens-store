import React from 'react';
import { FaTshirt, FaShoePrints } from 'react-icons/fa';
import { GiClothes, GiDress } from 'react-icons/gi';
import './Navigation.css';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  const categories = [
    { id: 'jeans', name: 'Jeans', icon: FaTshirt },
    { id: 'jackets', name: 'Jackets', icon: GiClothes },
    { id: 'dresses', name: 'Dresses', icon: GiDress },
    { id: 'shoes', name: 'Shoes', icon: FaShoePrints },
  ];

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#categories" className="nav-link" onClick={handleLinkClick}>
              Categories
            </a>
          </li>
          <li>
            <a href="#sale" className="nav-link" onClick={handleLinkClick}>
              Sale
            </a>
          </li>
          <li>
            <a href="#arriving-soon" className="nav-link" onClick={handleLinkClick}>
              Arriving Soon
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
        <ul className={`category-menu ${isOpen ? 'active' : ''}`}>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="category-link"
                  onClick={handleLinkClick}
                >
                  <Icon />
                  <span>{category.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

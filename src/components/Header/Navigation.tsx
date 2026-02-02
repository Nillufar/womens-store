import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineChevronDown, HiOutlineSquares2X2 } from 'react-icons/hi2';
import './Navigation.css';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'jeans', name: 'Jeans' },
  { id: 'jackets', name: 'Jackets' },
  { id: 'dresses', name: 'Dresses' },
  { id: 'shoes', name: 'Shoes' },
];

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const handleLinkClick = () => {
    onClose();
    setCategoriesOpen(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    handleLinkClick();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="nav-link nav-link-btn"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
            >
              <HiOutlineSquares2X2 className="nav-icon" />
              Categories
              <HiOutlineChevronDown className={`nav-chevron ${categoriesOpen ? 'open' : ''}`} />
            </button>
            <ul className={`categories-dropdown ${categoriesOpen ? 'open' : ''}`}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button type="button" onClick={() => scrollTo(cat.id)}>
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/sale" className="nav-link" onClick={handleLinkClick}>
              Sale
            </Link>
          </li>
          <li>
            <a href="/#arriving-soon" className="nav-link" onClick={handleLinkClick}>
              Arriving Soon
            </a>
          </li>
          <li>
            <a href="/#contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

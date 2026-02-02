import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineChevronDown,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import { useCart } from '../../context/CartContext';
import { useLocale } from '../../context/LocaleContext';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const categories = [
  { id: 'jeans', key: 'jeans' },
  { id: 'jackets', key: 'jackets' },
  { id: 'dresses', key: 'dresses' },
  { id: 'shoes', key: 'shoes' },
];

const Header: React.FC = () => {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { cartCount } = useCart();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
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
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            {t('storeName')}
          </Link>
        </div>
        <div className="header-center">
          <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="header-nav-list">
              <li className="nav-item-dropdown" ref={dropdownRef}>
                <button
                  type="button"
                  className="nav-link nav-link-btn"
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  aria-expanded={categoriesOpen}
                >
                  <HiOutlineSquares2X2 className="nav-icon" />
                  {t('categories')}
                  <HiOutlineChevronDown className={`nav-chevron ${categoriesOpen ? 'open' : ''}`} />
                </button>
                <ul className={`categories-dropdown ${categoriesOpen ? 'open' : ''}`}>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button type="button" onClick={() => scrollTo(cat.id)}>
                        {t(cat.key)}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/sale" className="nav-link" onClick={handleLinkClick}>
                  {t('sale')}
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="nav-link" onClick={handleLinkClick}>
                  {t('arrivingSoon')}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="nav-link" onClick={handleLinkClick}>
                  {t('contact')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-actions">
          <LanguageSelector />
          <button className="search-btn" aria-label={t('search')}>
            <HiOutlineMagnifyingGlass />
          </button>
          <Link to="/cart" className="cart-btn" aria-label={t('cart')}>
            <HiOutlineShoppingBag />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <button
            className="menu-toggle"
            aria-label={t('menu')}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

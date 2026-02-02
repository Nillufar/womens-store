import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { useLocale } from '../../context/LocaleContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLocale();
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('aboutUs')}</h3>
            <p>{t('aboutText')}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>{t('quickLinks')}</h3>
            <ul>
              <li>
                <a href="#products">{t('categories')}</a>
              </li>
              <li>
                <a href="/sale">{t('sale')}</a>
              </li>
              <li>
                <a href="/cart">{t('cart')}</a>
              </li>
              <li>
                <a href="/coming-soon">{t('arrivingSoon')}</a>
              </li>
              <li>
                <a href="#contact">{t('contact')}</a>
              </li>
              <li>
                <a href="#">{t('about')}</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t('categories')}</h3>
            <ul>
              <li>
                <a href="#jeans">{t('jeans')}</a>
              </li>
              <li>
                <a href="#jackets">{t('jackets')}</a>
              </li>
              <li>
                <a href="#dresses">{t('dresses')}</a>
              </li>
              <li>
                <a href="#shoes">{t('shoes')}</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t('contact')}</h3>
            <ul className="contact-info">
              <li>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@jamilestore.com</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>123 Fashion Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

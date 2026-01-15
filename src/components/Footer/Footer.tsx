import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Your premier destination for women's fashion. We offer the latest trends and
              timeless classics.
            </p>
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
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#sale">Sale</a>
              </li>
              <li>
                <a href="#arriving-soon">Arriving Soon</a>
               </li>
               <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="#jeans">Jeans</a>
              </li>
              <li>
                <a href="#jackets">Jackets</a>
              </li>
              <li>
                <a href="#dresses">Dresses</a>
              </li>
              <li>
                <a href="#shoes">Shoes</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@fashionstore.com</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>123 Fashion Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Fashion Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

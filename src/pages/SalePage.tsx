import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { saleProducts } from '../data/products';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLocale } from '../context/LocaleContext';
import './SalePage.css';

const SalePage: React.FC = () => {
  const { t } = useLocale();
  return (
    <>
      <Header />
      <main className="sale-page">
        <div className="container">
          <div className="sale-page-header">
            <h1>{t('sale')}</h1>
            <p className="sale-page-subtitle">{t('upTo50OffSelected')}</p>
            <Link to="/" className="back-link">
              {t('backToHome')}
            </Link>
          </div>
          <div className="sale-products-grid">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} isSale />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SalePage;

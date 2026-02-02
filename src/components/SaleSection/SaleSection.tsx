import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { saleProducts } from '../../data/products';
import { useLocale } from '../../context/LocaleContext';
import './SaleSection.css';

const SaleSection: React.FC = () => {
  const { t } = useLocale();
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
            <h2>{t('summerSale')}</h2>
            <p className="sale-discount">{t('upTo50Off')}</p>
            <p className="sale-description">{t('saleDescription')}</p>
            <button className="btn-secondary" onClick={scrollToSaleProducts}>
              {t('shopSale')}
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

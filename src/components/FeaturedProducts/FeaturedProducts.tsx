import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { featuredProducts } from '../../data/products';
import { useLocale } from '../../context/LocaleContext';
import './FeaturedProducts.css';

const FeaturedProducts: React.FC = () => {
  const { t } = useLocale();
  return (
    <section id="products" className="featured-products">
      <div className="container">
        <h2 className="section-title">{t('featuredProducts')}</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

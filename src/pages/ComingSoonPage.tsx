import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ComingSoonCard from '../components/ComingSoonCard/ComingSoonCard';
import { comingSoonProducts } from '../data/products';
import { useLocale } from '../context/LocaleContext';
import './ComingSoonPage.css';

const ComingSoonPage: React.FC = () => {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main className="coming-soon-page">
        <div className="container">
          <div className="coming-soon-page-header">
            <h1>{t('arrivingSoon')}</h1>
            <p className="coming-soon-subtitle">{t('comingSoonSubtitle')}</p>
            <Link to="/" className="back-link">
              {t('backToHome')}
            </Link>
          </div>
          <div className="coming-soon-grid">
            {comingSoonProducts.map((product) => (
              <ComingSoonCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoonPage;

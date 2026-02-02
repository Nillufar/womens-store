import React from 'react';
import { useLocale } from '../../context/LocaleContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLocale();
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-woman-in-elegant-dress-walking-4987286/4987286.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <button className="btn-primary" onClick={scrollToProducts}>
          {t('shopNow')}
        </button>
      </div>
    </section>
  );
};

export default Hero;

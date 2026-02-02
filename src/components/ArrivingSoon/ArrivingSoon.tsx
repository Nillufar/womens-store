import React from 'react';
import { useLocale } from '../../context/LocaleContext';
import './ArrivingSoon.css';

const ArrivingSoon: React.FC = () => {
  const { t } = useLocale();
  return (
    <section id="arriving-soon" className="arriving-soon">
      <div className="container">
        <div className="arriving-soon-content">
          <h2 className="section-title">{t('arrivingSoonTitle')}</h2>
          <p className="arriving-soon-subtitle">{t('arrivingSoonSubtitle')}</p>
          <p className="arriving-soon-text">{t('arrivingSoonText')}</p>
        </div>
      </div>
    </section>
  );
};

export default ArrivingSoon;

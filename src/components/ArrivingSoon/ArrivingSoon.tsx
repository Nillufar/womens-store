import React from 'react';
import './ArrivingSoon.css';

const ArrivingSoon: React.FC = () => {
  return (
    <section id="arriving-soon" className="arriving-soon">
      <div className="container">
        <div className="arriving-soon-content">
          <h2 className="section-title">Arriving Soon</h2>
          <p className="arriving-soon-subtitle">
            New collections are on their way. Stay tuned for fresh styles and exclusive drops.
          </p>
          <p className="arriving-soon-text">
            We’re curating the latest trends in jeans, jackets, dresses, and shoes just for you.
            Check back soon or follow us on social media to be the first to shop our new arrivals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArrivingSoon;


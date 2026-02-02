import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import ArrivingSoon from '../components/ArrivingSoon/ArrivingSoon';
import Footer from '../components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <ArrivingSoon />
      <Footer />
    </>
  );
};

export default HomePage;

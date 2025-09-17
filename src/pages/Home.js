import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GEMSection from '../components/GEMSection';
import About from '../components/About';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <GEMSection />
      <About />
      <CTA />
    </div>
  );
};

export default Home;

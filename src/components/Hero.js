import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
  const addToRefs = useScrollAnimation();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-on-scroll" ref={addToRefs}>
              Your Trusted Partner for
              <span className="highlight"> Corporate Supplies</span>
            </h1>
            <p className="hero-description animate-fade-in-left" ref={addToRefs}>
              Streamline your business operations with our comprehensive range of office supplies, 
              furniture, technology solutions, and professional services. We deliver quality 
              products and exceptional service to help your business thrive.
            </p>
            <div className="hero-buttons animate-fade-in-right" ref={addToRefs}>
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
            <div className="hero-features animate-scale-in" ref={addToRefs}>
              <div className="feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,18.77L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
                </svg>
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C6.48,2 2,6.48 2,12s4.48 10 10 10 10-4.48 10-10S17.52 2 12,2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Fast Delivery</span>
              </div>
              <div className="feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16.2V10C16.2,7.8 14.4,6 12,6C9.6,6 7.8,7.8 7.8,10V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.5C11.2,8.5 10.5,9.2 10.5,10S11.2,11.5 12,11.5S13.5,10.8 13.5,10S12.8,8.5 12,8.5Z"/>
                </svg>
                <span>GEM Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

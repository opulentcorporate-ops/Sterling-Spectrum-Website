import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Trusted Partner for
              <span className="highlight"> Corporate Supplies</span>
            </h1>
            <p className="hero-description">
              Streamline your business operations with our comprehensive range of office supplies, 
              furniture, technology solutions, and professional services. We deliver quality 
              products and exceptional service to help your business thrive.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
            <div className="hero-features">
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
          <div className="hero-image">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M17,12H7V10H17V12M15,16H7V14H15V16M17,8H7V6H17V8Z"/>
                  </svg>
                </div>
                <span>Office Supplies</span>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                  </svg>
                </div>
                <span>Furniture</span>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
                  </svg>
                </div>
                <span>Technology</span>
              </div>
              <div className="floating-card card-4">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,9V15H6V9H16M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5M19,16H5V18H19V16Z"/>
                  </svg>
                </div>
                <span>Printing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

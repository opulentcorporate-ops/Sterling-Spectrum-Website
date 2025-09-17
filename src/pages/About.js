import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About Sterling Spectrum</h1>
            <p className="hero-subtitle">
              Your trusted partner in corporate supplies and business solutions
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Sterling Spectrum</h2>
              <p>
                Sterling Spectrum is a dynamic new company specializing in comprehensive corporate supply solutions. 
                We are committed to providing quality products and exceptional service to help businesses thrive 
                in today's competitive market.
              </p>
              <p>
                As a GEM registered company, we offer a wide range of services including printing, corporate gifting, 
                computer hardware, peripherals, and office supplies. Our focus is on delivering reliable solutions 
                that meet the evolving needs of modern businesses.
              </p>
            </div>
            <div className="about-image">
              <div className="professional-graphic">
                <div className="graphic-card">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,18.77L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
                    </svg>
                  </div>
                  <span>Quality</span>
                </div>
                <div className="graphic-card">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2C6.48,2 2,6.48 2,12S6.48,22 12,22 22,17.52 22,12 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12S7.59,4 12,4 20,7.59 20,12 16.41,20 12,20M12,6C8.69,6 6,8.69 6,12S8.69,18 12,18 18,15.31 18,12 15.31,6 12,6M12,8C9.79,8 8,9.79 8,12S9.79,16 12,16 16,14.21 16,12 14.21,8 12,8Z"/>
                    </svg>
                  </div>
                  <span>Reliability</span>
                </div>
                <div className="graphic-card">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                    </svg>
                  </div>
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We provide only the highest quality products and services to ensure your business success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Reliability</h3>
              <p>Count on us for consistent, dependable service that keeps your business running smoothly.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01.99L12 10l-1.99-2.01A2.5 2.5 0 0 0 8 7H5.46c-.8 0-1.54.37-2.01.99L1 10.5V22h2v-6h2.5l2.5 2.5 2.5-2.5H12v6h2z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We continuously evolve our solutions to meet the changing needs of modern businesses.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

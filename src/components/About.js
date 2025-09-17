import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Why Choose Sterling Spectrum?</h2>
            <p className="about-description">
              With over two decades of experience in corporate supplies, we understand 
              the unique challenges businesses face. Our commitment to quality, reliability, 
              and exceptional service has made us the preferred choice for companies nationwide.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>We source only the highest quality products from trusted manufacturers.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4>Reliable Delivery</h4>
                  <p>Fast and reliable delivery to keep your business running smoothly.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01.99L12 10l-1.99-2.01A2.5 2.5 0 0 0 8 7H5.46c-.8 0-1.54.37-2.01.99L1 10.5V22h2v-6h2.5l2.5 2.5 2.5-2.5H12v6h2z"/>
                  </svg>
                </div>
                <div>
                  <h4>Expert Support</h4>
                  <p>Our knowledgeable team is here to help you find the right solutions.</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients Served</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

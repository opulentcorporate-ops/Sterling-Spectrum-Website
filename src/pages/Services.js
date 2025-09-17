import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Printing Services',
      description: 'Professional printing services for documents, marketing materials, business cards, and large format printing.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,9V15H6V9H16M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5M19,16H5V18H19V16Z"/>
        </svg>
      ),
      features: ['Document Printing', 'Marketing Materials', 'Business Cards', 'Large Format Printing']
    },
    {
      id: 2,
      title: 'Corporate Gifting',
      description: 'Premium corporate gifting solutions for your business relationships and client appreciation.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,18.77L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
        </svg>
      ),
      features: ['Custom Gifts', 'Branded Items', 'Seasonal Collections', 'Bulk Orders']
    },
    {
      id: 3,
      title: 'Computer Hardware',
      description: 'Complete range of computer hardware including processors, motherboards, and components.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
        </svg>
      ),
      features: ['Processors', 'Motherboards', 'Memory', 'Storage Devices']
    },
    {
      id: 4,
      title: 'Computer Peripherals',
      description: 'Wide selection of computer peripherals including keyboards, mice, monitors, and accessories.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2 2,6.48 2,12S6.48,22 12,22 22,17.52 22,12 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12S7.59,4 12,4 20,7.59 20,12 16.41,20 12,20M12,6C8.69,6 6,8.69 6,12S8.69,18 12,18 18,15.31 18,12 15.31,6 12,6M12,8C9.79,8 8,9.79 8,12S9.79,16 12,16 16,14.21 16,12 14.21,8 12,8Z"/>
        </svg>
      ),
      features: ['Keyboards & Mice', 'Monitors', 'Speakers', 'Accessories']
    },
    {
      id: 5,
      title: 'Office Supply/ Stationery',
      description: 'Complete range of office supplies and stationery for all your business needs.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M17,12H7V10H17V12M15,16H7V14H15V16M17,8H7V6H17V8Z"/>
        </svg>
      ),
      features: ['Stationery', 'Paper Products', 'Writing Tools', 'Organizational Items']
    }
  ];

  return (
    <div className="services-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive corporate supply solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready to Get Started?</h2>
              <p>
                Transform your business operations with our comprehensive corporate supply solutions. 
                From printing services to computer hardware, we provide everything you need to keep 
                your business running smoothly and efficiently.
              </p>
              <div className="contact-benefits">
                <div className="benefit-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span>Free Consultation & Quote</span>
                </div>
                <div className="benefit-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span>GEM Registered & Compliant</span>
                </div>
                <div className="benefit-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  <span>Fast Delivery & Support</span>
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <div className="contact-options">
                <a href="https://wa.me/919211738770" className="contact-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a href="tel:+919211738770" className="contact-btn phone-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Call Us
                </a>
              </div>
              <div className="contact-info">
                <div className="info-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>+91 9211738770</span>
                </div>
                <div className="info-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>info.sterlingspectrum@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="process-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Our streamlined process ensures you get the best corporate supply solutions 
              with minimal hassle and maximum efficiency.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">1</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>We start with a detailed discussion about your business needs, current challenges, and specific requirements. Our team analyzes your operations to understand exactly what you need.</p>
                <ul className="step-features">
                  <li>Free needs assessment</li>
                  <li>Budget planning</li>
                  <li>Timeline discussion</li>
                </ul>
              </div>
            </div>
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h3>Custom Solution Design</h3>
                <p>Based on your requirements, we create a tailored solution that perfectly matches your business needs. Our team designs a comprehensive plan with the right products and services.</p>
                <ul className="step-features">
                  <li>Product selection</li>
                  <li>Custom configurations</li>
                  <li>Detailed proposal</li>
                </ul>
              </div>
            </div>
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">3</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,18.77L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h3>Fast Implementation</h3>
                <p>We deliver and implement your solution quickly and efficiently. Our team ensures minimal disruption to your operations while setting up everything you need.</p>
                <ul className="step-features">
                  <li>Quick delivery</li>
                  <li>Professional setup</li>
                  <li>Quality assurance</li>
                </ul>
              </div>
            </div>
            <div className="process-step">
              <div className="step-visual">
                <div className="step-number">4</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C6.48,2 2,6.48 2,12s4.48 10 10 10 10-4.48 10-10S17.52 2 12,2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h3>Ongoing Support</h3>
                <p>We provide continuous support and maintenance to ensure your business operations run smoothly. Our team is always available to help with any issues or new requirements.</p>
                <ul className="step-features">
                  <li>24/7 support</li>
                  <li>Regular maintenance</li>
                  <li>Future upgrades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from 'react';
import './GEMSection.css';

const GEMSection = () => {
  return (
    <section className="gem-section">
      <div className="container">
        <div className="gem-content">
          <div className="gem-header">
            <div className="gem-logo">
              <div className="gem-emblem">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" fill="#1e40af" stroke="#f59e0b" strokeWidth="4"/>
                  <path d="M30 40h40v20H30z" fill="#f59e0b"/>
                  <path d="M35 35h30v5H35z" fill="#f59e0b"/>
                  <path d="M35 60h30v5H35z" fill="#f59e0b"/>
                  <text x="50" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">GEM</text>
                </svg>
              </div>
              <div className="gem-badge">
                <span className="badge-text">OFFICIALLY REGISTERED</span>
              </div>
            </div>
            <div className="gem-info">
              <h2>Government e-Marketplace (GEM) Registered</h2>
              <p className="gem-description">
                Sterling Spectrum is officially registered on the Government e-Marketplace (GEM) platform, 
                India's largest public procurement portal. This registration enables us to participate in 
                government tenders and provides access to a vast network of government buyers across India.
              </p>
            </div>
          </div>
          
          <div className="gem-benefits">
            <h3>Why GEM Registration Matters</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16.2V10C16.2,7.8 14.4,6 12,6C9.6,6 7.8,7.8 7.8,10V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.5C11.2,8.5 10.5,9.2 10.5,10S11.2,11.5 12,11.5S13.5,10.8 13.5,10S12.8,8.5 12,8.5Z"/>
                  </svg>
                </div>
                <h4>Government Compliance</h4>
                <p>Fully compliant with government procurement standards and regulations</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C6.48,2 2,6.48 2,12s4.48 10 10 10 10-4.48 10-10S17.52 2 12,2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4>Transparent Procurement</h4>
                <p>Fair and transparent bidding process with equal opportunities for all vendors</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,18.77L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
                  </svg>
                </div>
                <h4>Quality Assurance</h4>
                <p>Rigorous quality standards and verification processes ensure premium products</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C6.48,2 2,6.48 2,12s4.48 10 10 10 10-4.48 10-10S17.52 2 12,2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4>Vast Market Access</h4>
                <p>Access to thousands of government departments and public sector undertakings</p>
              </div>
            </div>
          </div>
          
          <div className="gem-verification">
            <div className="verification-content">
              <h3>GEM Registration Details</h3>
              <div className="verification-info">
                <div className="verification-item">
                  <span className="label">Registration Status:</span>
                  <span className="value verified">✓ Verified & Active</span>
                </div>
                <div className="verification-item">
                  <span className="label">Registration Date:</span>
                  <span className="value">2024</span>
                </div>
                <div className="verification-item">
                  <span className="label">Business Category:</span>
                  <span className="value">Corporate Supplies & Services</span>
                </div>
                <div className="verification-item">
                  <span className="label">Compliance Status:</span>
                  <span className="value verified">✓ Fully Compliant</span>
                </div>
              </div>
            </div>
            <div className="verification-badge">
              <div className="badge-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16.2V10C16.2,7.8 14.4,6 12,6C9.6,6 7.8,7.8 7.8,10V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.5C11.2,8.5 10.5,9.2 10.5,10S11.2,11.5 12,11.5S13.5,10.8 13.5,10S12.8,8.5 12,8.5Z"/>
                </svg>
              </div>
              <span className="badge-text">GEM VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GEMSection;

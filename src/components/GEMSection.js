import React from 'react';
import './GEMSection.css';

const GEMSection = () => {
  return (
    <section className="gem-section">
      <div className="container">
        <div className="gem-content">
          <div className="gem-main">
            <div className="gem-text">
              <h2>Registered on GeM (Government e-Marketplace)</h2>
              <p>
                We are proud to be a registered seller on the Government e-Marketplace (GeM) – an initiative by the Government of India to facilitate transparent and efficient procurement for government departments and PSUs. Our presence on GeM reflects our commitment to quality, compliance, and credibility. We offer a wide range of office supplies, computer peripherals, and IT hardware through this trusted platform, ensuring ease of access and streamlined procurement for all government buyers.
              </p>
            </div>
            <div className="gem-emblem">
              <div className="national-emblem">
                <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
                  {/* National Emblem of India - Four Lions */}
                  <g transform="translate(100, 100)">
                    {/* Central Wheel */}
                    <circle cx="0" cy="0" r="25" fill="none" stroke="#000" strokeWidth="2"/>
                    <circle cx="0" cy="0" r="20" fill="none" stroke="#000" strokeWidth="1"/>
                    <circle cx="0" cy="0" r="15" fill="none" stroke="#000" strokeWidth="1"/>
                    <circle cx="0" cy="0" r="10" fill="none" stroke="#000" strokeWidth="1"/>
                    <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="1"/>
                    
                    {/* Four Lions */}
                    <g transform="rotate(0)">
                      <path d="M0,-40 L-8,-50 L8,-50 Z" fill="#000"/>
                      <circle cx="0" cy="-45" r="3" fill="#000"/>
                      <path d="M-5,-35 L5,-35 L0,-30 Z" fill="#000"/>
                    </g>
                    <g transform="rotate(90)">
                      <path d="M0,-40 L-8,-50 L8,-50 Z" fill="#000"/>
                      <circle cx="0" cy="-45" r="3" fill="#000"/>
                      <path d="M-5,-35 L5,-35 L0,-30 Z" fill="#000"/>
                    </g>
                    <g transform="rotate(180)">
                      <path d="M0,-40 L-8,-50 L8,-50 Z" fill="#000"/>
                      <circle cx="0" cy="-45" r="3" fill="#000"/>
                      <path d="M-5,-35 L5,-35 L0,-30 Z" fill="#000"/>
                    </g>
                    <g transform="rotate(270)">
                      <path d="M0,-40 L-8,-50 L8,-50 Z" fill="#000"/>
                      <circle cx="0" cy="-45" r="3" fill="#000"/>
                      <path d="M-5,-35 L5,-35 L0,-30 Z" fill="#000"/>
                    </g>
                    
                    {/* Bull */}
                    <g transform="translate(-30, 20) rotate(-30)">
                      <ellipse cx="0" cy="0" rx="8" ry="4" fill="#000"/>
                      <path d="M-8,-2 L-12,-4 L-8,-6 Z" fill="#000"/>
                      <path d="M8,-2 L12,-4 L8,-6 Z" fill="#000"/>
                    </g>
                    
                    {/* Horse */}
                    <g transform="translate(30, 20) rotate(30)">
                      <ellipse cx="0" cy="0" rx="8" ry="4" fill="#000"/>
                      <path d="M-8,-2 L-12,-4 L-8,-6 Z" fill="#000"/>
                      <path d="M8,-2 L12,-4 L8,-6 Z" fill="#000"/>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="motto">
                <p>सत्यमेव जयते</p>
                <p className="motto-english">Truth Alone Triumphs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GEMSection;

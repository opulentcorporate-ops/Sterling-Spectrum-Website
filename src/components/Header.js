import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const companyName = 'STERLING SPECTRUM';
    let index = 0;
    
    const typeText = () => {
      if (index < companyName.length) {
        setTypedText(companyName.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    };

    const interval = setInterval(() => {
      if (!isTyping) {
        setTypedText('');
        setIsTyping(true);
        index = 0;
        typeText();
      }
    }, 5000);

    typeText();

    return () => clearInterval(interval);
  }, [isTyping]);

  // Scroll effect for glass header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/SterlingSpectrum.png" alt="Sterling Spectrum" className="logo-img" />
            <div className="company-name">
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="mailto:info.sterlingspectrum@gmail.com?subject=Quote Request - Reaching out from your website&body=Hello Sterling Spectrum Team,%0D%0A%0D%0AI am interested in getting a quote for your corporate supply services.%0D%0A%0D%0APlease provide details about:%0D%0A- Services needed:%0D%0A- Quantity/Volume:%0D%0A- Timeline:%0D%0A- Any specific requirements:%0D%0A%0D%0AThank you for your time.%0D%0A%0D%0ABest regards," 
              className="btn btn-primary nav-cta" 
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

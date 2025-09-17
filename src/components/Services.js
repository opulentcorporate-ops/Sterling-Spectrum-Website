import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  const addToRefs = useScrollAnimation();
  const services = [
    {
      id: 1,
      title: 'Printing Services',
      description: 'Professional printing services for all your business needs including business cards, letterheads, brochures, flyers, banners, and marketing materials. We offer high-quality digital and offset printing with fast turnaround times and competitive pricing.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M17,12H7V10H17V12M15,16H7V14H15V16M17,8H7V6H17V8Z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Corporate Gifting',
      description: 'Premium corporate gifting solutions designed to strengthen business relationships and show appreciation to clients and employees. We offer customized gift sets, branded merchandise, luxury items, and seasonal corporate gifts with professional packaging and delivery.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,18.77L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Computer Hardware',
      description: 'Complete range of computer hardware solutions including desktop computers, laptops, servers, processors, motherboards, RAM, storage devices, and networking equipment. We provide both new and refurbished hardware with warranty and technical support.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Computer Peripherals',
      description: 'Wide selection of computer peripherals and accessories including keyboards, mice, monitors, webcams, speakers, printers, scanners, and other essential office equipment. All products come with manufacturer warranty and our expert installation support.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2 2,6.48 2,12S6.48,22 12,22 22,17.52 22,12 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12S7.59,4 12,4 20,7.59 20,12 16.41,20 12,20M12,6C8.69,6 6,8.69 6,12S8.69,18 12,18 18,15.31 18,12 15.31,6 12,6M12,8C9.79,8 8,9.79 8,12S9.79,16 12,16 16,14.21 16,12 14.21,8 12,8Z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Office Supply/ Stationery',
      description: 'Complete range of office supplies and stationery including pens, notebooks, folders, binders, paper products, desk organizers, and all essential office materials. We maintain large inventory for bulk orders and provide regular delivery services to keep your office well-stocked.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M17,12H7V10H17V12M15,16H7V14H15V16M17,8H7V6H17V8Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-header animate-on-scroll" ref={addToRefs}>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to meet all your corporate supply needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card animate-scale-in`} ref={addToRefs} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-cta animate-fade-in-left" ref={addToRefs}>
          <h3>Need Help Choosing?</h3>
          <p>Our team is here to help you find the perfect solutions for your business needs.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/919211738770" className="btn btn-primary whatsapp-cta" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Us
            </a>
            <a href="tel:+919211738770" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

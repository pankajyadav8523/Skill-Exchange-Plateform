import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Skills Exchange', description: 'Connect and exchange skills with others.' },
    { title: 'Workshops', description: 'Join workshops to enhance your skills.' },
    { title: 'Mentorship', description: 'Learn from experienced mentors.' },
  ];

  return (
    <section id="services" className="services">
      <h2>What We Offer</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import './index.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <h1>Our Services</h1>
        <div className="service">
          <h2>Personalized Budget Planning</h2>
          <p>We help you create a customized budget plan for your travels, ensuring you can enjoy your trip without financial stress.</p>
        </div>
        <div className="service">
          <h2>Expense Tracking</h2>
          <p>Track all your travel expenses in real-time with our easy-to-use tracking tools. Stay on top of your budget wherever you are.</p>
        </div>
        <div className="service">
          <h2>Cost-saving Tips</h2>
          <p>Receive expert advice and tips on how to save money on flights, accommodations, and other travel-related expenses.</p>
        </div>
        <div className="service">
          <h2>Financial Consultation</h2>
          <p>Get one-on-one financial consultation with our experts to make the most out of your travel budget.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

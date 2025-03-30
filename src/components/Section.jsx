import React from 'react';
import Hero from './Hero';
import "../styles/section.css";

const Section = () => {
  return (
    <div>
      <Hero />
      <section className="info-section">
        <div className="info-container" id='about' >
          <h2>Why Choose Us?</h2>
          <p>
            We provide the best services to help you achieve your goals. Whether you're looking for expert guidance, high-quality products, or seamless experiences, we've got you covered.
          </p>
          <div className="features">
            <div className="feature-card">
              <h3>Quality Service</h3>
              <p>We prioritize quality and customer satisfaction in everything we do.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Our team is available around the clock to assist you with any issues.</p>
            </div>
            <div className="feature-card">
              <h3>Secure & Reliable</h3>
              <p>Your data and transactions are safe with our top-notch security measures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;

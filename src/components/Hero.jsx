import React from 'react';
import "../styles/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome To Our Page</h1>
                <p>
                    Discover amazing features, explore our services, and take the first step towards a better experience. Join us today and make the most out of what we offer.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

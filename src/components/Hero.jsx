import React, { useContext } from 'react';
import "../styles/hero.css";
import { EmployeeContext } from '../contexts/EmployeeContext.jsx';
const Hero = () => {
    const { employee } = useContext(EmployeeContext);
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome {employee?.name}</h1>
            </div>
        </section>
    );
};

export default Hero;

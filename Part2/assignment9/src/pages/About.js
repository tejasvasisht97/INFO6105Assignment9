// src/pages/About.js
import React from 'react';
import Card from '../Components/Card';
import '../styles.css';

const About = () => {
  const aboutCardData = {
    title: 'About Us Card',
    description: 'Learn more about our company.',
    content: (
      <div>
        <p>We are a passionate team dedicated to delivering high-quality products and services.</p>
        <p>Our mission is to make a positive impact in the world through innovation and excellence.</p>
      </div>
    ),
  };

  return (
    <div className="card-container">
      <Card title={aboutCardData.title} description={aboutCardData.description} content={aboutCardData.content} />
    </div>
  );
};

export default About;

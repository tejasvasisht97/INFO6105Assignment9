// src/pages/Contact.js
import React from 'react';
import Card from '../Components/Card';
import '../styles.css';

const Contact = () => {
  const contactCardData = {
    title: 'Contact Us Card',
    description: 'Get in touch with us.',
    content: (
      <div>
        <p>Have questions or feedback? Contact our support team for assistance.</p>
        <p>Email: support@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    ),
  };

  return (
    <div className="card-container">
      <Card title={contactCardData.title} description={contactCardData.description} content={contactCardData.content} />
    </div>
  );
};

export default Contact;




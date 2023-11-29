// src/pages/Home.js
import React from 'react';
import Card from '../Components/Card';
import '../styles.css';

const Home = () => {
  const cardsData = [
    {
      title: 'Welcome Card',
      description: 'Welcome to our website!',
      content: 'Explore what we have to offer. Check out our services and latest products.',
    },
    {
      title: 'Featured Product',
      description: 'Discover our featured product of the month.',
      content: (
        <img
          src="https://via.placeholder.com/200x150"
          alt="Featured Product"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      ),
    },
    // Add more cards as needed
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} content={card.content} />
      ))}
    </div>
  );
};

export default Home;


// src/pages/Jobs.js
import React from 'react';
import Card from '../Components/Card';
import '../styles.css';

const Jobs = () => {
  const jobsCardData = {
    title: 'Jobs Card',
    description: 'Explore job opportunities with us.',
    content: (
      <div>
        <p>We are always looking for talented individuals to join our team.</p>
        <p>Check our current job openings and apply now!</p>
      </div>
    ),
  };

  return (
    <div className="card-container">
      <Card title={jobsCardData.title} description={jobsCardData.description} content={jobsCardData.content} />
    </div>
  );
};

export default Jobs;


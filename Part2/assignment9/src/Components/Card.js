// src/components/Card.js
import React from 'react';
import '../styles.css';

const Card = ({ title, description, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
        {content && <div className="card-content">{content}</div>}
      </div>
    </div>
  );
};

export default Card;

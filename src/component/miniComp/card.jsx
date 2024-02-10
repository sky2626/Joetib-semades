
import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <>
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;


import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <>
      <img className='h-36 w-36' src={imageSrc} alt={title} />
      <div className="card-content">
        <h2 className='text-white text-center'>{title}</h2>
        <p className='text-slate-500 text-center'>{description}</p>
      </div>
    </>
  );
};

export default Card;

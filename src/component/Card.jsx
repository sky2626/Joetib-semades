
import React from "react";


const Card = ({ imageSrc, title, description }) => {
  return (
    <div className='flex flex-col p-6 items-center justify-center'>
      <img className='h-32 md:h-16' src={imageSrc} alt={title} />
      <div className="pt-3">
        <h2 className='text-white text-center font-bold font-Cascadia'>{title}</h2>
        <p className='text-slate-600 text-center font-Cascadia'>{description}</p>
      </div>
    </div>
  );
};

export default Card;


import React from "react";


const AbCard = ({ imageSrc, name, title }) => {
  return (
    <div className='flex flex-col p-6 items-center justify-center'>
      <img className='h-32 md:h-16' src={imageSrc} alt={name} />
      <div className="pt-3">
        <h2 className='text-white text-center font-bold font-Cascadia'>{name}</h2>
        <p className='text-slate-600 text-center font-Cascadia'>{title}</p>
      </div>
    </div>
  );
};

export default AbCard;

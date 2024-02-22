import React from 'react';

const AbCardX = ({ imageSrc, name, title }) => {
    return (
      <div className='flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row'>
        <img className='w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' 
        src={imageSrc} 
        alt={name} />
        <div className="pt-3">
          <h5 
          className='mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 font-Cascadia'>{name}</h5>
          <p className='text-slate-600 text-center font-Cascadia'>{title}</p>
        </div>
      </div>
    );
  };
  
  export default AbCardX;
  
import React from 'react';

const AbCardX = ({ imageSrc, title, description }) => {
    return (
        <div className='flex flex-col rounded-lg items-center md:items-start gap-2 md:gap-8 md:flex-row'>
            <img className='h-auto w-48 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg' 
            src={imageSrc} 
            alt={title} />
            <div className="p-2 items-center md:items-start">
                <h5 
                className='mb-1 text-xl font-medium text-white font-Cascadia'>
                    {title}
                </h5>
                <p 
                className='text-slate-600 '>
                    {description}
                </p>
            </div>
        </div>
    );
  };
  
export default AbCardX;
  
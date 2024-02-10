import { useState } from 'react';

export default function Home(){
    const [showMore, setShowMore] = useState(false);
    
    function handleMoreClick() {
        setShowMore(!showMore);
      }
    
    return(
        <div className="bg-pro-200 ">
           {/*  Hero section */}
            <div 
            className="bg-gradient-to-l from-pro-300 flex flex-col md:flex-row gap-1" >
                <div className="flex flex-col justify-center p-12 md:pl-28 ">
                    <h1 
                    className="text-5xl text-white align-middle gap-2 font-bold ">
                        We are <span 
                        className="text-pro-100">
                            Creative </span>and<br /> <spanm 
                        className="text-pro-100" >
                            Innovative </spanm>developers
                    </h1>      
                    <button
                    onClick={handleMoreClick}
                    className="text-white bg-pro-100 h-10 rounded-lg mt-10 md:w-120 text-semibold">
                        {showMore ? 'Hide' : 'Show'} details
                    </button>
                    {showMore && 
                    <p 
                    className='bg-pro-300 mt-0 p-4 text-white rounded-lg md:w-120 '>
                        Tackling a wide range of global issues is our main core focus. Education,Bussiness, Human Rights, Poverty Alleviation, Global Connectivity, and health fall in our scope.</p>}
                </div>
                <img className="hidden md:block md:pl-64 md:h-120 md:pt-2" src="./src/assets/globe.svg" alt="svg of globe" />
            </div>
            <div className='bg-black '>
                <div className="">
                    <h1 className='text-pro-100 font-semibold '>Our Services</h1>
                </div>
                <div className="">

                </div>

            </div>
        </div>
    );
}
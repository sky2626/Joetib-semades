import { useState } from 'react';

export default function Home(){
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(true);
    
    function handleMoreClick() {
        setShowMore(!showMore);
      }
    function handleMoreClick2() {
        setShowMore2(!showMore2);
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
                <div className="flex justify-center flex-col p-12">
                    <h2 className='text-pro-100 font-semibold text-center md:text-start text-2xl'>
                        Our Services
                    </h2>
                    <h1 className='text-white font-semibold text-center md:text-start text-5xl '>
                        What we <span className='text-pro-100'>do</span>
                    </h1>
                    <div className='bg-pro-100 rounded-sm h-2 w-20 ml-12 mt-1'></div>
                    <button
                    onClick={handleMoreClick2}
                    className="text-white bg-pro-100 h-10 w-24 rounded-lg mt-10 md:w-120 text-semibold">
                        {showMore2 ? 'Hide' : 'Show'} details
                    </button>
                    {showMore2 &&
                    <p className='bg-pro-300 mt-0 p-4 text-white rounded-lg md:w-120 '>
                        web development encompasses the creation of websites and web applications, involving front-end, back-end, databases, and hosting.
                        Cloud infrastructure and services to create, deploy, and manage applications with advantages such as scalability, cost efficiency, 
                        and flexibility. Machine learning is a subset of artificial intelligence (AI) that focuses on creating algorithms and models that 
                        enable computers to learn from data and make predictions or decisions without explicit programming.
                    </p>}
                </div>
                <div className="">

                </div>

            </div>
        </div>
    );
}
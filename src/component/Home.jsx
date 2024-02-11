import { useState } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import Card from './miniComp/card';



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

           {/*  our services */}
            <div 
            className='bg-black flex p-12 flex-col md:flex-row'>
                <div 
                className="md:w-1/2 flex-col">
                    <h2 
                    className='text-pro-100 font-semibold text-center md:text-start text-2xl'>
                        Our Services
                    </h2>
                    <h1 
                    className='text-white font-semibold text-center md:text-start text-5xl '>
                        What we <span className='text-pro-100'>do</span>
                    </h1>
                    <div className='bg-pro-100 rounded-sm h-2 w-20 ml-12 mt-1'></div>
                    <p className='bg-pro-300 mt-8 p-4 text-white rounded-lg md:w-120 '>
                        web development encompasses the creation of websites and web applications, involving front-end, back-end, databases, and hosting.
                        Cloud infrastructure and services to create, deploy, and manage applications with advantages such as scalability, cost efficiency, 
                        and flexibility. Machine learning is a subset of artificial intelligence (AI) that focuses on creating algorithms and models that 
                        enable computers to learn from data and make predictions or decisions without explicit programming.
                    </p>
                    <Link 
                    to='/services' 
                    className='bg-pro-100 text-white p-2 rounded-lg mt-2 text-center '>
                        learn more
                    </Link>
                </div>
                
                <div 
                className="md:w-1/2 ">
                    <div 
                    className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
                        <div className="bg-pro-200 w-62 md:w-56 rounded-lg">
                            <Card
                                imageSrc="./src/assets/web.svg"
                                title="Web Development"
                                description="This is a sample card description." 
                            />
                        </div>
                        <div className="bg-gradient-to-t from-pro-300 to-pro-200 w-62 md:w-56 rounded-lg">
                            <Card
                                imageSrc="./src/assets/ai.svg"
                                title="Artificial Intelligence"
                                description="This is a sample card description." 
                            />
                        </div>
                        <div className="bg-gradient-to-t from-pro-300 to-pro-200 w-62 md:w-56 rounded-lg">
                            <Card
                                imageSrc="./src/assets/cloud.svg"
                                title="Cloud DevEng"
                                description="This is a sample card description." 
                            />
                        </div>
                        <div className="bg-pro-200 w-62 md:w-56 rounded-lg">
                            <Card
                                imageSrc="./src/assets/ui.svg"
                                title="UI/UX Design"
                                description="This is a sample card description." 
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
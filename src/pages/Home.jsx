import { useState } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import Card from '../component/Card';
import Footer from '../component/Footer'





export default function Home(){
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return(
        <div className="bg-pro-200 ">
            
           {/*  Hero section */}
            <div 
            className="bg-gradient-to-l from-pro-300 to-pro-200 flex flex-col md:flex-row gap-1" >
                <div className="flex flex-col justify-center px-8 py-12 md:pl-28 ">
                    <h1 
                    className="text-6xl md:text-7xl text-white align-middle gap-2 font-bold">
                        We are <span 
                        className="text-pro-100">
                            Creative </span>and<br /> <spanm 
                        className="text-pro-100" >
                            Innovative </spanm>developers
                    </h1>      
                    <button
                    onClick={handleMoreClick}
                    className="text-white bg-pro-100 h-10 rounded-lg mt-10 md:w-120 text-semibold font-Cascadia">
                        {showMore ? 'Hide' : 'Show'} details
                    </button>
                    {showMore && 
                    <p 
                    className='bg-pro-300 mt-0 p-4 text-white rounded-lg md:w-120 '>
                        Tackling a wide range of global issues is our main core focus. Education,Bussiness, Human Rights, Poverty Alleviation, Global Connectivity, and health fall in our scope.</p>}
                </div>
                <img className="hidden md:block max-w-full items-end md:pl-64 md:overflow-hidden md:h-120 md:pt-2" src="./src/assets/globe.svg" alt="svg of globe" />
            </div>

           {/*  our services */}
            <div 
            className='bg-black flex px-8 py-20 md:pl-28 flex-col md:flex-row'>
                <div 
                className="md:w-1/2 flex-col flex gap-3">
                    <h2 
                    className='text-pro-100 font-semibold text-center md:text-start text-2xl font-Cascadia'>
                        Our Services
                    </h2>
                    <h1 
                    className='text-white font-semibold text-center md:text-start text-5xl font-Cascadia'>
                        What we <span className='text-pro-100'>do</span>
                    </h1>
                    <div 
                    className='bg-pro-100 rounded-sm h-2 w-20 ml-12 md:ml-0'></div>
                    <p 
                    className='bg-pro-300 p-4 text-white rounded-lg md:w-96 '>
                        web development encompasses the creation of websites and web applications, involving front-end, back-end, databases, and hosting.
                        Cloud infrastructure and services to create, deploy, and manage applications with advantages such as scalability, cost efficiency, 
                        and flexibility. Machine learning is a subset of artificial intelligence (AI) that focuses on creating algorithms and models that 
                        enable computers to learn from data and make predictions or decisions without explicit programming.
                    </p>
                    <Link 
                    to='/services' 
                    className='bg-pro-100 text-white p-2 rounded-lg mt-2 text-center md:w-96 font-Cascadia'>
                        learn more
                    </Link>
                </div>
                
                <div 
                className="md:w-1/2 mt-10">
                    <div 
                    className="grid gap-6 grid-cols-1 md:grid-cols-2 md:overflow-hidden ">
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

            {/* about us */}
            <div 
            className="px-8 py-12 md:p-24 flex flex-row gap-16">
                <img className='hidden md:block h-68 ' src="./src/assets/about.svg " alt="img of about" />
                <div className="flex gap-2 flex-col items-center justify-center md:justify-start md:items-start">
                    <h2 className='text-white font-semibold text-2xl font-Cascadia'>
                        About us
                    </h2>
                    <h1 className='text-white font-semibold text-3xl md:text-5xl  font-Cascadia'>
                     We Use <span className='text-pro-100 font-semibold text-3xl md:text-5xl '> Creativity</span> to Get Our Clients. 
                    </h1>
                    <div className='bg-pro-100 rounded-sm h-2 w-20'></div>
                    <p className='text-white mt-2 '>
                        startups play a crucial role in driving innovation, economic growth, and job creation. 
                        They are dynamic, adaptable, and often at the forefront of technological advancements, 
                        making them a focal point of interest in the business world and beyond.
                    </p>
                    <div className='flex gap-10'>
                        <aCard 
                            imageSrc="./src/assets/cleanCode.svg"
                            title="Clean code"
                            description="Industry standard codes only." 
                        />
                        <aCard 
                            imageSrc="./src/assets/morden.svg"
                            title="Morden trend"
                            description="Modern standard projects only." 
                        />
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <div 
            className='bg-black flex py-16 justify-center items-center md:gap-24 md:overflow-hidden'>
                <div class="container p-8 bg-pro-300 rounded-md shadow-md max-w-md">
                    <h1 class="text-2xl font-semibold mb-6 text-slate-400">Contact Us</h1>
                    <form action="mailto:semades@mail.com" method="post">
                        <label class="block text-slate-400 text-sm font-bold mb-2" for="name">Name:</label>
                        <input class="w-full bg-pro-300 p-2 border border-slate-500 text-slate-400 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" id="name" name="name" required />
                        <label class="block text-slate-400 text-sm font-bold mb-2" for="email">Email:</label>
                        <input class="w-full bg-pro-300 p-2 border border-slate-500 text-slate-400 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" id="name" name="name" required />
                        <label class="block text-slate-400 text-sm font-bold mb-2" for="message">Message:</label>
                        <textarea class="w-full bg-pro-300 p-2 border border-slate-500 text-slate-400 rounded-md  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" id="message" name="message" rows="4" required></textarea>
                        <button class="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700" type="submit">Submit</button>
                    </form>
                </div>
                <div className='flex justify-center items-center h-80'>
                    <img className='hidden md:block h-64 md:overflow-hidden' src="./src/assets/support.svg " alt="img of support" />  
                </div>
                
            </div> 

            {/* donate */}
            <div 
            className='bg-gradient-to-l from-pro-300 flex items-center gap-4 p-4 md:justify-between md:gap-32 lg:gap-52 md:px-24 md:py-9 flex-col md:flex-row'>
                <h2 className='text-2xl font-semibold text-slate-400 font-Cascadia'>Donate</h2>
                <div className='text-white flex gap-10 '>
                    <a href="#" 
                    className='hover:bg-pro-200 rounded-lg p-4'>
                        <img className='h-10 md:h-16' src="./src/assets/paypal.svg" alt="img of paypal" />
                    </a>
                    <a href="#"
                    className='hover:bg-pro-200 rounded-lg p-4'>
                        <img className='h-14 md:h-16' src="./src/assets/bitcoin.svg" alt="image of paypal" />
                    </a>
                    
                    
                </div>
            </div>

            {/*  foote r */}
            <Footer />
        </div>
    );
}
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

  return(
    <nav className="bg-pro-200 flex  flex-row  justify-between p-2 md:px-10">
      <Link to='/' className="flex gap-1">
        <img 
        className="h-14 w-10" 
        src="./src/assets/Semades.png" 
        alt="img of semades" />
        <div className="flex text-white flex-col font-Cascadia">
          Sema 
          <span className="text-pro-100">Des</span>
        </div>
      </Link>
      
      <ul className="hiden md:flex md:flex-row md:gap-6 md:p-3 "> 
        <li>
          <Link to='/' className="font-Cascadia font-semibold text-white hover:text-pro-100 ">Home</Link>
        </li>
        <li>
          <Link to='/about' className="font-Cascadia font-semibold text-white hover:text-pro-100">About</Link>
        </li>
        <li>
          <Link to='/services' className="font-Cascadia font-semibold text-white hover:text-pro-100">Services</Link>
        </li>
        <li>
          <Link to='/contact' className="font-Cascadia font-semibold text-white hover:text-pro-100">Contact</Link>
        </li>
      </ul>
                
    </nav>
        
  );
}


import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

  return(
    <nav className="flex  flex-row  justify-between">
      <Link to='/' className="flex ">
        <img 
        className="h-12 w-12" 
        src="./src/assets/Semades.png" 
        alt="img of semades" />
        <div className="flex flex-col font-Cascadia">
          Sema 
          <span>Des</span>
        </div>
      </Link>
      
      <ul className="flex flex-row gap-6"> 
        <li>
          <Link to='/' className="font-Cascadia font-semibold text-black hover:text-pro-100 ">Home</Link>
        </li>
        <li>
          <Link to='/about' className="font-Cascadia font-semibold text-black hover:text-pro-100">About</Link>
        </li>
        <li>
          <Link to='/services' className="font-Cascadia font-semibold text-black hover:text-pro-100">Services</Link>
        </li>
        <li>
          <Link to='/contact' className="font-Cascadia font-semibold text-black hover:text-pro-100">Contact</Link>
        </li>
      </ul>
                
    </nav>
        
  );
}


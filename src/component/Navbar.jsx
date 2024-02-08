import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

  return(
    <nav className="flex  flex-row  ">
      <Link to='/' className="flex ">
        
        <img 
        className="h-10 w-10" 
        src="./src/assets/Semades.png" 
        alt="img of semades" />

        Sema 
        <span>Des</span>
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


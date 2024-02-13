import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState} from "react";


export default function Navbar(){

  const New = () => {
    coonst [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
    setIsOpen(!isOpen);
    }



  return(
    <nav 
    className="bg-pro-200 flex  flex-row  justify-between  md:px-28">
      <Link to='/' 
      className="flex items-center justify-center pl-6 gap-1">
        <img 
        className="h-8" 
        src="./src/assets/Semades.png" 
        alt="img of semades" />
        <div 
        className="flex text-pro-100 py-3 font-semibold font-Cascadia">
          Sema 
          <span 
          className="text-white font-semibold">des</span>
        </div>
      </Link>
      
      <ul 
      className="hidden flex-row gap-6 p-3 "> 
        <li>
          <Link to='/' 
          className="font-Cascadia font-semibold text-white hover:text-pro-100 ">
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' 
          className="font-Cascadia font-semibold text-white hover:text-pro-100">
            About
          </Link>
        </li>
        <li>
          <Link to='/services' 
          className="font-Cascadia font-semibold text-white hover:text-pro-100">
            Services
          </Link>
        </li>
        <li>
          <Link to='/contact' 
          className="font-Cascadia font-semibold text-white hover:text-pro-100">
            Contact
          </Link>
        </li>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </ul>
                
    </nav>
        
  );
}
}

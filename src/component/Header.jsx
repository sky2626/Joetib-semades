import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
/* import Nav from "./Nav"; */


export default function Navbar(){
 
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
      {/* <Nav /> */}         
    </nav>
        
  );
}


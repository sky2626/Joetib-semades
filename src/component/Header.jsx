import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import Nav from "./Nav";
import BtnMenu from "./BtnMenu";


export default function Navbar(){
 
  return(
    <nav 
    className="bg-pro-200 flex justify-between flex-row md:justify-between  md:px-28">
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
      <div className="flex flex-row">
        <div className="hidden w-full p-5 justify-end md:flex">
          <Nav /> 
        </div>
        <div className="md:hidden  flex py-4 pr-4 text-white justify-end">
          <button>
            
          </button>
          heat
        </div>
      </div>
      
    </nav>
    
        
  );
};


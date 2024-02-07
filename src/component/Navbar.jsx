import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

    return(
        <nav className=" ">
            <ul>
              <li>
                <Link className="font-Cascadia text-black hover:text-pro-100 ">Home</Link>
              </li>
              <li>
                <Link className="font-Cascadia">About</Link>
              </li>
              <li>
                <Link className="font-Cascadia">Services</Link>
              </li>
              <li>
                <Link className="font-Cascadia">Contact</Link>
              </li>
            </ul>
                
        </nav>
    );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav className='flex justify-between items-center md:px-24 bg-pro-200 nav'>
      <Link to='/' 
      className="flex items-center justify-center px-4 gap-1 hover:bg-pro-300 hover:rounded-lg">
        <img 
        className="h-8" 
        src="./src/assets/Semades.png" 
        alt="img of semades" />
        <div 
        className="flex text-pro-100 py-3 font-semibold font-Cascadia  ">
          Sema 
          <span 
          className="text-white font-semibold">des</span>
        </div>
      </Link>
      <ul className='hidden  md:flex gap-4 '>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100 focus:text-pro-100' 
        to='/'>
          <li>Home</li>
        </Link>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100 focus:text-pro-100' 
        to='/about'>
          <li>About</li>
        </Link>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100 focus:text-pro-100' 
        to='/services'>
          <li>Services</li>
        </Link>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100 focus:text-pro-100' 
        to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
      {/* menu */}
      <div className=' md:hidden z-10 text-pro-100 pr-8' onClick={handleClick}>
        {nav ? <MdClose size={32} color='white' /> : <FiMenu size={32}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-pro-200/90 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100' 
        to='/'>
          <li>Home</li>
        </Link>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100' 
        to='/about'>
          <li>About</li>
        </Link>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100' 
        to='/services'>
          <li>Services</li>
        </Link>
        <Link
        className='font-Cascadia font-semibold text-white px-4 hover:text-pro-100' 
        to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
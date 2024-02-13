import { Link } from 'react-router-dom'

export default function Nav(){
    return( 
    <>
        <Link to='/' 
        className="font-Cascadia font-semibold text-white px-4 hover:text-pro-100 ">
            Home
        </Link>
        <Link to='/about' 
        className="font-Cascadia font-semibold text-white px-4 hover:text-pro-100">
            About
        </Link>
        <Link to='/services' 
        className="font-Cascadia font-semibold text-white px-4 hover:text-pro-100">
            Services
        </Link>
        <Link to='/contact' 
        className="font-Cascadia font-semibold text-white px-4 hover:text-pro-100">
            Contact
        </Link>   
    </>
    )
}
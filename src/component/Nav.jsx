import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <ul 
        className="flex-row gap-6 p-3 "> 
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
        </ul>

    )
}
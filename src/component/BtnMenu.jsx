import{ useState } from "react"
import Nav from "./Nav";

export default function Btn() {
    coonst [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
    
    return(
        <div className="">
            <button 
            onClick={toggleMenu}
            className="">
                {isOpen ? <img src="./assets/close.svg" alt="close svg"/> : <img src="./assets/menu.svg" alt="menu svg" />}
            </button>
            {isOpen &&
            <Nav />}
        </div>
    )
}
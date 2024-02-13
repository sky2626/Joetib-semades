import{ useState } from "react"
import Nav from "./Nav";
import { Menu,X } from "lucide-react";

export default function Btn() {
    coonst [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
    
    return(
        <div className="md:hidden">
            <button 
            onClick={toggleMenu}
            className="">
                {isOpen ? <Menu /> : <X />}
            </button>
        </div>
    )
}
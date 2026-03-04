import { useState } from "react"
import Logo from '../assets/IrokoLG.png'
import Button from "./Button"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed left-3 right-3 h-[100px] bg-black z-50 rounded-tr-2xl rounded-tl-2xl">
                    
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between mr-6">

        <div className="font-bold text-xl">
          <img src={Logo} alt="Logo" className="w-20 h-20 md:w-22 md:h-22"/>
        </div>

        {/* Desktop */}
              
      <ul
              className={`
                absolute top-[72px] left-0 w-full shadow-md md:text-gray-400 
                flex flex-col items-center gap-6 py-6
                transition-all duration-300
                md:static md:flex-row md:shadow-none md:w-auto md:py-0
                ${open ? "block" : "hidden"} md:flex
              `}
            >
              <Link to="/"><li className="hover:text-white" onClick={() => setOpen(false)}>Home</li></Link>
              <Link to="/about"><li className="hover:text-white" onClick={() => setOpen(false)}>About</li></Link>
              <Link to="/fleet"><li className="hover:text-white" onClick={() => setOpen(false)}>Fleet</li></Link>
              <Link to="/contact"><li className="hover:text-white" onClick={() => setOpen(false)}>Contact</li></Link>
               
            </ul>
             
        
        {/* Mobile Button */}
            <button
              className="md:hidden text-white hover:text-[#CFCA11] 
              focus:outline-none focus:none focus:ring-iroko 
              transition-colors duration-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
            <Link to="/contact"><Button shape="pill" variant="latest">Reserve</Button></Link>
      </div>

      {/* Mobile Menu */}
      {open && (
            <div className="flex flex-col md:hidden absolute top-[80px] right-4 w-52 bg-black text-lg text-white px-8 py-8 space-y-6 shadow-2xl rounded-sm opacity-95 border border-white">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/fleet" onClick={() => setOpen(false)}>Fleet</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>      
      )}
    </nav>
  )
}

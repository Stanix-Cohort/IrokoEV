import { useState } from "react"
import Logo from '../assets/IrokoLG.png'
import Button from "./Button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full h-[72px] bg-white shadow z-50">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6">

        <div className="font-bold text-xl">
          <img src={Logo} alt="Logo" className="w-14 h-14 md:w-22 md:h-22"/>
        </div>

        {/* Desktop */}
      <ul
              className={`
                absolute top-[72px] left-0 w-full bg-white shadow-md
                flex flex-col items-center gap-6 py-6
                transition-all duration-300
                md:static md:flex-row md:shadow-none md:w-auto md:py-0
                ${open ? "block" : "hidden"} md:flex
              `}
            >
              <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#fleet" onClick={() => setOpen(false)}>Fleet</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>

         <a href="#fleet" className="hidden md:block"><Button>Reserve</Button></a>

        
        {/* Mobile Button */}
            <button
              className="md:hidden text-black hover:text-iroko 
              focus:outline-none focus:ring-2 focus:ring-iroko 
              transition-colors duration-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
      </div>

      {/* Mobile Menu */}
      {open && (
            <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#fleet" onClick={() => setOpen(false)}>Fleet</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
      )}
    </nav>
  )
}

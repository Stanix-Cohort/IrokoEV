import Logo from '../assets/IrokoLG.png'
import facebook from '../assets/Facebook.png'
import twitter from '../assets/Twitter.png'
import instagram from '../assets/Instagram.png'
import linkedin from '../assets/Linkedin.png'
import { Link } from "react-router-dom";

import Button from './Button'

const Home = () => {
  return (
    <section
      id="footer"
      className="min-h-screen pt-12.5 flex items-center justify-center"
    >
      <div className="max-w-360 w-full min-h-screen mx-auto flex flex-col justify-center items-center gap-8  bg-black text-white px-2 sm:px-2">
        <div className="relative z-10 flex flex-col items-start md:flex-row border-b pb-6 border-gray-600 justify-evenly gap-12 px-1 sm:px-2">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex md:flex-col items-center gap-4">
              <img
                src={Logo}
                alt="Iroko Logo"
                className="w-25 h-25 object-contain"
              /> 
             </div>
            <div className="flex flex-col gap-4">              
                <p>Level 12, 450 Collins Street, <br /> Melbourne VIC 3000</p>
                <p>1800 LUXIVOLT <br />hello@luxivolt.com</p>
            </div>
            <div className="flex flex-col gap-2">
                 <span>Categories</span>
             <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>About</span></Link>
                 <Link to="/fleet"><span>Fleet</span></Link>
                 <Link to="/contact"><span>Contact</span></Link>
                 <Link to="/indoor"><span>Indoor</span></Link>
            </div>           
            <div className="flex flex-col gap-2">
              <Link to="/policy"><span>Privacy policy</span></Link>
              <Link to="/terms"><span>Terms of service</span></Link>
               <Link to="/cookie"><span>Cookie settings</span></Link>
            </div>
      </div>
      <div>
              <div className="flex flex-col gap-2">
                     <span>Subscribe Now</span>
            <div>
              <input type="text"className="bg-gray-600 px-4 py-1" placeholder="your email" />
       <Link to="/thanks"><button className="bg-[#CFCA11] px-4 py-1 rounded-r-md font-bold hover:bg-white text-black transition">
                  Submit
                </button></Link>
              {/* <button>Submit</button> */}
            </div>
            <div className="flex items-center gap-4 mt-4 ">
              <Link to="https://www.facebook.com/login" target="_blank">
                <span>
                  <img src={facebook} alt="Facebook" className="w-6 h-6 hover:scale-120"  />
                </span>
              </Link>
              <Link to="https://twitter.com/login" target="_blank">
                <span>
                  <img src={twitter} alt="Twitter" className="w-6 h-6 hover:scale-120" />
                </span>
              </Link>
              <Link to="https://www.instagram.com/login" target="_blank">
                <span>
                  <img src={instagram} alt="Instagram" className="w-6 h-6 hover:scale-120" />
                </span>
              </Link>
              <Link to="https://www.linkedin.com/login" target="_blank">
                <span>
                  <img src={linkedin} alt="Linkedin" className="w-6 h-6 hover:scale-120" />
                </span>
              </Link>
            </div>
              </div>
            
          </div>
        </div>
        <div className="relative z-0 mt-9.75 hidden md:block border-">
             <h1 className="md:text-lg text-center">
          © 2026 IrokoEV Inc. All rights reserved  
        </h1>
        </div>
        
      </div>
    </section>
  )
}

export default Home
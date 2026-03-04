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
      className="min-h-screen pt-[50px] flex items-center justify-center"
    >
      <div className="max-w-[1440px] w-full min-h-screen mx-auto bg-black text-white px-6">
        <div className="relative z-10 flex flex-col items-start md:flex-row justify-between items-center gap-8 px-1 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div>
               <img src={Logo} alt="Iroko Logo" className="w-[70px] h-[70px] object-contain" />
            </div>
            <div>
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
                  <span>Privacy olicy</span>
                  <span>Terms of service</span>
                  <span>Cookie settings</span>
            </div>
          </div>
          <div>
            <span>Subscribe Now</span>
            <div>
              <input type="text"className="bg-gray-600 px-4 py-1" placeholder="your email" />
              <button className="bg-[#CFCA11] px-4 py-1 rounded-r-md font-bold hover:bg-white text-black transition">
                  Submit
                </button>
              {/* <button>Submit</button> */}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span><img src={facebook} alt="Facebook" className="w-6 h-6" /></span>
              <span><img src={twitter} alt="Twitter" className="w-6 h-6" /></span>
              <span><img src={instagram} alt="Instagram" className="w-6 h-6" /></span>
              <span><img src={linkedin} alt="Linkedin" className="w-6 h-6" /></span>             
            </div>
          </div>
        </div>
        <div className="relative z-0 mt-[39px] hidden md:block">
             <h1 className="md:text-xl font-bold text-center">
          © 2026 Iroko Motors Inc. All rights reserved  
        </h1>
        </div>
        
      </div>
    </section>
  )
}

export default Home
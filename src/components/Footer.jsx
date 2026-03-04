import Logo from '../assets/IrokoLG.png'

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
                 <span>Home</span>
                 <span>About</span>
                 <span>Fleet</span>
                 <span>Contact</span>
                 <span>Indoor</span>
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
              <input type="text" placeholder="Enter your email" />
              <button>Submit</button>
            </div>
            <div>
              <span>icon fb</span>
              <span>icon twitter</span>
              <span>icon instagram</span>
              <span>icon linkedin</span>             
            </div>
          </div>
        </div>
        <div className="relative z-0 mt-[39px] hidden md:block">
             <h1 className="md:text-xl font-bold text-center">
          ©️2026 Iroko Motors Inc. All rights reserved  
        </h1>
        </div>
        
      </div>
    </section>
  )
}

export default Home
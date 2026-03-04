import Logo from '../assets/IrokoLG.png'

const Home = () => {
  return (
    <section
      id="footer"
      className="min-h-screen pt-[72px] flex items-center"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div>
               <img src={Logo} alt="Iroko Logo" className="w-32 h-16 object-contain" />
            </div>
            <div>
                <p>Level 12, 450 Collins Street, <br /> Melbourne VIC 3000</p>
                <p>1800 LUXIVOLT <br />hello@luxivolt.com</p>
            </div>
            <div>
                 <span>Categories</span>
                 <span>Home</span>
                 <span>About</span>
                 <span>Fleet</span>
                 <span>Contact</span>
                 <span>Contact</span>
                 <span>Indoor</span>
            </div>           
            <div>
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
        <h1 className="text-sm md:text-xl font-bold text-center">
          ©️2026 Iroko Motors Inc. All rights reserved  
        </h1>
      </div>
    </section>
  )
}

export default Home
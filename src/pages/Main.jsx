import React from 'react'
import heroImage from '../assets/HeroCar.png'
import Button from '../components/Button'
import { FaGreaterThan } from "react-icons/fa";
import irokoAir from '../assets/IrokoAir.png'
import irokoOnyx from '../assets/IrokoOnyx.png'
import performanceImage from '../assets/PerformanceImage.png'
import craftImage from '../assets/CraftImage.png'
import techImage from '../assets/TechImage.png'
import statusImage from '../assets/StatusImage.jpg'
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <div>
                     {/* matches  Navbar's constraints same padding for consistency*/}
         <div className="max-w-[1440px] mx-auto px-3 h-full">
            
                      {/* Hero Section */}
<div className="relative z-10 flex flex-col w-full">

               {/* Grid with overlay */}
               <div className="grid grid-cols-1">

               {/* HERO CONTAINER */}
               <div className="
                    relative w-full bg-black rounded-bl-2xl rounded-br-2xl overflow-hidden 
                    flex flex-col items-center justify-start
                    text-center
                    pt-10 pb-8 px-6 sm:px-8
                    min-h-[360px] md:min-h-[600px]
               ">

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col items-center gap-3 max-w-md">

                    {/* TOP TEXT */}
                    <p className="text-3xl md:text-4xl font-bold text-white inline-block">
                         The Future Moves in Silence.
                    </p>

                    {/* BOTTOM TEXT */}
                    <p className="text-gray-200 text-xs leading-relaxed drop-shadow-md">
                         IrokoEV builds vehicles that move with purpose and grace. Each model carries the weight of precision
                         engineering and the lightness of innovation.
                         
                    </p>

                    {/* BUTTON */}
                    <Link to="/fleet" className="hidden md:block">
                         <Button shape="pill" variant="latest">
                         Explore The Fleet
                         </Button>
                    </Link>
                         <Link to="/contact" className="block md:hidden">
                         <Button shape="pill" variant="latest">
                         Explore The Fleet
                         </Button>
                    </Link>
                    </div>

                    {/* IMAGE DESKTOP*/}
                    <img
                    src={heroImage}
                    alt="perform"
                    className="hidden md:block
                         absolute inset-0
                         w-full h-full
                         object-cover
                         object-[center_10%]
                         scale-[0.80]
                         md:scale-[0.80]  md:object-[center_-85%]  " />
                   
                   
                    {/* IMAGE MOBILE*/}
                    <img
                    src={heroImage}
                    alt="perform"
                    className="block md:hidden
                         absolute inset-0
                         w-full h-full
                         object-contain
                         object-[center_200%]
                         scale-[0.90] "  />                                    
               </div>
  </div>
</div>
                                 
           
                   
        

                                        {/* section about with 4 grid*/}
     <section className="mt-32">
              <div className="relative z-10 flex flex-col px-6 gap-4 w-full">
                    <div>
                         <div className="flex flex-col items-end justify-end text-end  w-full">
                             <p className="font-bold">Effortless performance, meticulous craftmanship,</p>
                              <p className="text-gray-400 font-bold">intuitive hidden technology, and understated prestige</p> 
                               <p className="text-gray-600 font-bold">combine to create a quietly confident luxury driving experience.</p><br />
                             
                                <Link to="/fleet"><Button shape="pill" variant="outlineGreen">Explore Fleet</Button></Link>
                         </div>

                                    {/* Grid with overlay to cover the image with the text */}
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                                            {/*added 'flex', 'flex-col', and 'min-h-[350px]' to the main parent wrapper */}
                                            {/* Grid Item Performance  */}
                          <div className="relative w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[300px] lg:min-h-[350px]">                                  
                                   
                                             {/* IMAGE ABSOLUTE: acts as a background that fills the parent */}
                                             <img 
                                             src={performanceImage} 
                                             alt="perform" 
                                             className="absolute inset-0 w-full h-full object-cover" 
                                             /> 
                                   
                                   {/* TOP CONTENT: Added 'relative z-10' so it sits above the image */}
                                   <div className="relative z-10 text-start" >
                                             <p className="inline-block text-xs text-white bg-transparent outline outline-2 outline-white rounded-full px-6 py-2">
                                                  Performance
                                             </p> 
                                   </div>

                                   {/* 3. BOTTOM CONTENT: Added 'relative z-10' and 'pt-8' for safe spacing */}
                                   <div className="relative z-10 max-w-sm pt-8 text-start">
                                   <p className="text-white text-lg font-bold mb-2">
                                        Zero-Emission Performance
                                   </p> 
                                   <p className="text-white text-xs leading-relaxed">
                                        Our electric powertrains deliver <br />
                                        instant torque and silent acceleration <br />
                                        without sacrificing the raw capability <br />
                                        you expect from a luxury vehicle.
                                   </p> 
                                   </div>

                         </div>

                                   {/* 2. Grid Item Craftmanship */}
                          <div className="relative w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[300px] lg:min-h-[350px]">                                  
                                   
                                   {/*   IMAGE ABSOLUTE: It acts as a background that fills the parent */}
                                             <img 
                                             src={craftImage} 
                                             alt="craft" 
                                             className="absolute inset-0 w-full h-full object-cover" 
                                             /> 
                                   
                                   {/*  TOP CONTENT: Added 'relative z-10' so it sits above the image */}
                                   <div className="relative z-10 text-start">
                                             <p className="inline-block text-xs text-white bg-transparent outline outline-2 outline-white rounded-full px-6 py-2">
                                                  Craftmanship
                                             </p> 
                                   </div>

                                   {/*  BOTTOM CONTENT: Added 'relative z-10' and 'pt-8' for safe spacing */}
                                   <div className="relative z-10 max-w-sm pt-8 text-start">
                                   <p className="text-white text-lg font-bold mb-2">
                                        Handcrafted interiors
                                   </p> 
                                   <p className="text-white text-xs leading-relaxed">
                                        Premium materials and meticulous attention <br />
                                        attention to detail create cabins that <br />
                                         feel like extensions of your personal <br />
                                         taste and success.
                                   </p> 
                                   </div>

                         </div>

                                   {/* 3. Grid Item Technology */}
                          <div className="relative w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[300px] lg:min-h-[350px]">                                  
                                   
                                   {/*  IMAGE IS ABSOLUTE: It acts as a background that fills the parent */}
                                             <img 
                                             src={techImage} 
                                             alt="tech" 
                                             className="absolute inset-0 w-full h-full object-cover" 
                                             /> 
                                   
                                   {/*. TOP CONTENT: Added 'relative z-10' so it sits above the image */}
                                   <div className="relative z-10 text-start">
                                             <p className="inline-block text-xs text-white bg-transparent outline outline-2 outline-white rounded-full px-6 py-2">
                                                  Technology
                                             </p> 
                                   </div>

                                   {/*  BOTTOM CONTENT: Added 'relative z-10' and 'pt-8' for safe spacing */}
                                   <div className="relative z-10 max-w-sm pt-8">
                                   <p className="text-white text-lg font-bold mb-2 text-start">
                                        Intelligent <br /> technology
                                   </p> 
                                   <p className="text-white text-xs leading-relaxed text-start">
                                        Advanced systems anticipate your <br />
                                        needs and adapt to your preferences, <br />
                                         making every journey seamless and <br />
                                          intuitive.  
                                   </p> 
                                   </div>

                         </div>
                                                                                              
                                   
                                    {/* 4. Grid Item Status */}
                                <div className="relative w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[300px] lg:min-h-[350px]">                                  
                                   
                                   {/*  IMAGE IS ABSOLUTE: It acts as a background that fills the parent */}
                                             <img 
                                             src={statusImage} 
                                             alt="status" 
                                             className="absolute inset-0 w-full h-full object-cover" 
                                             /> 
                                   
                                   {/*  TOP CONTENT: Added 'relative z-10' so it sits above the image */}
                                   <div className="relative z-10 text-start">
                                            <p className="inline-block text-xs text-white bg-transparent outline outline-2 outline-white rounded-full px-6 py-2">
                                                  Status
                                             </p>    
                                   </div>

                                   {/*  BOTTOM CONTENT: Added 'relative z-10' and 'pt-8' for safe spacing */}
                                   <div className="relative z-10 max-w-sm pt-8 text-start">
                                   <p className="text-white text-lg font-bold mb-2">
                                        Staus without <br />noise
                                   </p> 
                                   <p className="text-white text-xs leading-relaxed">
                                        Presence that signals discernment not, <br />
                                        excess-rocognizable to those who <br />
                                         know, understated to everyone else.                                     
                                   </p> 
                                   </div>

                         </div>
                               
                               
                         </div>
                    </div>
              </div>         
     </section>





                                        {/* Section collection fleet*/}
      <section className="mt-32">
               <div>
                    <div className="relative z-10 flex flex-col items-center text-center px-6 gap-4 w-full">
                        <p className="font-bold">
                          Collection
                        </p>

                        
                        <span className="flex flex-col gap-4">
                              <p className="text-2xl mt-4 md:text-5xl font-bold mx-auto">
                                The fleet awaits your selection
                              </p>
                          
                          {/* DESKTOP VIEW:  */}
                              <p className="hidden md:block">
                                Each model represents the pinnacle of electric engineering and aesthetic mastery. Choose the <br />
                                vehicle that speaks to your ambitions.
                               </p>
                           {/* MOBILE VIEW  */}
                              <p className="block md:hidden text-xs">
                                Each model represents the pinnacle of electric <br />
                                engineering and aesthetic mastery. Choose the <br />
                                vehicle that speaks to your ambitions.
                                </p>
                        </span>
                        <span className="flex flex-row">
                         <Link to="/fleet"><Button variant="outlineGreen">Configure</Button></Link>                    
                        <Link to="/fleet"><Button variant="ghost"> <span className="flex items-center gap-4 leading-none">Explore<FaGreaterThan /></span></Button></Link>
                        </span>
                                
                    </div> 
               </div>
                                  
                                  {/* Section Collection Fleet container */}
               <div>
                    <div className="w-full max-w-[1440px] px-2 mt-16">
                          <div>
                               <div className="flex flex-row justify-center items-center gap-4 text-center mb-6 l">
                                 <a href="#fleet" className="hover:underline transition-al">Iroko Air</a>
                                 <a href="#fleet" className="hover:underline transition-al">Iroko Onyx</a>
                                 <a href="#fleet" className="hidden md:block hover:underline transition-al">Iroko Prime</a>
                                 <a href="#fleet" className="hidden md:block hover:underline transition-al">Iroko Eclipse LE</a>
                               </div>
                                      {/* iroko air layout */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                            
                                   <div flex-1>
                                        <img src={irokoAir} alt="Iroko Air" className="w-full h-auto object-cover" /> 
                                   </div>
                                   <div flex-1 className="flex flex-col gap-6 items-start justify-center">
                                         <p className="text-lg font-bold">Signature</p>
                                         <p className="text-2xl font-bold md:text-3xl">Iroko Air commands <br /> presence</p>
                                         <p className="text-xs md:text-lg">
                                           A four-door masterpiece with hand-stitched leather and walnut <br />
                                           trim throughout.
                                           Zero to sixty arrives in three point eight seconds <br />
                                           with a range exceeding five hundred miles.
                                         </p>
                                         <div className="flex gap-4">
                                            <Link to="/contact"> <Button variant="outlineGreen">Reserve</Button></Link>
                                         <Link to="/fleet"><Button variant="ghost"><span className="flex items-center gap-4 leading-none">Explore<FaGreaterThan /></span></Button></Link>
                                         </div>
                                   </div>
                              </div>                              
                          </div>
                    </div>
               </div>
      </section>


  </div>
</div>
  )
}

export default Main

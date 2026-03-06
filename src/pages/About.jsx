import React from 'react';
import glow from '../assets/Glow.png';
import highRise from '../assets/HighRise.jpg';
import ringEye from '../assets/RingEye.png';
import innovation from '../assets/Innovation.png'
import excell from '../assets/ExcellIcon.png'
import craft from '../assets/CraftIcon.png'
import sustain from '../assets/Sustain.png'
import integrity from '../assets/IntegrityIcon.png'
import focus from '../assets/FocusIcon.png'
import { Link } from "react-router-dom";
import Button from '../components/Button'
import { MdArrowForward } from "react-icons/md";

const About = () => {
  return (
    <section className="w-full bg-black pt-4"> {/* pt-4 adds a little gap from Navbar */}
      
      {/* 1. THE CONSTRAINT WRAPPER (Aligns with Navbar) */}
      <div className="max-w-[1440px] mx-auto px-3 relative">
        
        {/* 2. THE HERO CARD (Black Background) */}
        <div className="relative grid grid-cols-1 bg-black rounded-bl-3xl rounded-br-3xl min-h-105 md:min-h-144.5 overflow-hidden">
          
          {/* 3. HERO CONTENT (Text) */}
          {/* z-10 ensures text stays clickable/selectable */}
          <div className="z-10 flex flex-col justify-center items-center text-center gap-4 h-full">
            
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
              Redefining Luxury Mobility<span className="text-[#CFCA11]">for Africa.</span>
              
            </h1>
            
            <p className="hidden md:block text-gray-400 mt-6 text-xs">
              IrokoEV was born from a vision to create world-class electric vehicles that honor Africa excellence <br />
              while pioneering sustainable transportation for the future..
            </p>
          
            <p className="block md:hidden text-gray-200 mt-6 text-sm">
                We believe in clear communication about how we <br /> operate and protect your information. Our legal <br />
                 documents outline the terms, policies, IrokoEV <br />
                  was born from a vision to create world-class <br />
                   electric vehicles that honor Africa excellence while <br />
                    pioneering sustainable transportation for the <br />
                     future.
            </p>
          
          </div>

                                 {/* 4. THE FLOATING IMAGE (Absolute) */}
         
          <img 
            src={glow} 
            alt="Hero Glow" 
            className="hidden md:block absolute top-15 right-0 z-50 w-180 h-auto object-contain pointer-events-none"
          />

        </div>
        <section className="bg-white pb-8">
        <div className="bg-white flex flex-col text-3xl md:text-4xl leading-tight mx-auto p-3 mb-6 mt-10">
            
              <p className="text-center md:text-left font-bold text-black">
                Our <span className="text-[#CFCA11]">Story</span>
              </p>

              <p className="text-gray-600 mt-6 text-sm md:text-sm">
                Named after the mighty Iroko tree—a symbol of strength, longevity, and resilience in African culture—IrokoEV represents more than just transportation. We embody the
                spirit of innovation deeply rooted in African heritage.

                Founded in 2020 by a team of visionary engineers and designers, we set out to challenge the notion that premium electric vehicles were solely the domain of Western
                manufacturers. Our mission was clear: create vehicles that could compete on the global stage while addressing the unique needs of African roads and climate.

                Today, IrokoEV stands as Africa's first luxury electric vehicle manufacturer, with state-of-the-art production facilities in Lagos and a growing network of charging
                infrastructure across Nigeria and beyond.
              </p>

          </div>

         <div className="relative grid grid-cols-1 bg-white rounded-3xl min-h-117.25 overflow-hidden p-3">           
            <img 
              src={highRise} 
              alt="High Rise" 
              className="w-full h-125 md:h-[450x] sm:h-125 object-cover rounded-2xl"
            />
          </div>

         </section> 
                              {/* group of 2 cards (Vision and Mission)        Big screen  */}
           <section>                
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-8">
                <div className="hidden md:block">
                 <div className="text-black bg-white rounded-3xl p-8">
                    <div className="flex flex-col gap-6">
                        <img src={ringEye} alt="eye" className="w-8 h-8 md:w-8 md:h-8"/>
                         <span className="font-bold text-3xl md:text-4xl">Our Vision</span>
                         <p className="text-sm text-center md:text-left text-black">
                            To be Africa's leading luxury electric vehicle manufacturer, setting global <br />
                             standards for design excellence, sustainability, and innovation while <br />
                              creating thousands of high-skilled jobs and fostering technological <br />
                                advancement across the continent.
                         </p>
                    </div>                                                   
                 </div>
                 </div> 
                                       {/* Big screen  */}
                <div className="hidden md:block">
                 <div className="text-black bg-white rounded-3xl p-8">
                    <div className="flex flex-col gap-6">
                        <img src={ringEye} alt="eye" className="w-8 h-8 md:w-8 md:h-8"/>
                         <span className="font-bold text-3xl md:text-4xl">Our Mision</span>
                         <p className="text-sm text-center md:text-left text-black">
                            To design and manufacture world-class electric vehicles that combine luxury,  and sustainability,
                             tailored for African conditions while competing globally. 
                            We are committed to environmental stewardship and advancing Africa's position in the global automotive industry.
                         </p>
                    </div>
                                                      
                 </div>
                 </div> 


                 <div className="block md:hidden">      {/* Small screen  */}
                 <div className="flex flex-col justify-center items-center text-center gap-6 text-black bg-white rounded-3xl pb-4 p-2">
                         <img src={ringEye} alt="eye" className="w-8 h-8 md:w-8 md:h-8"/>
                          <span className="font-bold text-3xl md:text-4xl">Our Vision</span>
                          <p className="text-sm md:text-left text-black">
                            To be Africa's leading luxury electric vehicle <br /> manufacturer, setting global standards for <br /> 
                            design excellence, sustainability, and <br /> innovation while creating thousands of high- br 
                            skilled jobs and fostering technological <br />  advancement across the continent.
                          </p>
                 </div>
                 </div>
                   <div className="block md:hidden">      {/* Small screen  */}
                 <div className="flex flex-col justify-center items-center text-center gap-6 text-black bg-white rounded-3xl pb-4 p-2">
                         <img src={ringEye} alt="eye" className="w-8 h-8 md:w-8 md:h-8"/>
                          <span className="font-bold text-3xl md:text-4xl">Our Mission</span>
                          <p className="text-sm md:text-left text-black">
                            To design and manufacture world-class <br />
                             electric vehicles that combine luxury, and <br />
                              sustainability, tailored for African conditions 
                               while competing globally. We are committed to
                               environmental stewardship and advancing 
                               Africa's position in the global automotive 
                                industry.
                          </p>
                 </div>
                 </div>
             </div>
          </section> 
                                              {/* OUR CORE VALUE  */}
          <section className="bg-white">
                 <div>
                    <div className="flex flex-col items-center p-2 md:items-start md:p-6 gap-4">
                        <p className="text-3xl md:text-4xl font-bold text-center md:text-left text-black"> Our Core<span className="text-[#CFCA11]">Value</span>  </p>
                        <p className="text-sm">The principles that guide every decision we make</p>           
                    </div>
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 mt-10 p-8 ">
                            
                                  <div className="flex flex-col items-center gap-4 rounded-3xl p-4 md:items-start text-center md:text-left hover:shadow-2xl transition-all">
                                       <img src={innovation} alt="icon" className="w-8 h-8 md:w-8 md:h-8" />
                                       <p className="font-bold text-xl">Innovation</p>
                                       <p className="text-xs text-gray-600">Pushing boundaries in design, engineering, and sustainable technology.</p>
                                  </div>

                                  <div className="flex flex-col items-center gap-4 rounded-3xl p-4 md:items-start text-center md:text-left hover:shadow-2xl transition-all">
                                         <img src={excell} alt="excell" className="w-8 h-8 md:w-8 md:h-8 " />
                                         <p className="font-bold text-xl">Excellence</p>
                                         <p className="text-xs text-gray-600">Uncompromising quality in every detail, from concept to delivery.</p>
                                  </div>

                                  <div className="flex flex-col items-center gap-4 rounded-3xl p-4 md:items-start text-center md:text-left hover:shadow-2xl transition-all">
                                        <img src={sustain} alt="eye" className="w-8 h-8 md:w-8 md:h-8 " />
                                        <p className="font-bold">Sustainability</p>
                                        <p className="text-xs text-gray-600">Commitment to environmental responsibility and clean energy solutions.</p>
                                  </div>

                                  <div className="flex flex-col items-center gap-4 rounded-3xl p-4 md:items-start text-center md:text-left hover:shadow-2xl transition-all">
                                        <img src={craft} alt="craft" className="w-8 h-8 md:w-8 md:h-8 " />
                                        <p className="font-bold">Craftsmanship</p>
                                        <p className="text-gray-600 text-xs">Honoring African artisanal traditions with modern manufacturing precision.</p>
                                  </div>

                                  <div className="flex flex-col items-center gap-4 rounded-3xl p-4 md:items-start text-center md:text-left hover:shadow-2xl transition-all ">
                                        <img src={integrity} alt="integrity" className="w-8 h-8 md:w-8 md:h-8 " />
                                        <p className="font-bold">Integrity</p>
                                        <p className="text-gray-600 text-xs">Transparency, honesty, and ethical practices in all our operations.</p>
                                  </div>

                                  <div className="flex flex-col items-center gap-4 rounded-3xl p-4 md:items-start text-center md:text-left hover:shadow-2xl transition-all">
                                       <img src={focus} alt="focus" className="w-8 h-8 md:w-8 md:h-8 " />
                                       <p className="font-bold">Customer Focus</p>
                                       <p className="text-gray-600 text-xs">Exceeding expectations through personalized service and attention to detail.</p>
                                  </div>
                             </div>
                     
                 </div>
          </section>

                                           {/* Commitment to Sustainability  */}
          <section>
                 <div>
                     <div className="flex flex-col p-2 md:p-6 gap-4 items-center text-white">
                         <p className="flex flex-row gap-2 text-3xl md:text-4xl font-bold text-center md:text-left ">Commitment to<span className="text-[#CFCA11]">Sustainability</span></p>
                         <p className="text-[#676767] text-text-sm">Aligned with the United Nations Sustainable Development Goals</p>
                     </div>

                                                  {/* Grid layout  */}
                     <div className="">

                       <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 mt-10 p-12">

                          <div className="flex flex-col gap-4 bg-white rounded-2xl p-8">
                               <div className="flex flex-row gap-2 items-center">
                                            <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#CFCA114A] hover:scale-110">9</span>
                                               <p className="text-black font-bold">Industry, Innovation and Infrastructure</p>
                               </div>
                               <p className="text-gray-600 text-xs">Building resilient manufacturing infrastructure and fostering innovation in African automotive industry.</p>
                          </div>

                          <div className="flex flex-col gap-4 bg-white rounded-2xl p-8">
                               <div className="flex flex-row gap-2 items-center">
                                            <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#CFCA114A] hover:scale-110"> 11</span>
                                   <p className="text-black font-bold">Sustainable Cities and Communities</p>
                               </div>
                               <p className="text-gray-600 text-xs">Creating clean, accessible transportation solutions that make cities more livable and sustainable.</p>
                          </div>

                          <div className="flex flex-col bg-white gap-4 rounded-2xl p-8">
                               <div className="flex flex-row gap-2 items-center">
                                            <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#CFCA114A] hover:scale-110"> 13</span>
                                   <p className="text-black font-bold">Climate Action</p>
                               </div>
                               <p className="text-gray-600 text-xs">Reducing carbon emissions through zero-emission vehicles and renewable energy integration.</p>
                          </div>

                          <div className="flex flex-col bg-white gap-4 rounded-2xl p-8">
                               <div className="flex flex-row gap-2 items-center">
                                            <span className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#CFCA114A] hover:scale-110"> 17</span>
                                              
                                             
                                   <p className="text-black font-bold">Partnerships for the Goals</p>
                               </div>
                               <p className="text-gray-600 text-xs">Collaborating with governments, NGOs, and private sector to accelerate sustainable development.</p>
                          </div>
                        </section>
                     </div>
                  

                     <div>
                         <p>
                          By 2030, we are committed to achieving carbon neutrality across our entire supply chain,
                           establishing 500+ charging stations across West Africa, and training 10,000 skilled technicians 
                           in electric vehicle technology.
                         </p>
                     </div>
                 </div>
          </section>
                                             {/* FULL BLEED  */}
               <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                   <div className="flex flex-col justify-evenly items-center bg-white min-h-80">
                     <div className="flex flex-col p-2 md:p-6 gap-4 items-center text-black">
                         <p className="flex flex-row gap-2 text-3xl md:text-4xl font-bold text-center md:text-left ">Ready to Experience the<span className="text-[#CFCA11]">Future?</span></p>
                         <p className="text-[#676767] text-text-sm">Discover how IrokoEV is transforming luxury mobility in Africa. Connect with us today.</p>
                     </div>
                       <div className="flex flex-row justify-center gap-4">
                        <span className="flex flex-row gap-4">
                         <Link to="/contact"><Button variant="latest">Get In Touch</Button></Link>                    
                        <Link to="/fleet"><Button shape="default" variant="outlineAmber"><span className="flex items-center gap-4 leading-none">View Our Fleet<MdArrowForward /></span></Button></Link>
                        </span>
                       </div>
                  </div>   
          </section>
         

      </div>
    </section>
  );
};

export default About;

    
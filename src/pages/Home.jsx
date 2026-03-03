import React from 'react'
import Main from './Main'
import FAQ from "./FAQ"


const Home = () => {
  return (
                     //  DESKTOP LAYOUT (HOME SECTION) WITH CUSTOM FONT FAMILY JAKARTA 
       <section id="home" className="w-full pt-[96px] pb-4 bg-white font-jakarta">
              
                 <Main />
                 <FAQ />
       </section>
  )
}

export default Home

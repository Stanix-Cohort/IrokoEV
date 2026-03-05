import Button from './components/Button'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Fleet from './pages/Fleet'
import Contact from './pages/Contact'
import Footer from "./components/Footer"
import FAQ from "./pages/FAQ"
import Policy from "./pages/Policy"
import Terms from "./pages/Terms"
import Cookie from "./pages/Cookie"
import Thanks from './pages/Thanks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (
   <BrowserRouter>
             <div className="w-full min-h-screen bg-gray-50">
                          <Navbar />
                          
                          {/* The Constraint Wrapper */}
                          <div className="max-w-360 mx-auto relative">
                              <Routes>
                                    <Route path="/" element={<Home/>} />      
                                    <Route path="/about" element={<About />} />
                                    <Route path="/fleet" element={<Fleet />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/faq" element={<FAQ />}/>
                                    <Route path="/policy" element={<Policy />}/>
                                    <Route path="/terms" element={<Terms />}/>
                                    <Route path="/cookie" element={<Cookie />}/>
                                    <Route path="/thanks" element={<Thanks />}/>
                              </Routes>      
                                                                                 
                          </div>
                         <Footer />
      </div>
   </BrowserRouter>
      
    
  )
}

export default App

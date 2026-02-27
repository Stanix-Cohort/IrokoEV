import Button from './components/Button'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Fleet from './pages/Fleet'
import Contact from './pages/Contact'
import FAQ from "./pages/FAQ"
import CTA from "./pages/CTA"
import Footer from "./components/Footer"




function App() {
  return (
   
      <div className="w-full min-h-screen bg-gray-50">
            
            {/* The Constraint Wrapper */}
            <div className="max-w-[1440px] mx-auto relative">
              <Navbar />
              <Home />
              <About />
              <Fleet />
              <Contact />
              <FAQ />
              <CTA />
              <Footer />
            </div>
        
      </div>
    
  )
}

export default App

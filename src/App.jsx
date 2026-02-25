import Button from './components/Button'

function App() {
  return (
    <>
       <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
          
          <h1 className="text-3xl font-bold text-iroko">IrokoEV Component Test</h1>
          
          {/* I'm testing the Button */}
          <Button onClick={() => alert("It works!")}>
            Get Started
          </Button>

       </div>

    </>
  )
}

export default App

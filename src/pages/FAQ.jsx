const Home = () => {
  return (
    <section
      id="faq"
      className="min-h-screen pt-[72px] flex items-center justify-center "
    >
      <div >
        <section className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6 gap-4">
          <div className="flex flex-col gap-4" >
             <p className="text-4xl md:text-5xl font-bold text-center">FAQ SECTION</p>
              <p> Everything you need to know about owning a Luxivolt Motors electric vehicle.</p>
              <div className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 shadow-lg">
                  <p className="font-bold">How far can i drive?</p> 
                  <p >
                    Our vehicles deliver 300 to 450 miles per charge depending on the model and driving conditions.
                     Real-world range exceeds most competitors because we engineer for efficiency without compromise. 
                     Your actual distance varies with terrain, climate, and driving style.
                  </p>
              </div>
              <div className="flex flex-col gap-2 font-bold">
                <p className="border border-gray-300 rounded-lg p-4 shadow-lg">What about charging time?</p>
                <p className="border border-gray-300 rounded-lg p-4 shadow-lg">Can I customize everything?</p>
                <p className="border border-gray-300 rounded-lg p-4 shadow-lg">What warranty do you offer?</p>
                <p className="border border-gray-300 rounded-lg p-4 shadow-lg">How does maintenance work?</p>
              </div>
            </div > 
            <div>
              <div>
                 <p className=" text-xl md:text-2xl font-bold">Need more answers?</p>
              </div>
            </div>
        </section>
      </div>
    </section>
  )
}

export default Home
import heroImage from '../assets/HeroCar.png'

const Home = () => {
  return (
 <section
  id="home"
  style={{ backgroundImage: `url(${heroImage})` }}
  className="min-h-screen pt-[72px] relative bg-cover bg-center 
             flex items-center justify-center"
>
           {/* I darkened the bg a little bit  */}
  <div className="absolute inset-0 bg-black/50"></div>  

  <div className="relative relative text-center px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Home Page
    </h1>
  </div>
</section>
  )
}

export default Home

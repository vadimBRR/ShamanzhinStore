import React from 'react'
import heroImg from "../../assets/rabbit-hero.webp"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
      <img src={heroImg} alt="Rabbit"  className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'/>
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold mb-4 tracking-tighter uppercase">Store <br /> Shamanzhin</h1>
          <p className="text-sm md:text-lg mb-6 tracking-tighter">Shop with us and get the best deals on our products.</p>
          <Link to='#' className='bg-white text-gray-900 px-6 py-2 rounded-sm text-lg hover:bg-gray-200 transition-all'>Shop Now</Link>
        </div>
      </div>

    </section>
  )
}

export default Hero
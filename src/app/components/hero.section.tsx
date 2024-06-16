import React from 'react'

function HeroSection() {
  return (
    <section className='flex flex-col justify-center items-center min-h-[80vh] gap-y-8'>
        <h1 className='w-[80%] text-6xl text-center font-bold'><span>I'm Jonathan,</span> who loves creating amazing solutions and developing apps.</h1>
        <div className='flex gap-x-10'>
          <button className='bg-blue-500 px-4 py-3 rounded-md text-white font-bold'>Let's Talk</button>
          <button>My Services</button>
        </div>
    </section>
  )
}

export default HeroSection
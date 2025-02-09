import React, { useEffect } from 'react'

function Projects() {

  useEffect(() => {
    window.scroll({ top: '0', behavior: 'smooth' })
  }, [])

  return (

    <>
      {/* <div className="h-[60px] lg:h-[120px] px-4"></div> */}
      <section className="w-[80%] mx-auto flex flex-col items-center  mb-16">
      
<p className='text-5xl font-semibold '>Project</p>
<div className=""></div>
        {/* button */}
        <div className="hover:*:bg-color4 *:duration-300  *:bg-white py-8 flex gap-3 *:py-1.5 *:px-4 *:rounded-full mt-5">
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/living.svg" alt="" /> <p>Living Room</p></button>
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/dining.svg" alt="" /> <p>Dining Room</p></button>
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/bedroom.svg" alt="" /> <p>Bedroom</p></button>
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/more.svg" alt="" /> <p>Explore More</p></button>
        </div>
        
        {/* projects */}
        <section className=' flexs flex-wrap  *:rounded-lg '>
          <div className="flex gap-5  *:rounded-lg">
<div className="w-[700px] h-[395px] bg-color2"></div>
<div className="w-[280px] h-[395px] bg-color2"></div>
<div className="w-[280px] h-[395px] bg-color2"></div>
          </div>
          <div className="flex gap-5 mt-4 *:rounded-lg">
<div className="w-[280px] h-[395px] bg-color2"></div>
<div className="w-[280px] h-[395px] bg-color2"></div>
<div className="w-[700px] h-[395px] bg-color2"></div>
          </div>

        </section>
      </section>
    </>
  )
}

export default Projects
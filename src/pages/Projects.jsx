import React, { useEffect } from 'react'
import "../App.css"
function Projects() {

  useEffect(() => {
    window.scroll({ top: '0', behavior: 'smooth' })
  }, [])

  return (

    <>
      {/* <div className="h-[60px] lg:h-[120px] px-4"></div> */}
      <section className="w-[80%] mx-auto flex flex-col items-center  mb-16 ">

        <p className='text-5xl font-semibold '>Project</p>
        <div className=""></div>
        {/* button */}
        <div className="hover:*:bg-color4 *:duration-300  *:bg-white py-8 flex flex-wrap items-center justify-center gap-3 *:py-1.5 *:px-4 *:rounded-full mt-5">
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/living.svg" alt="" /> <p>Living Room</p></button>
          <button className='flex items-center justify-center gap-3 '> <img src="https://static.havenly.com/home/before-and-after/dining.svg" className='w-[32px]' alt="" /> <p>Dining Room</p></button>
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/bedroom.svg" alt="" /> <p>Bedroom</p></button>
          <button className='flex items-center justify-center gap-3'> <img src="https://static.havenly.com/home/before-and-after/more.svg" alt="" /> <p>Explore More</p></button>
        </div>


      </section>
      {/* projects */}

      {/* <section className=' gridp w-full flexz flex-wrap  *:rounded-lg '> */}
      <section className='  max-w-[1700px] mx-auto w-full *:rounded-xl mb-10 px-3'>


        <div className=" flex flex-wrap  justify-center w-full gap-2 md:gap-5  *:rounded-lg">
          <div className=" md:w-[700px]  w-full h-[395px] bg-color2">f</div>
          <div className="w-full md:w-[560px] *:rounded-md flex  justify-center gap-2 md:gap-5">
            <div className="lg:w-[280px]  w-full  h-[395px] bg-color2">g</div>
            <div className="lg:w-[280px]  w-full h-[395px] bg-color2">h</div>
          </div>
        </div>

        <div className=" flex flex-wrap-reverse mt-4 justify-center w-full gap-2 md:gap-5  *:rounded-lg">
          <div className="w-full md:w-[560px] *:rounded-md flex  justify-center gap-2 md:gap-5">
            <div className="lg:w-[280px]  w-full  h-[395px] bg-color2">g</div>
            <div className="lg:w-[280px]  w-full h-[395px] bg-color2">h</div>
          </div>
          <div className=" md:w-[700px]  w-full h-[395px] bg-color2">f</div>
        </div>


      </section>
    </>
  )
}

export default Projects
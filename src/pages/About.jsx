import React, { useEffect } from 'react'

function About() {

  useEffect(()=>{
    window.scroll({top:'0',behavior:'smooth'})
  },[])
  return (
    <>
    <div className="h-[90px] lg:h-[120px]"></div>
      <section className='max-w-[1800px] mx-auto px-4'>
        <div className=" flex items-center justify-center text-white gap-5">
          <div className="bg-white w-[7px] h-[7px] rounded-full"></div>
          <p className='py-6 font-semibold text-3xl'>  About Us</p>
          <div className="bg-white w-[7px] h-[7px] rounded-full"></div>
        </div>

        <div className=' text-white flex justify-center items-center gap-10 lg:gap-20 my-20 flex-wrap '>

          <div className="w-[320px]">
            <img className='bg-color3 w-full h-[450px] rounded-3xl' src="" alt="" />
          </div>
          <div className="text-center lg:text-start">
            <h1 className='text-5xl poppins-bold'>I'm Somya Soni,</h1>
            <h1 className='text-5xl poppins-bold py-1.5'>Interion Designer</h1>
            <p className='max-w-[500px] my-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam excepturi similique error optio amet quis reprehenderit eum</p>
            {/* <div className="my-4">
              <button className='bg-white text-color1 font-semibold py-2 px-6 rounded-full mr-3'>About</button>
              <button className='bg-color3 text-white font-semibold py-2 px-6 rounded-full'>Download CV</button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
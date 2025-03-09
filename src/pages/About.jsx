import React, { useEffect } from 'react'
import { project1, som, t1, t2, t3 } from '../Imports/Images'
import WhatsappButton from '../components/WhatsappButton'
function About() {

  useEffect(()=>{
    window.scroll({top:'0',behavior:'smooth'})
  },[])
  return (
    <>
    <div className="h-[40px] lg:h-[100px]"></div>
      <section className='max-w-[1800px] mx-auto lg:h-[70vh] px-4'>
        <div className=" flex items-center justify-center text-color3 gap-5">
          {/* <div className="bg-white w-[7px] h-[7px] rounded-full"></div> */}
          <p className='py-3 font-semibold text-5xl uppercase '>  About Us</p>
          {/* <div className="bg-white w-[7px] h-[7px] rounded-full"></div> */}
        </div>

        <div className=' text-color3 flex justify-center items-center gap-10 lg:gap-20 my-20 flex-wrap '>

{/* h-[450px] */}
          <div className="w-[320px]">
            <img className='bg-color3 w-full rounded-3xl' src={som} alt="" />
          </div>
          <div className="text-center lg:text-start">
            <h1 className='text-5xl poppins-bold'>I'm Som Soni,</h1>
            <h1 className='text-5xl poppins-bold py-1.5'>Interion Designer</h1>
            <p className='max-w-[500px] my-2.5'>At AS Renderings, we are a team of passionate interior designers and 3D visualizers dedicated to transforming spaces into exceptional living and working environments. We specialize in 3D visualization, detailed space planning, and color selection to bring your ideas to life. Our commitment is to deliver designs that blend creativity with functionality, ensuring each project reflects a unique character and style.</p>

          </div>
        </div>
        <div className=" fixed z-50 -bottom-[90vh] -right-[40vw] lg:-right-[46vw] w-[100vw] h-[100vh]">
        <WhatsappButton/>
        </div>
      </section>
    </>
  )
}

export default About
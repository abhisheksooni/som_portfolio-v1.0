import React, { useEffect } from 'react'

function Projects() {

  useEffect(()=>{
      window.scroll({top:'0',behavior:'smooth'})
  },[])

  return (

   
    <>
    <div className="h-[60px] lg:h-[120px]"></div>
    <section className="flex justify-center items-center flex-col text-white">
    <div className=" flex items-center gap-5 ">
                <div className="bg-white w-[7px] h-[7px] rounded-full"></div>
                <p className='py-12 font-semibold text-3xl'>Projects</p>
                <div className="bg-white w-[7px] h-[7px] rounded-full"></div>
            </div>
    </section>
    </>
  )
}

export default Projects
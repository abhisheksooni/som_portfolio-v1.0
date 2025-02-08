import React, { useEffect } from 'react'

function Projects() {

  useEffect(() => {
    window.scroll({ top: '0', behavior: 'smooth' })
  }, [])

  return (

    <>
      {/* <div className="h-[60px] lg:h-[120px] px-4"></div> */}
      <section className="w-[80%] mx-auto  mb-16">
      
<p className='text-5xl font-semibold '>Project</p>
<div className=""></div>
        {/* button */}
        <div className="*:bg-color4 py-8 flex gap-3 *:py-1.5 *:px-4 *:rounded-full mt-5">
          <button>All</button>
          <button>Room</button>
          <button>Bathroom</button>
        </div>
        
        {/* projects */}
        <section className=' flex flex-wrap gap-8 *:rounded-lg '>
<div className="w-72 h-72 bg-color2"></div>
<div className="w-72 h-72 bg-color2"></div>
<div className="w-72 h-72 bg-color2"></div>
<div className="w-72 h-72 bg-color2"></div>
<div className="w-72 h-72 bg-color2"></div>
<div className="w-72 h-72 bg-color2"></div>
<div className="w-72 h-72 bg-color2"></div>
        </section>
      </section>
    </>
  )
}

export default Projects
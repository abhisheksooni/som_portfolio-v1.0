import React, { useEffect } from 'react'
import "../App.css"
import {
  p1image1,
  p1image2,
  p1image3,
  p2image1,
  p2image2,
  p2image3,
  p2image4,
  p2image5,
  p2image6,
  p3image1,
  p4image1,
  p4image2,
  p4image3,
  p4image4,
  p4image5,
  p4image6,
  p5image1,
  p5image2,
  p5image3,
  p5image4,
  p5image5,
  p6image1,
  p6image2,
  p8image1,
  p8image2,
  p8image3,
  p9image1,
  p9image2,
  p9image3,
} from '../Imports/Images'



function Projects() {

  const projectsimages = [
    {
      id: 11,
      img: p1image1
    },
    {
      id: 12,
      img: p1image2
    },
    {
      id: 13,
      img: p1image3
    },
    {
      id: 21,
      img: p2image1
    },
    {
      id: 22,
      img: p2image2
    },
    {
      id: 23,
      img: p2image3
    },
    {
      id: 24,
      img: p2image4
    },
    {
      id: 25,
      img: p2image5
    },
    {
      id: 26,
      img: p2image6
    },
    {
      id: 31,
      img: p3image1
    },
    {
      id: 41,
      img: p4image1
    },
    {
      id: 42,
      img: p4image2
    },
    {
      id: 43,
      img: p4image3
    },
    {
      id: 44,
      img: p4image4
    },
    {
      id: 45,
      img: p4image5
    },
    {
      id: 46,
      img: p4image6
    },
    {
      id: 51,
      img: p5image1
    },
    {
      id: 52,
      img: p5image2
    },
    {
      id: 53,
      img: p5image3
    },
    {
      id: 54,
      img: p5image4
    },
    {
      id: 55,
      img: p5image5
    },
    {
      id: 61,
      img: p6image1
    },
    {
      id: 62,
      img: p6image2
    },
    {
      id: 81,
      img: p8image1
    },
    {
      id: 82,
      img: p8image2
    },
    {
      id: 83,
      img: p8image3
    },
    {
      id: 91,
      img: p9image1
    },
    {
      id: 92,
      img: p9image2
    },
    {
      id: 93,
      img: p9image3
    },

  ]


  useEffect(() => {
    window.scroll({ top: '0', behavior: 'smooth' })
  }, [])

  return (

    <>
      {/* <div className="h-[60px] lg:h-[120px] px-4"></div> */}
      <section className="w-[80%] mx-auto flex flex-col items-center ">

        <p className='text-5xl font-semibold '>Project</p>
        <div className=""></div>
        {/* button */}
        <div className="hover:*:bg-color4 *:duration-300  *:bg-white py-8 flex flex-wrap items-center justify-center gap-3 *:py-1.5 *:px-3 *:rounded-full mt-5">
          <button className='flex items-center justify-center gap-1.5'> <img src="https://static.havenly.com/home/before-and-after/living.svg" alt="" /> <p>Living Room</p></button>
          <button className='flex items-center justify-center gap-1.5 '> <img src="https://static.havenly.com/home/before-and-after/dining.svg" className='w-[32px]' alt="" /> <p>Dining Room</p></button>
          <button className='flex items-center justify-center gap-1.5'> <img src="https://static.havenly.com/home/before-and-after/bedroom.svg" alt="" /> <p>Bedroom</p></button>
          <button className='flex items-center justify-center gap-1.5'> <img src="https://static.havenly.com/home/before-and-after/more.svg" alt="" /> <p>Explore More</p></button>
        </div>

      </section>
      {/* projects */}

      {/* <section className=' gridp w-full flexz flex-wrap  *:rounded-lg '> */}
      <div className=" columns-2 gap-3  md:columns-3 px-5 md:px-10 ">

        {
          projectsimages.map((projects) => (
            <div className='w-full h-auto mb-3' key={projects.id} >
            <img className='w-full h-auto object-cover rounded-lg aspect-squar' loading="lazy" src={projects.img} />
            </div>
          ))
        }
        </div>
      <section className='  max-w-[1700px] mx-auto flex justify-center gap-5 flex-wrap  w-full *:w-[500px] *:h-[100%] *:rounded-xl mb-10 px-3'>

        {/* <div className=" flex flex-wrap  justify-center w-full gap-2 md:gap-5  *:rounded-lg">
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
        </div> */}
      </section>
    </>
  )
}

export default Projects
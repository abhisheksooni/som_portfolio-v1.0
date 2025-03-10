import React, { useEffect, useState } from 'react'
import "../App.css"
import {
  p10image1,
  p10image2,
  p10image3,
  p10image4,
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
import { NavLink,  } from 'react-router-dom'
import { GalleryHorizontalEnd } from 'lucide-react'

import WhatsappButton from '../components/WhatsappButton'


function Projects() {
  let a = [
    { name: "home", img: { p8image1, p8image2 } },
    { name: "living", img: { p8image1, p8image2 } },
    { name: "dining", img: { p8image1, p8image2 } },
    { name: "bedroom", img: { p8image1, p4image3 } },
    { name: "all", img: { p8image1, p4image3,p4image4,p4image5,p4image6 } },
  ]
  const bathroomimage = [
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
  ]
  const bathroom2image = [
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
  ]
  const keychenimage = [
    {
      id: 61,
      img: p6image1
    },
    {
      id: 62,
      img: p6image2
    },
  ]
  const keycheinimage = [
    {
      id: 101,
      img: p10image1
    },
    {
      id: 102,
      img: p10image2
    },
    {
      id: 103,
      img: p10image3
    },
    {
      id: 104,
      img: p10image4
    },
  ]
  const room = [
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
  const home2 = [

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
  ]
  const home1 = [
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
  ]
  const gameroom = [
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

  ]
  const projectsimages = [
    {
      id: 31,
      img: p3image1
    },

  ]



  useEffect(() => {
    window.scroll({ top: "0", behavior: "smooth" });
  }, []);
  return (

    <>
      <section className="w-[80%] mx-auto flex flex-col items-center ">
        <p className='text-5xl font-semibold uppercase'>Project</p>
        <div className=""></div>
        {/* <div className="hover:*:bg-color4 *:duration-300   py-8 flex flex-wrap items-center justify-center gap-3  *:py-1.5 *:px-3 *:rounded-full mt-5">
          <NavLink to={"/project/living"} className={({ isActive }) => `${isActive ? "text-color3 bg-color4 " : "text-color3 bg-white"} flex items-center justify-center gap-1.5 `}> <img src="https://static.havenly.com/home/before-and-after/living.svg" alt="" /> <p>Living Room</p></NavLink>
          <NavLink to={"/project/dining"} className={({ isActive }) => `${isActive ? "text-color3 bg-color4" : "text-color3 bg-white"} flex items-center justify-center gap-1.5`}> <img src="https://static.havenly.com/home/before-and-after/dining.svg" className='w-[32px]' alt="" /> <p>Dining Room</p></NavLink>
          <NavLink to={"/project/bedroom"} className={({ isActive }) => `${isActive ? "text-color3 bg-color4" : "text-color3 bg-white"} flex items-center justify-center gap-1.5`}> <img src="https://static.havenly.com/home/before-and-after/bedroom.svg" alt="" /> <p>Bedroom</p></NavLink>
          <NavLink to={"/project/home"} className={({ isActive }) => `${isActive ? "text-color3 bg-color4" : "text-color3 bg-white"} flex items-center justify-center gap-1.5`}> <img src="https://cdn-icons-png.freepik.com/512/2413/2413074.png?ga=GA1.1.374937377.1739095233" className='w-[30px] mr-1' alt="" /> <p>Home</p></NavLink>
          <NavLink to={"/project/all"} className={({ isActive }) => `${isActive ? "text-color3 bg-color4" : "text-color3 bg-white"} flex items-center justify-center gap-1.5`}> <p>Explore All</p></NavLink>
        </div> */}
      </section>

      <div className=" columns-1  *:my-5 md:columns-3 p-5 md:p-10 ">

        <div className=" relative">
          <NavLink to={`/projectshow/bathroomimage`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={bathroomimage[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
        <div className=" relative">
          <NavLink to={`/projectshow/bathroom2image`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={bathroom2image[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
        <div className=" relative">
          <NavLink to={`/projectshow/room`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={room[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
        <div className="relative">
          <NavLink to={`/projectshow/home1`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={home1[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
        <div className="relative">
          <NavLink to={`/projectshow/home2`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={home2[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
        <div className="relative">
          <NavLink to={`/projectshow/gameroom`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={gameroom[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
        <div className="relative">
          <NavLink to={`/projectshow/keycheinimage`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={keycheinimage[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>

        <div className="relative">
          <NavLink to={`/projectshow/keychenimage`} className="bg-color4  relative rounded-2xl *:rounded-xl cursor-pointer">
            <img className='hover:scale-[.98] duration-150' src={keychenimage[0].img} alt="" />
            <div className="absolute bottom-3 right-7  flex items-center  backdrop-blur-lg p-2 justify-center rounded-full ">
              <GalleryHorizontalEnd size={30} color='#fff' />
            </div>
          </NavLink>
        </div>
      </div>

      <div className=" fixed z-50 -bottom-[90vh] -right-[40vw] lg:-right-[46vw] w-[100vw] h-[100vh]">
        <WhatsappButton/>
        </div>
    </>
  )
}

export default Projects
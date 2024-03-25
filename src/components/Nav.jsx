import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Nav() {

  const [menu, setmenu] = useState(false)
  const [contect, setContect] = useState(false)
  return (
    <>
    <div className=" fixed w-full top-[7px] lg:mx-auto ">
      <div className='bg-color2 rounded-full my-3 lg:my-5 px-2.5 py-1 md:py-0 sm:px-4  max-w-fit text-white mx-auto'>
        {/* sm nav */}
        <ul className=" hidden justify-center relative items-center gap-7 lg:gap-8 text-lg font-medium lg:flex ">
          <li>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'bg-color3' : 'bg-color2'} px-8 py-3 rounded-full hover:bg-color3`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? 'bg-color3' : 'bg-color2'} px-8 py-3 rounded-full hover:bg-color3`}>About Us</NavLink>
          </li>
          <div className=" bg-color3 w-[55px] h-[55px] my-1.5 rounded-full flex items-center justify-center text-3xl">SS</div>
          <li>
            <NavLink to={'/project'} className={({ isActive }) => `${isActive ? 'bg-color3' : 'bg-color2'} px-8 py-3 rounded-full hover:bg-color3`}>Project</NavLink>
          </li>
          <li>
            <NavLink to={'/contect'} className={({ isActive }) => `${isActive ? 'bg-color3' : 'bg-color2'} px-8 py-3 rounded-full hover:bg-color3`}>Contect Us</NavLink>
          </li>

        </ul>
        {/* mobile nav */}
        <div className=" flex mx-auto justify-between  w-[85vw] lg:hidden">
          <div className=" bg-color3 w-[50px] h-[50px] my-1.5 rounded-full flex items-center justify-center text-3xl">SS</div>
          <button className='mr-1' onClick={() => setmenu(!menu)} >{menu ? <X size={36} /> : <Menu size={36} />}</button>
        </div>
      </div>
      </div>
     {/* Menu opsons */}
      <div className="absoluter fixed z-30 max-w-[86vw] w-full left-[5.5vw] top-[6rem] ">
      <div className={` ${menu ? 'inline-block' : 'hidden'}  flex justify-center mx-auto  w-full rounded-3xl bg-color2 text-white text-2xl h-[400px]`}>
        <ul className='py-5 *:my-2 flex flex-col items-center w-[90%]  '>
          <li>
            <NavLink to={'/'}  className={({ isActive }) => `${isActive ? 'text-color3' : 'text-white'} flex items-center p-3`}> <span>Home</span></NavLink>
          </li>
          <div className=" w-full h-[1px] bg-color4 my-2 rounded-full"></div>
          <li>
            <NavLink to={'/about'}  className={({ isActive }) => `${isActive ? 'text-color3' : 'text-white'} `}>About Us</NavLink>
          </li>
          <div className=" w-full h-[1px] bg-color4 my-2 rounded-full"></div>
          <li>
            <NavLink to={'/project'}  className={({ isActive }) => `${isActive ? 'text-color3' : 'text-white'} `}>Project</NavLink>
          </li>
          <div className=" w-full h-[1px] bg-color4 my-2 rounded-full"></div>
          <li>
            <NavLink to={'/contect'}  className={({ isActive }) => `${isActive ? 'text-color3' : 'text-white'}`}>Contect Us</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Nav
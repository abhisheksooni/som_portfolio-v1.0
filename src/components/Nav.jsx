import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, MenuIcon, X } from 'lucide-react'
import logoicon from "../Images/icon22.png"
import "../App.css"
function Nav() {

  const [menu, setmenu] = useState(false)
  const [contect, setContect] = useState(false)

  const handleScrollToServices = (e) => {

    const servicesElement = document.getElementById(e)
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: "smooth",
        // block: "start"
      })
    }

  }

  const menubarBtn = () =>{

  }

  return (
    <>
      <section className='relative'>
        <nav className='flex items-center justify-between px-10 py-5'>
          <NavLink to={"/"} className="flex items-center ">
            <div className=" bg-color6/70 rounded-full">
              <img className='w-10 ' src={logoicon} alt="" />
            </div>
            <p className='ml-2'>Rending</p>
          </NavLink>
          <div className="hidden lg:flex">
            <ul className='flex items-center gap-8 hover:*:text-color2 font-semibold text-lg *:duration-150'>
              <NavLink className={({ isActive }) => `${isActive ? "text-color2" : "text-color3"}`} to={"/"}>
                <li >Home</li>
              </NavLink>
              <NavLink className={({ isActive }) => `${isActive ? "text-color2" : "text-color3"}`} to={"/project"}>
                <li>Projects</li>
              </NavLink>
              <Link onClick={() => handleScrollToServices("services")}>
                <li>Services</li>
              </Link>
              <Link onClick={() => handleScrollToServices("about")}>
                <li>About</li>
              </Link>
              <NavLink className={({ isActive }) => `${isActive ? "text-color2" : "text-color3"}`} to={"/contect"}>
                <li>Contect</li>
              </NavLink>

              <button className='bg-color3 text-white p-2 px-7'>Portfolio</button>
            </ul>
          </div>

          {/* mobile menu */}
          <div className="lg:hidden">
            <button  className='text-color3 rounded-full p-1.5'>

              <label class="hamburger">
                <input onClick={()=>setmenu(!menu)} type="checkbox" />
                <svg viewBox="0 0 32 32">
                  <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>


              {/* <MenuIcon size={30} /> */}
            </button>
          </div>


        </nav>
{/* menu */}
        <div className={`${menu?"grid  ":"hidden  "}   backdrop-blur-lg bg-color4/60  w-full py-10 absolute z-50`}>
          <ul className={ ` ${menu?"flex flex-col items-center  gap-8 hover:*:text-color2 font-semibold text-lg *:duration-150":""}`}>
            <NavLink onClick={()=>menu(false)} className={({ isActive }) => `${isActive ? "text-color2" : "text-color3"}`} to={"/"}>
              <li >Home</li>
            </NavLink>
            <NavLink onClick={()=>menu(false)} className={({ isActive }) => `${isActive ? "text-color2" : "text-color3"}`} to={"/project"}>
              <li>Projects</li>
            </NavLink>
            {/* <Link onClick={() => handleScrollToServices("services")}>
              <li>Services</li>
            </Link>
            <Link onClick={() =>{ handleScrollToServices("about"),
              menu(false)
            }}>
              <li>About</li>
            </Link> */}
            <NavLink onClick={()=>menu(false)} className={({ isActive }) => `${isActive ? "text-color2" : "text-color3"}`} to={"/contect"}>
              <li>Contect</li>
            </NavLink>

            <button className='bg-color3 text-white p-2 px-7'>Portfolio</button>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Nav
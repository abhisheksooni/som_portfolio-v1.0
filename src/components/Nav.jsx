import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoicon from "../Images/icon22.png"
function Nav() {

  const [menu, setmenu] = useState(false)
  const [contect, setContect] = useState(false)

  const handleScrollToServices = (e) => {

    const servicesElement = document.getElementById(e)
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
   
  }


  return (
    <>
      <nav className='flex justify-between px-10 py-5'>
        <div className="flex items-center ">
          <div className=" bg-color6/70 rounded-full">
            <img className='w-10 '  src={logoicon} alt="" />
          </div>
          <p className='ml-2'>Rending</p>
        </div>
        <div className="flex">
          <ul className='flex items-center gap-8'>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/project"}>
              <li>Projects</li>
            </NavLink>
            <Link onClick={() => handleScrollToServices("services")}>
              <li>Services</li>
            </Link>
            <Link onClick={() => handleScrollToServices("about")}>
              <li>About</li>
            </Link>
            <Link to={"contect"}>
              <li>Contect</li>
            </Link>

            <button className='bg-color3 text-white p-2 px-7'>Portfolio</button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
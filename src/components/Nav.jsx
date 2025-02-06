import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Nav() {

  const [menu, setmenu] = useState(false)
  const [contect, setContect] = useState(false)
  return (
    <>
      <nav className='flex justify-between px-10 py-5'>
<div className="flex">
<div className="w-5 h-5 bg-color3"></div>
<p className='ml-2'>Name</p>
</div>
<div className="flex">
  <ul className='flex items-center gap-8'>
    <li>HOME</li>
    <li>About</li>
    <li>Services</li>
    <li>Contect</li>
<button className='bg-color3 text-white p-2 px-7'>Portfolio</button>
  </ul>
</div>
      </nav>
    </>
  )
}

export default Nav
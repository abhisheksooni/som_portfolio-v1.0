import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu,X } from 'lucide-react'
function Nav() {

  const [menu,setmenu]= useState(false)
  return (
    <>
    <div className='bg-color2 rounded-full my-5 px-3 sm:px-8 mx-auto max-w-fit text-white '>
      {/* sm nav */}
   <ul className=" hidden justify-center items-center gap-10 text-lg font-medium sm:flex">
<li>
 <NavLink to={'/'} className={ ({isActive})=>`${isActive?'bg-color3':'bg-color2'} px-6 p-3 rounded-full hover:bg-color3`}>Home</NavLink>
</li>
<li>
 <NavLink to={'/about'} className={ ({isActive})=>`${isActive?'bg-color3':'bg-color2'} px-6 p-3 rounded-full hover:bg-color3`}>About Us</NavLink>
</li>
<div className=" bg-color3 w-[55px] h-[55px] my-1.5 rounded-full flex items-center justify-center text-3xl">SS</div>
<li>
 <NavLink to={'/project'} className={ ({isActive})=>`${isActive?'bg-color3':'bg-color2'} px-6 p-3 rounded-full hover:bg-color3`}>Project</NavLink>
</li>
<li>
 <NavLink  className={ ({isActive})=>`${isActive?'bg-color2':'bg-color2'} px-6 p-3 rounded-full hover:bg-color3`}>Contect Us</NavLink>
</li>
  
   </ul>
   {/* mobile nav */}
    <div className=" flex justify-between w-[88vw] sm:hidden">
    <div className=" bg-color3 w-[50px] h-[50px] my-1.5 rounded-full flex items-center justify-center text-3xl">SS</div>
    <button onClick={()=>setmenu(!menu)} >{menu? <X size={36}/>:<Menu size={36}/>}</button>
    </div>
    </div>
    {/* mobile nav menu */}
    <div className={` ${menu?'inline-block':'hidden'} flex justify-center mx-auto max-w-[92vw] rounded-3xl bg-color2 text-white text-2xl h-[400px]`}>
      <ul className='py-5 *:my-2 flex flex-col items-center w-[90%]'>
      <li>
 <NavLink to={'/'} className={({isActive})=>`${isActive?'text-color3':'text-white'} flex items-center p-3`}> <span>Home</span></NavLink>
</li>
 <div className=" w-full h-[1px] bg-color4 my-2 rounded-full"></div>
<li>
 <NavLink to={'/about'} className={ ({isActive})=>`${isActive?'text-color3':'text-white'} `}>About Us</NavLink>
</li>
<div className=" w-full h-[1px] bg-color4 my-2 rounded-full"></div>
<li>
 <NavLink to={'/project'} className={ ({isActive})=>`${isActive?'text-color3':'text-white'} `}>Project</NavLink>
</li>
<div className=" w-full h-[1px] bg-color4 my-2 rounded-full"></div>
<li>
 <NavLink  className={ ({isActive})=>`${isActive?'text-color33':'text-white'}`}>Contect Us</NavLink>
 </li>
      </ul>
    </div>
    </>
  )
}

export default Nav
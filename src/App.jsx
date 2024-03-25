
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { img1,img2,img3,img4,img5,img6,img7,som1 } from './Imports/Images.js'
import { useEffect } from 'react'

function App() {

  const skills = [
   { img:img1},
   { img:img2},
   { img:img3},
   { img:img4},
   { img:img5},
   { img:img6},
   { img:img7},
  ]

  useEffect(()=>{
    window.scroll({top:0,behavior:'smooth'})
  },[])

  return (
    <>
    {/* hero */}
    <div className="h-[60px] lg:h-[120px]"></div>
      <section className='text-white flex justify-center items-center gap-10 lg:gap-20 my-20 flex-wrap max-w-[1800px] px-4 lg:px-0'>
          <div className="text-center lg:text-start">
            <h1 className='text-5xl poppins-bold'>I'm Somya Soni,</h1>
            <h1 className='text-5xl poppins-bold py-1.5'>Interion Designer</h1>
            <p className='max-w-[500px] my-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam excepturi similique error optio amet quis reprehenderit eum</p>
            <div className="my-4">
              <button className='bg-white text-color1 font-semibold py-2 px-6 rounded-full mr-3'>About</button>
              <button className='bg-color3 text-white font-semibold py-2 px-6 rounded-full'>Download CV</button>
            </div>
          </div>
          <div className="w-[320px]">
            <img className='bg-color3 w-full h-[450px] rounded-3xl' src={som1} alt="" />
          </div>
      </section>
      {/* Skills */}
      <section className=' bg-color2 text-center pt-5 pb-16 text-white'>
      <p className='text-2xl font-semibold my-4 mb-6'>My Skills</p>
      <div className=" flex justify-center flex-wrap px-5 md:px-0 gap-5 hover:*:scale-125">
        {
          skills.map((i)=>(
            <img key={i.img} className='max-w-[60px] ' src={i.img} alt="" />
          ))
        }
      </div>
      </section>
    </>
  )
}

export default App

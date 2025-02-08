
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from 'react-responsive-carousel'
import { useEffect } from 'react'
import { project1 } from './Imports/Images'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {



  useEffect(() => {
    // window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <section>
        {/* section 1 */}
        <section>
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} >

            <div >
              <img src={project1} alt="" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div >
              <img src={project1} alt="" />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div >
              <img src={project1} alt="" />
              {/* <p className="legend">Legend 3</p> */}
            </div>
            <div >
              <img src={project1} alt="" />
              {/* <p className="legend">Legend 4</p> */}
            </div>
          </Carousel>
        </section>
        {/* section 2 */}
        <section>
          <p>Crafting Inspiring Interiors</p>
          <h2>Elevating Spaces</h2>
          <div className=" flex gap-5 p-8 justify-center *:w-[33rem] *:h-[35rem]">

            <div className="bg-color3 rounded-md p-10 relative">
              <div className="bg-white rounded-full p-1 w-[5rem] h-[5rem]"> </div>

              <div className="text-color1 absolute bottom-10">

                <p className='font-extrabold text-4xl'>New York's Premier</p>
                <p className='text-[14px] w-[260px] mt-4 text-color1/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta consequuntur amet. Aut velit consectetur eligendi vero illum earum. Inventore odit,</p>
                <p className='text-xs w-[260px] mt-8 text-color1/50' >- Innovative Solutions</p>
              </div>

            </div>
            <div className="bg-color2 rounded-md p-10 relative">
              <div className="bg-white rounded-full p-1 w-[5rem] h-[5rem]"> </div>

              <div className="text-white absolute bottom-10">

                <p className='font-extrabold text-4xl'>New York's Premier</p>
                <p className='text-[14px] w-[260px] mt-4 text-color1/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta consequuntur amet. Aut velit consectetur eligendi vero illum earum. Inventore odit,</p>
                <p className='text-xs w-[260px] mt-8 text-color1/50' >- Innovative Solutions</p>
              </div>

            </div>
            <div className="bg-white rounded-md p-10 relative">
              <div className="bg-color3 rounded-full p-1 w-[5rem] h-[5rem]"> </div>

              <div className="text-color3 absolute bottom-10">

                <p className='font-extrabold text-4xl'>New York's Premier</p>
                <p className='text-[14px] w-[260px] mt-4 text-color3/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta consequuntur amet. Aut velit consectetur eligendi vero illum earum. Inventore odit,</p>
                <p className='text-xs w-[260px] mt-8 text-color3/50' >- Innovative Solutions</p>
              </div>

            </div>



          </div>
        </section>
        {/* section 3 */}
        <section className='p-10 px-12'>
          <div className="flex justify-between py-5">
            <p>Featured Project</p>
            <p>Ore</p>
          </div>
          <section className='flex gap-5 py-10'>
            <div className="bg-color3 w-[15rem] h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color1'>Living Room</p>
            </div>
            <div className="bg-color2 w-[15rem] h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color1'>Living Room</p>
            </div>
            <div className="bg-color4 w-[15rem] h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color3'>Living Room</p>
            </div>
            <div className="bg-white w-[15rem] h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color3'>Living Room</p>
            </div>
            <div className="bg-whiteh-[12rem] flex items-center w-[25rem]">
              <p className=' text-color3/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem modi minima ipsam id! Dolorem eos amet velit nulla, saepe placeat nam atque aliquid itaque. Quisquam iusto omnis provident laboriosam.</p>
            </div>
          </section>
        </section>
        {/* section 4 */}
        <section id='about' className=' flex flex-wrap h-[60rem]'>
          {/* left */}
          <section className='bg-white p-14 w-[67%] h-full '>
            <h2 className='text-color2'>Hospitality Spaces</h2>
            <h2 className='text-7xl mt-4'>Luxurious Retreats</h2>
            <div className=" flex gap-7 mt-10">
              <div className="w-1/2 ">
                <div className="bg-color2  h-[30rem] rounded-lg"></div>
                <h2 className='mt-4 mb-5 text-3xl font-semibold'>Lobby</h2>
                <p className='text-color3/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex justify-between mt-2" >
                  <p className='text-color3/60'>Explore</p>
                  <button className='bg-color2 px-4 rounded-full text-color3 '>
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <div className="bg-color2  h-[30rem] rounded-lg"></div>
                <h2 className='mt-4 mb-5 text-3xl font-semibold'>Lobby</h2>
                <p className='text-color3/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex justify-between mt-2">
                  <p className='text-color3/60'>Explore</p>
                  <button className='bg-color2 px-4 rounded-full text-color3 '>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

          </section>
          {/* right */}
          <section className='bg-color3 w-[33%] h-full flex items-center justify-center flex-col'>

            <div className="rounded-full w-[250px] h-[250px] bg-white "></div>
            {/* <img src="" alt="" /> */}
            <div className="max-w-[300px] text-white">
              <h2 className='font-medium text-xl'>About Us</h2>
              <p className='text-white/50 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro tempora doloremque blanditiis voluptatum nam enim. Dignissimos consequuntur quia tempore blanditiis? Eos, vero suscipit impedit iusto odio quia voluptas optio!</p>
              <h2 className='mt-6 mb-3 text-lg'>Meet Our Founder</h2>
              <p className='text-white/50'>Lorem ipsum dolor sit amet consectetur, Suscipit ullam, ea harum</p>
              <p className='text-white/50 text-sm mt-4'> illum nihil vitae dolores, porro possimus, corrupti ratione eligendi voluptatibus laudantium incidunt? Quidem rerum cum unde sequi velit?</p>
            </div>
          </section>

        </section>
        {/* rev */}
        <section className=' h-48 gap-4 justify-center items-center outline'>
<div className="bg-color6 w-72 h-48"></div>
<div className="bg-color2 w-20 h-20"></div>
<div className="bg-color1 w-20 h-20"></div>
        </section>
        {/* section 5 */}
        <section className='bg-color2 w-full pb-[6rem]'>
          <div className="flex justify-center flex-col items-center py-20">
            <h2 className='text-color5 text-3xl'>Ready to Transform Your</h2>
            <div className=" flex gap-3 mt-5">
              <button className='rounded-full bg-color5 '><p className='px-6 font-medium py-1.5 text-sm'>Get Started</p></button>
              <button className='rounded-full bg-color5 '><p className='px-6 font-medium py-1.5 text-sm'>Contect Us</p></button>

            </div>
          </div>
          <section className='flex gap-5 justify-center *:rounded-md mt-5'>

            <div className="w-[35rem] h-[35rem] bg-white"> add</div>
            <div className="w-[35rem] h-[35rem] bg-white">add</div>
            <div className="w-[35rem] h-[35rem] bg-white">add</div>
          </section>
        </section>
        {/* section 6 Our Services */}
        <section id='services' className='bg-color3 pb-16'>
          <h2 className='text-color1 text-5xl text-center py-12'>Our Services</h2>
          <section className='flex gap-5 justify-center *:rounded-md mt-5'>

            <div className="w-[35rem] h-[35rem] bg-color6"></div>
            <div className="w-[35rem] h-[35rem] bg-color6"></div>
            <div className="w-[35rem] h-[35rem] bg-color6"></div>
          </section>
        </section>
        {/* section 7 FAQs */}
        <section className='bg-color3 flex  w-full flex-wrap h-[50rem] pt-6 py-10'>
          <div className="w-[60%] p-12 flex flex-col justify-center">
            <div className="max-w-[70%]">
              <span className='text-color2'>FAQs</span>
              <p className='text-6xl mt-7 mb-10 text-white'>Frequently Asked</p>
              <p className='my-8 text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam iusto molestias dignissimos molestiae dolore. Nostrum dolore </p>
              <p className='mb-10 text-white/30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam iusto molestias dignissimos molestiae dolore. Nostrum dolore </p>

              <button className='rounded-full bg-color2  text-white'><p className='px-8 font-medium py-2.5 text-sm'>Contect Us</p></button>
            </div>
          </div>
          <div className="w-[40%] bg-white">
            Image add</div>
        </section>
        {/* section 8 Quick Link */}
        <section className='flex bg-color3 gap-8 py-16 justify-center'>
          <div className="flex gap-5 *:rounded-md">
            <div className="w-[20rem] h-[20rem] bg-white"></div>
            <div className="w-[20rem] h-[20rem] bg-white"></div>
            <div className="w-[20rem] h-[20rem] bg-white"></div>
          </div>
          <div className="">
            <p className='text-color2 m-5'>Quick Links</p>
            <div className="bg-color6 p-5 px-10 rounded-xl max-w-[400px]">
              <p className='text-2xl font-semibold mb-4 text-white'>Home</p>
              <p className='text-white/50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, maiores molestiae architecto quod nobis adipisci impedit omnis repellendus blanditiis amet quasi repellat libetore quas?</p>
            </div>
              <button className="rounded-full bg-color6 px-8 py-1.5 mt-4 ">Contect</button>
          </div>
        </section>
      </section>
    </>
  )
}

export default App


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react'


import CustomSlider from "./components/costomSlider/custom.slider"
import { project1, som, t1, t2, t3 } from './Imports/Images'

function App() {

  const images = [
    {
      imgURL: t1,
      imgAlt: t1
    },
    {
      imgURL: t2,
      imgAlt: t2
    },
    {
      imgURL: t3,
      imgAlt: t3
    },

  ];



  useEffect(() => {
    // window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <section className=''>
        {/* section 1 */}
        <section>
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
        </section>
        {/* section 2 Elevating Spaces */}
        <section>
          <div className="text-center my-4">
            <p className='text-color3/60 mt-7 text-xl'>Crafting Inspiring Interiors</p>
            <h2 className='text-5xl unkempt-bold my-3'>Elevating Spaces</h2>
          </div>

          <div className=" oberdd snap-x  overflow-x-scroll flex *:mb-5 lg:mb-0 gap-5 p-8 justify-centerx lg:*:w-[33rem] ">

            <div className=" snap-center bg-color3 rounded-md p-10 
            ">


              <div className=" text-color1  bottom-10">

                <p className='font-extrabold text-4xl'>New York's Premier</p>
                <p className='text-[14px] w-[260px] mt-4 text-color1/50'>Welcome to our Interior Design Porfolio, wher we transform living spaces into personalized</p>
                <p className='text-xs w-[260px] mt-8 text-color1/50' >Innovative Solutions</p>
              </div>

            </div>
            <div className=" snap-center bg-color2 rounded-md p-10 
            ">


              <div className="text-white  bottom-10">

                <p className='font-extrabold text-4xl'>Thoughtful Desion</p>
                <p className='text-[14px] w-[260px] mt-4 text-color1/50'>At our studio, we believe that a well-desined interior car enhance your everyday</p>
                <p className='text-xs w-[260px] mt-8 text-color1/50' >Exceptional Craftsmanship</p>
              </div>

            </div>
            <div className="snap-center bg-white rounded-md p-10 ">


              <div className="text-color3  bottom-10">

                <p className='font-extrabold text-4xl'>Designing For You</p>
                <p className='text-[14px] w-[260px] mt-4 text-color3/50'>Our them of experienced designers is passionate about collaborating with clients</p>
                <p className='text-xs w-[260px] mt-8 text-color3/50' >Elevatin Lifestyles</p>
              </div>

            </div>



          </div>
        </section>
        {/* section 3 Featured project */}
        <section className='p-3 lg:px-12'>
          <div className="flex justify-between py-5">
            <p className='text-color3/60 text-xl'>Featured Project</p>


          </div>
          <section className=' lg:flex *:mb-5 lg:*:mb-0 gap-5 py-10 '>
            <div className="bg-color3 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color1'>Living Room</p>
            </div>
            <div className="bg-color2 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color1'>Bedroom</p>
            </div>
            <div className="bg-color4 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color3'>Dining</p>
            </div>
            <div className="bg-white w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color3'>Home</p>
            </div>
            <div className="bg-whiteh-[12rem] flexx  items-center w-[25rem]">
              <h2 className='mb-4'>Our Process</h2>
              <p className=' text-color3/60'>At Som soni. w take pride in our thoughtful approach to interior design, guiding clients through every step of the process to ensure their vision is brought to life seamlessly.</p>
              {/* <p className='mt-3'>Discover More</p> */}
            </div>
          </section>
        </section>
        {/* section 4  Luxurious Retreats & about us*/}
        <section id='about' className=' lg:flex flex-wrap lg:h-[60rem]'>
          {/* left */}
          <section className='bg-white p-10 lg:p-14 lg:w-[67%] h-full '>
            <h2 className='text-color2'>Hospitality Spaces</h2>
            <h2 className='text-7xl mt-4 unkempt-bold'>Luxurious Retreats</h2>

            <div className=" flex gap-7 mt-10 flex-col md:flex-row ">
              <div className="">
                <div className="image1 w-full lg:w-[570px] h-[480px] rounded-lg">

                </div>

                <h2 className='mt-4 mb-5 text-3xl font-semibold'>Lobby</h2>
                <p className='text-color3/60'>Immerse yourself in our hospitality portfolio, where we craft welcoming environments that.</p>
                <div className="flex justify-between mt-2" >
                  <p className='text-color3/60'>Explore</p>
                  <button className='bg-color2 px-4 rounded-full text-color3 '>
                    Learn More
                  </button>
                </div>
              </div>
              <div className="">
                <div className="image2 w-full lg:w-[570px]  h-[480px] rounded-lg">
                  {/* <img className='image2 w-[570px] h-[480px] rounded-lg ' src={t1} alt={t1} /> */}
                </div>

                <h2 className='mt-4 mb-5 text-3xl font-semibold'>Lobby</h2>
                <p className='text-color3/60'>Our design team specializes in designing sophisticated and comfortable guest suites that </p>
                <div className="flex justify-between mt-2">
                  <p className='text-color3/60'>Discover</p>
                  <button className='bg-color2 px-4 rounded-full text-color3 '>
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </section>
          {/* right */}
          <section className='bg-color3 lg:w-[33%] py-16 h-full flex items-center justify-center flex-col p-5'>

            <div className="rounded-full w-[26rem] h-[26rem] lg:w-[250px] lg:h-[250px] bg-white ">
              <img className='rounded-full' src={som} alt="" />

            </div>
            <p className='text-white text-xl mt-3 text-white/50 mb-4'>Som Soni</p>
            {/* <img src="" alt="" /> */}
            <div className="max-w-[430px] text-white">
              <h2 className='font-medium mt-8 lg:mt-0 text-xl'>About Us</h2>
              <p className='text-white/50 mt-2'>At AS Renderings, we are a team of passionate interior designers and 3D visualizers dedicated to transforming spaces into exceptional living and working environments. We specialize in 3D visualization, detailed space planning, and color selection to bring your ideas to life. Our commitment is to deliver designs that blend creativity with functionality, ensuring each project reflects a unique character and style.</p>
              <h2 className='mt-6 mb-3 text-lg'>Meet Our Founder</h2>
              <p className='text-white/50'>Som Soni, the creative mind behind AS Renderings, brings a keen eye for detail and a deep understanding of design aesthetics. With a background in interior design and expertise in 3D visualization, Somya is dedicated to crafting immersive environments that resonate with functionality and style. From selecting the perfect color palette to curating every detail, his vision is to create spaces that inspire and delight.</p>
              {/* <p className='text-white/50 text-sm mt-4'> From selecting the perfect color palette to curating furnishings</p> */}
            </div>
          </section>

        </section>
        {/* rev */}
        {/* <section className=' w-full h-48  py-16 flex flex-col justify-center items-center  overflow-scroll '>
<div className="bg-color6 w-1/2 h-48"></div>
<div className="bg-color2 w-1/2 h-48"></div>
<div className="bg-white w-1/2 h-48"></div>
        </section> */}
        {/* section 5 */}
        <section className='bg-color2 w-full px-6 lg:px-0 pb-[2rem] lg:pb-[6rem]'>
          <div className="flex justify-center flex-col items-center py-5 lg:py-20">
            <h2 className='text-color5 text-3xl'>Ready to Transform Your</h2>
            <div className=" flex gap-3 mt-5">
              <button className='rounded-full bg-color5 '><p className='px-6 font-medium py-1.5 text-sm'>Get Started</p></button>
              <button className='rounded-full bg-color5 '><p className='px-6 font-medium py-1.5 text-sm'>Contect Us</p></button>

            </div>
          </div>
          <section className='flex flex-wrap gap-4 lg:gap-5 justify-center *:rounded-md mt-5'>

            <div className=" img11 max-w-[35rem] w-full h-[23rem] bg-white">

            </div>
            <div className=" img12 max-w-[35rem] w-full  h-[23rem] bg-white">

            </div>
            <div className=" img13 max-w-[35rem] w-full h-[23rem]  bg-white">

            </div>
          </section>
        </section>

        {/* section 6 Our Services */}
        <section id='services' className='  bg-color3 pb-8 lg:pb-16 px-6 '>
          <h2 className='text-color1 text-5xl text-center py-12'>Our Services</h2>
          <section className='oberdd snap-x overflow-x-scrol flex *:mb-5 lg:*:mb-0  gap-5 justify-centerg *:rounded-md mt-5 *:w-[350px] '>

            <div className=" snap-center   lg:h-[35rem]  h-[26rem] bg-color6">
              <p>Space Planning</p>
              <p>Interior Design</p>
            </div>
            <div className="snap-center  lg:h-[35rem]  h-[26rem] bg-color6">
              <p>Project Management</p>
              <p>Discover More</p>
            </div>
            <div className="snap-center  lg:h-[35rem]  h-[26rem] bg-color6">
              <p>Sustainability</p>
              <p>Eco-Friendly</p>
            </div>
          </section>
        </section>

        {/* section 7 FAQs */}
        <section className='bg-color3 flex  w-full flex-wrap lg:h-[50rem] pt-6 py-10'>

          <div className="lg:w-[50%] p-12 flex flex-col justify-center">
            <div className="lg:max-w-[90%]">
              <span className='text-color2'>FAQs</span>
              <p className=' text-4xl lg:text-6xl mt-7 mb-10 text-white'>Frequently Asked Qunctions</p>
              <p className='my-8 text-white/70'>Have questions about our interior design services or the design process? Check out our FAQs section to find the answers you're </p>
              <p className='mb-10 text-white/30'>If you can't find the information you need, don't hesitate to reach out to our team. We're here to guide you through every step of your interior design journey and ensure your vision </p>

              <button className='rounded-full bg-color2  text-white'><p className='px-8 font-medium py-2.5 text-sm'>Contect Us</p></button>
            </div>
          </div>
          <div className=" image1 lg:w-[49%] m-4 md:m-0 w-full h-[40rem] rounded-xl bg-white ">
          </div>
        </section>
        {/* section 8 Quick Link */}
        <section className='lg:flex bg-color3 gap-8 lg:py-16 px-6 lg:px-0 justify-center'>
          <div className="flex flex-wrap  gap-5 *:rounded-md">
            <div className="md:w-[20rem] max-h-[20rem] img11 w-[8rem] h-[8rem] md:h-[20rem]  bg-white">h</div>
            <div className="md:w-[20rem] max-h-[20rem] img12 w-[8rem] h-[8rem] md:h-[20rem] bg-white"></div>
            <div className="md:w-[20rem] max-h-[20rem] img13 w-[8rem] h-[8rem] md:h-[20rem] bg-white"></div>
          </div>
          <div className="">
            <p className='text-color2 m-5'>Quick Links</p>
            <div className="bg-color6 p-5 px-10 rounded-xl  lg:max-w-[400px]">
              <p className='text-2xl font-semibold mb-4 text-white'>Home</p>
              <p className='text-white/50'>Discover our portfolio, learn about our services, and get in touch to start transforming your living or working space today</p>
            </div>
            <button className="rounded-full bg-color6 px-8 py-1.5 mt-4 ">Contect</button>
          </div>
        </section>
      </section>
    </>
  )
}

export default App

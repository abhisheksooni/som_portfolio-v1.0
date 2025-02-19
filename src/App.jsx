
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react'


import CustomSlider from "./components/costomSlider/custom.slider"

function App() {

  const images = [
    {
      imgURL:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-1"
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-2"
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-3"
    },
    {
      imgURL:
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-4"
    }
  ];



  useEffect(() => {
    // window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <section  className=''>
        {/* section 1 */}
        <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
<section>
<section>

</section>
</section> 
        {/* section 2 */}
        <section>
          <p>Crafting Inspiring Interiors</p>
          <h2>Elevating Spaces</h2>
          <div className=" lg:flex  *:mb-5 lg:mb-0 gap-5 p-8 justify-center lg:*:w-[33rem] *:h-[35rem]">

            <div className="bg-color3 rounded-md p-10 relative">
              <div className="bg-white rounded-full p-1 w-[5rem] h-[5rem]"> </div>

              <div className="text-color1 absolute bottom-10">

                <p className='font-extrabold text-4xl'>New York's Premier</p>
                <p className='text-[14px] w-[260px] mt-4 text-color1/50'>Welcome to our Interior Design Porfolio, wher we transform living spaces into personalized</p>
                <p className='text-xs w-[260px] mt-8 text-color1/50' >Innovative Solutions</p>
              </div>

            </div>
            <div className="bg-color2 rounded-md p-10 relative">
              <div className="bg-white rounded-full p-1 w-[5rem] h-[5rem]"> </div>

              <div className="text-white absolute bottom-10">

                <p className='font-extrabold text-4xl'>Thoughtful Desion</p>
                <p className='text-[14px] w-[260px] mt-4 text-color1/50'>At our studio, we believe that a well-desined interior car enhance your everyday</p>
                <p className='text-xs w-[260px] mt-8 text-color1/50' >Exceptional Craftsmanship</p>
              </div>

            </div>
            <div className="bg-white rounded-md p-10 relative">
              <div className="bg-color3 rounded-full p-1 w-[5rem] h-[5rem]"> </div>

              <div className="text-color3 absolute bottom-10">

                <p className='font-extrabold text-4xl'>Designing For You</p>
                <p className='text-[14px] w-[260px] mt-4 text-color3/50'>Our them of experienced designers is passionate about collaborating with clients</p>
                <p className='text-xs w-[260px] mt-8 text-color3/50' >Elevatin Lifestyles</p>
              </div>

            </div>



          </div>
        </section>
        {/* section 3 Featured project */}
        <section className='p-10 lg:px-12'>
          <div className="flex justify-between py-5">
            <p>Featured Project</p>
            
          </div>
          <section className=' lg:flex *:mb-5 lg:*:mb-0 gap-5 py-10'>
            <div className="bg-color3 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color1'>Living Room</p>
            </div>
            <div className="bg-color2 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color1'>Bedroom</p>
            </div>
            <div className="bg-color4 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color3'>Dining</p>
            </div>
            <div className="bg-white w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center">
              <p className='text-xl font-bold  text-color3'>Home</p>
            </div>
            <div className="bg-whiteh-[12rem] flexx  items-center w-[25rem]">
              <h2 className='mb-4'>Our Process</h2>
              <p className=' text-color3/60'>At Som soni. w take pride in our thoughtful approach to interior design, guiding clients through every step of the process to ensure their vision is brought to life seamlessly.</p>
              <p className='mt-3'>Discover More</p>
            </div>
          </section>
        </section>
        {/* section 4 */}
        <section id='about' className=' lg:flex flex-wrap lg:h-[60rem]'>
          {/* left */}
          <section className='bg-white p-14 lg:w-[67%] h-full '>
            <h2 className='text-color2'>Hospitality Spaces</h2>
            <h2 className='text-7xl mt-4'>Luxurious Retreats</h2>
            <div className=" flex gap-7 mt-10 flex-wrap ">
              <div className="lg:w-1/2 w-full">
                <div className="bg-color2  h-[30rem] rounded-lg"></div>
                <h2 className='mt-4 mb-5 text-3xl font-semibold'>Lobby</h2>
                <p className='text-color3/60'>Immerse yourself in our hospitality portfolio, where we craft welcoming environments that.</p>
                <div className="flex justify-between mt-2" >
                  <p className='text-color3/60'>Explore</p>
                  <button className='bg-color2 px-4 rounded-full text-color3 '>
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-color2  h-[30rem] rounded-lg"></div>
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

            <div className="rounded-full w-[26rem] h-[26rem] lg:w-[250px] lg:h-[250px] bg-white "></div>
            {/* <img src="" alt="" /> */}
            <div className="max-w-[300px] text-white">
              <h2 className='font-medium mt-8 lg:mt-0 text-xl'>About Us</h2>
              <p className='text-white/50 '>At som soni, we are a team of passionate and experienced interior designers dedicated to creating exceptional living and working spaces that reflect the unique character</p>
              <h2 className='mt-6 mb-3 text-lg'>Meet Our Founder</h2>
              <p className='text-white/50'>With a keen eye for detail and a deep understanding of</p>
              <p className='text-white/50 text-sm mt-4'> From selecting the perfect color palette to curating furnishings</p>
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
          <section className='flex gap-4 lg:gap-5 justify-center *:rounded-md mt-5'>

            <div className="max-w-[35rem] w-full max-h-[35rem] bg-white"> 
             add
            </div>
            <div className="max-w-[35rem] w-full max-h-[35rem] bg-white">
            add
            </div>
            <div className="max-w-[35rem] w-full h-[8rem] max-h-[35rem] bg-white">
            add
            </div>
          </section>
        </section>
        {/* section 6 Our Services */}
        <section id='services' className='bg-color3 pb-8 lg:pb-16 px-6 '>
          <h2 className='text-color1 text-5xl text-center py-12'>Our Services</h2>
          <section className='lg:flex *:mb-5 lg:*:mb-0  gap-5 justify-center *:rounded-md mt-5'>

            <div className="lg:w-[35rem] lg:h-[35rem] w-full h-[26rem] bg-color6">
            <p>Space Planning</p>
            <p>Interior Design</p>
            </div>
            <div className="lg:w-[35rem] lg:h-[35rem] w-full h-[26rem] bg-color6">
            <p>Project Management</p>
            <p>Discover More</p>
            </div>
            <div className="lg:w-[35rem] lg:h-[35rem] w-full h-[26rem] bg-color6">
            <p>Sustainability</p>
            <p>Eco-Friendly</p>
            </div>
          </section>
        </section>
        {/* section 7 FAQs */}
        <section className='bg-color3 flex  w-full flex-wrap lg:h-[50rem] pt-6 py-10'>
          <div className="lg:w-[60%] p-12 flex flex-col justify-center">
            <div className="lg:max-w-[70%]">
              <span className='text-color2'>FAQs</span>
              <p className=' text-4xl lg:text-6xl mt-7 mb-10 text-white'>Frequently Asked Qunctions</p>
              <p className='my-8 text-white/70'>Have questions about our interior design services or the design process? Check out our FAQs section to find the answers you're </p>
              <p className='mb-10 text-white/30'>If you can't find the information you need, don't hesitate to reach out to our team. We're here to guide you through every step of your interior design journey and ensure your vision </p>

              <button className='rounded-full bg-color2  text-white'><p className='px-8 font-medium py-2.5 text-sm'>Contect Us</p></button>
            </div>
          </div>
          <div className="lg:w-[40%] w-full h-[30rem] bg-white">
            Image add</div>
        </section>
        {/* section 8 Quick Link */}
        <section className='lg:flex bg-color3 gap-8 lg:py-16 px-6 lg:px-0 justify-center'>
          <div className="flex gap-5 *:rounded-md">
            <div className="max-w-[20rem] max-h-[20rem] w-full h-[8rem]  bg-white">h</div>
            <div className="max-w-[20rem] max-h-[20rem] w-full h-[8rem] bg-white"></div>
            <div className="max-w-[20rem] max-h-[20rem] w-full h-[8rem] bg-white"></div>
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

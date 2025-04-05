
import "./App.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import CustomSlider from "./components/costomSlider/custom.slider";
import {

  som,
  t1,

  t3,
  p11image1,
  p1image1,
} from "./Imports/Images";
import { NavLink } from "react-router-dom";

import WhatsappButton from "./components/WhatsappButton";
function App() {
  const images = [
    {
      imgURL: p11image1,
      imgAlt: p11image1,
    },
    {
      imgURL: t1,
      imgAlt: t1,
    },
    {
      imgURL: p1image1,
      imgAlt: p1image1,
    },
    {
      imgURL: t3,
      imgAlt: t3,
    },
  ];

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Home - Som soni</title>
      </Helmet>
      <section className="">
        {/* section 1 */}
        <section>
          <CustomSlider>
            {images.map((image, index) => {
              return (
                <img
                  loading="lazy"
                  key={index}
                  src={image.imgURL}
                  alt={image.imgAlt}
                />
              );
            })}
          </CustomSlider>
        </section>

        {/* section 2 Elevating Spaces */}
        <section>
          <div className="text-center my-4">
            <p className="text-color3/60 mt-7 text-xl">
              Crafting Inspiring Interiors
            </p>
            <h2 className="text-5xl unkempt-bold my-3 ">Elevating Spaces</h2>
          </div>
          <div className=" mt-8  text-center">
            <NavLink
              to={"/project"}
              className={
                "bg-color4  hover:bg-color2 duration-200 rounded-full py-2.5 text-color3 text-xl font-medium px-5 border border-color3 p-1"
              }
            >
              All Projects
            </NavLink>
          </div>

          <div className=" oberdd snap-x snap-mandatory *:snap-always overflow-x-scroll flex *:mb-5 lg:mb-0 gap-5 p-8 lg:justify-center lg:*:w-[33rem] ">
            <div
              className=" snap-center bg-color3 rounded-md p-10 
            "
            >
              <div className=" text-color1  bottom-10">
                <p className="font-extrabold text-4xl">
                  Welcome to AS Renderings
                </p>
                <p className="text-[16px]  mt-5 text-color1/50">
                  Step into a world where creativity meets functionality. At AS
                  Renderings, we bring your interior dreams to life with
                  stunning 3D visualizations and expert design solutions.
                </p>
              </div>
            </div>
            <div
              className=" snap-center bg-color2 rounded-md p-10 
            "
            >
              <div className="text-white  bottom-10">
                <p className="font-extrabold text-4xl">
                  Transforming Spaces, Elevating Lifestyles
                </p>
                <p className="text-[16px]  mt-5 text-color1/50">
                  Welcome to our interior design studio, where every detail is
                  crafted with passion. Explore our innovative concepts and
                  immersive 3D renderings designed to inspire.
                </p>
              </div>
            </div>
            <div className="snap-center bg-white rounded-md p-10 ">
              <div className="text-color3  bottom-10">
                <p className="font-extrabold text-4xl">
                  Designing Your Vision, Perfecting Every Detail
                </p>
                <p className="text-[16px]  mt-5 text-color3/50">
                  Your space tells a story, and we’re here to make it
                  extraordinary. From concept to visualization, AS Renderings
                  delivers bespoke designs tailored to your style.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 3 Featured project */}
        {/* <section className='p-3 lg:px-12'>
          <div className="flex justify-between py-5">
            <p className='text-color3/60 text-xl'>Featured Project</p>


          </div>
          <section className=' lg:flex *:mb-5 lg:*:mb-0 gap-5 py-10 '>
            <NavLink to={"/project/living"} className="bg-color3 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color1'>Living Room</p>
            </NavLink>
            <NavLink to={"/project/bedroom"} className="bg-color2 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color1'>Bedroom</p>
            </NavLink>
            <NavLink to={"/project/dining"} className="bg-color4 w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color3'>Dining</p>
            </NavLink>
            <NavLink to={"/project/home"} className="bg-white w-full h-[7rem] lg:w-[15rem] lg:h-[15rem] hover:scale-105 duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <p className='text-xl font-bold  text-color3'>Home</p>
            </NavLink>
            <div className="bg-whiteh-[12rem] flexx  items-center w-[25rem]">
              <h2 className='mb-4 text-xl font-bold'>Our Process</h2>
              <p className=' text-color3/60'>At <span className='font-semibold'>AS Rendering</span>, we take pride in our structured and thoughtful approach to interior design, ensuring every project is visually stunning and functionally efficient. Our process is designed to bring clarity and creativity to your space through detailed planning and visualization.</p>
          
            </div>
          </section>
        </section> */}
        {/* section 4  Luxurious Retreats & about us*/}
        <section id="about" className=" lg:flex flex-wrap lg:h-[60rem]">
          {/* left */}
          <section className="bg-white p-5 lg:p-14 lg:w-[67%] h-full ">
            <h2 className="text-color2">Hospitality Spaces</h2>
            <h2 className="text-7xl mt-4 unkempt-bold">Luxurious Retreats</h2>

            <div className=" flex gap-7 mt-10 flex-col md:flex-row ">
              <div className="">
                <div className="image1 w-full lg:w-[570px] h-[585px] rounded-lg"></div>

                <h2 className="mt-4 mb-5 text-3xl font-semibold">Guest Room</h2>
                <p className="text-color3/60">
                  A perfect blend of style and relaxation, our guest rooms offer
                  a cozy retreat with modern aesthetics and premium finishes.
                </p>
              </div>
              <div className="">
                <div className="image2 w-full lg:w-[570px]  h-[585px] rounded-lg"></div>

                <h2 className="mt-4 mb-5 text-3xl font-semibold">
                  Luxury Bath
                </h2>
                <p className="text-color3/60">
                  Designed for indulgence, our elegant bathrooms feature
                  high-end materials, ambient lighting, and a spa-like
                  atmosphere.{" "}
                </p>
              </div>
            </div>
          </section>
          {/* right */}
          <section className="bg-color3 lg:w-[33%] py-16 h-full flex items-center justify-center flex-col p-5">
            <div className="">
              <div className="rounded-full flex justify-center relative mb-2  w-[22rem] lg:w-[350px]  bg-white ">
                <img
                  loading="lazy"
                  className=" w-full rounded-full"
                  src={som}
                  alt=""
                />

                <p className=" absolute text-xl bottom-8   text-color3 font-medium bg-color1/25 backdrop-blur-[3px] rounded-full px-3 py-0.5">
                  Som Soni
                </p>
              </div>
            </div>

            <div className="max-w-[430px] text-white">
              <h2 className="font-medium mt-8 lg:mt-0 text-xl">About Us</h2>
              <p className="text-white/50 mt-2">
                At AS Renderings, we are a team of passionate interior designers
                and 3D visualizers dedicated to transforming spaces into
                exceptional living and working environments. We specialize in 3D
                visualization, detailed space planning, and color selection to
                bring your ideas to life. Our commitment is to deliver designs
                that blend creativity with functionality, ensuring each project
                reflects a unique character and style.
              </p>
              <h2 className="mt-6 mb-3 text-lg">Meet Our Founder</h2>
              <p className="text-white/50">
                Som Soni, the creative mind behind AS Renderings, brings a keen
                eye for detail and a deep understanding of design aesthetics.
                With a background in interior design and expertise in 3D
                visualization, Somya is dedicated to crafting immersive
                environments that resonate with functionality and style. From
                selecting the perfect color palette to curating every detail,
                his vision is to create spaces that inspire and delight.
              </p>
            </div>
          </section>
        </section>

        {/* section 5 */}
        <section className="bg-color2 w-full px-6 lg:px-0 pb-[2rem] lg:pb-[6rem]">
          <div className="flex justify-center flex-col items-center py-5 lg:py-20">
            <h2 className="text-color5 text-3xl">Ready to Transform Your</h2>
            <div className=" flex gap-3 mt-5">
              <button className="rounded-full bg-color5 px-6 font-medium  text-sm py-2">
                <NavLink to={"/contact"} className="">
                  Contact Us
                </NavLink>
              </button>
            </div>
          </div>
          <section className="flex flex-wrap gap-4 lg:gap-5 justify-center *:rounded-md mt-5">
            <div className=" img11 max-w-[35rem] w-full h-[23rem] bg-white"></div>
            <div className=" img12 max-w-[35rem] w-full  h-[23rem] bg-white"></div>
            <div className=" img13 max-w-[35rem] w-full h-[23rem]  bg-white"></div>
          </section>
        </section>

        {/* section 6 Our Services */}
        {/* <section id='services' className='  bg-color3 pb-8 lg:pb-16 px-6 '>
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
        </section> */}

        {/* section 7 FAQs */}
        <section className="bg-color3 flex  w-full flex-wrap lg:h-[50rem] pt-6 py-10">
          <div className="lg:w-[50%] p-12 flex flex-col justify-center">
            <div className="lg:max-w-[90%]">
              <span className="text-color2">FAQs</span>
              <p className=" text-4xl lg:text-6xl mt-3 mb-10 text-white">
                Frequently Asked Questions
              </p>
              <p className="my-8 text-white/70">
                Have questions about our 3D visualizations, concept development,
                or 2D drawings? Find all the answers here. Check out our FAQs
                section to find the answers youre
              </p>
              <p className="mb-3 text-white">What services do you offer?</p>
              <p className="mb-3 text-white/40">
                We specialize in 3D visualization, concept development, and 2D
                drawings, ensuring a clear vision before execution.
              </p>
              <p className="mb-3 text-white">Do you provide revisions?</p>
              <p className="mb-3 text-white/40">
                Yes! We offer revisions to fine-tune the design according to
                your preferences.
              </p>
              <p className="mb-5 text-white">How long does a project take?</p>
              <p className="mb-3 text-white/40">
                Timelines vary based on complexity, but we always aim for
                efficient delivery without compromising quality.
              </p>
              <p className="mb-3 text-white">
                Do you offer full-site execution?
              </p>
              <p className="mb-3 text-white/40">
                No, we focus on the design and planning process, providing
                high-quality 3D visuals and 2D drawings. Execution is managed
                separately.
              </p>

              <p className="mb-5 text-white/40">
                Still have questions? Feel free to reach out to us for more
                details!
              </p>

              <button className="rounded-full bg-color2  text-white">
                <p className="px-8 font-medium py-2.5 text-sm">
                  {" "}
                  <NavLink to={"/contact"}>Contact Us</NavLink>{" "}
                </p>
              </button>
            </div>
          </div>
          <div className=" image1 lg:w-[49%] m-4 md:m-0 w-full h-[40rem] rounded-xl bg-white "></div>
        </section>
        {/* section 8 Quick Link */}
        <section className="lg:flex bg-color3 gap-8 lg:py-16 px-4 lg:px-0 items-center justify-center">
          <div className="flex  gap-3 *:rounded-md">
            <div className="md:w-[20rem] max-h-[20rem] img11 w-[8rem] h-[8rem] md:h-[20rem]  bg-white">
              h
            </div>
            <div className="md:w-[20rem] max-h-[20rem] img12 w-[8rem] h-[8rem] md:h-[20rem] bg-white"></div>
            <div className="md:w-[20rem] max-h-[20rem] img13 w-[8rem] h-[8rem] md:h-[20rem] bg-white"></div>
          </div>
          <div className="">
            <p className="text-color2 m-5">Quick Links</p>
            <div className="bg-color6 p-5 px-10 rounded-xl  lg:max-w-[400px]">
              <p className="text-2xl font-semibold mb-4 text-white">Home</p>
              <p className="text-white/50">
                At <span className="font-semibold">AS Rendering</span>, we take
                pride in our structured and thoughtful approach to interior
                design, ensuring every project is visually stunning and
                functionally efficient. Our process is designed to bring clarity
                and creativity to your space through detailed planning and
                visualization.
              </p>
            </div>

            <button className="rounded-full bg-color6 px-8 py-1.5 mt-4 ">
              <NavLink to={"/contact"} className={"text-color1"}>
                Contact
              </NavLink>
            </button>
          </div>
        </section>

        {/* <section>


<iframe width="503" height="895" src="https://www.youtube.com/embed/qwfKbPLWqc8" title="Modern Study Room Design #interiordesign #decoration #decor #homedecor #home #walldecor #homedesign" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section> */}

        {/*  */}
        <div className=" fixed z-50 -bottom-[90vh] -right-[40vw] lg:-right-[46vw] w-[100vw] h-[100vh]">
          <WhatsappButton />
        </div>
      </section>
    </>
  );
}

export default App;

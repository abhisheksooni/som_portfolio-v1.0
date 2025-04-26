import React from 'react'
import WhatsappButton from '../components/WhatsappButton';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';

function Services() {
      useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      }, [])
    return (
  <>
  <Helmet>
    <title>Services</title>
  </Helmet>
  <section className=' px-5 md:px-0 md:flex w-full justify-center gap-5  text-lg items-center '>
            <div className="md:w-[47%]    lg:h-[80vh] mb-10 md:mb-0 mt-5 md:mt-0">
                <p className='text-3xl text-center mb-5 uppercase'>our Process</p>
                
                <div className="  p-10  bg-color4 rounded-xl list-disc list-inside *:mb-5">

                <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p><span className='font-bold'>Understanding Client Vision</span> <br />
                        Our team refines the initial ideas into structured design concepts, ensuring functionality and aesthetics</p>
                    </div>
                <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p><span className='font-bold'>Concept Development</span> <br />
                        We begin by discussing your ideas, preferences, and requirements to create a design concept that aligns with your vision.</p>
                    </div>
                <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p><span className='font-bold'>2D Drawings & Space Planning </span> <br />
                        We create detailed 2D layouts, including furniture placement, material selections, and design specifications to guide the overall concept.</p>
                    </div>
                <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p><span className='font-bold'>3D Visualizations & Renders</span> <br />
                        We transform the concept into high-quality 3D visuals, providing a realistic preview of the final design. This helps clients make informed decisions before any physical work begins.</p>
                    </div>
                <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p><span className='font-bold'>Client Feedback & Revisions</span> <br />
                        We collaborate closely with clients, making necessary adjustments to ensure the final renderings align perfectly with their expectations.</p>
                    </div>

                </div>
            </div>
            <div className="md:w-[47%]  lg:h-[80vh]  mb-10 md:mb-0">

                <p className='text-3xl mb-5 text-center uppercase'>Services</p>
                <div className="bg-color4 p-10 rounded-xl list-disc list-inside *:mb-5">
                    <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p><span className='font-bold'>3D Visualizations & Renders</span> <br />
                            High-quality, photorealistic 3D renders for residential and commercial spaces
                            Exterior and interior visualization to showcase design concepts
                            Lighting and material detailing for a realistic preview</p>
                    </div>

                    <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p> <span className='font-bold'>Concept Development</span>  <br />

                            Creative ideation based on client requirements and preferences

                            Mood boards, color palettes, and material selection

                            Space optimization strategies for efficient layouts</p>

                    </div>
                    <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p> <span className='font-bold'>2D Drawings & Space Planning</span>  <br />

                            Floor plans, elevations, and detailed layouts

                            Furniture placement and material specifications

                            CAD drawings for precise execution</p>

                    </div>
                    <div className="flex gap-4 items-start ">
                        <div className="bg-black p-1 h-1 mt-2 w-1 rounded-full"></div>
                        <p> <span className='font-bold'>Color & Material Selection</span>  <br />

                            Guidance on the best material combinations for a cohesive look

                            Selection of paint colors, textures, and finishes

                            Coordination with suppliers for material sourcing</p>

                    </div>



                </div>
            </div>
            <div className=" fixed z-50 -bottom-[90vh] -right-[40vw] lg:-right-[46vw] w-[100vw] h-[100vh]">
        <WhatsappButton/>
        </div>
        </section>
  </>
    )
}

export default Services
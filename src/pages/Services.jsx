import React from 'react'

function Services() {
    return (
        <section className='flex w-full justify-center gap-5  text-lg items-center '>
            <div className="w-[50%]  ">
                <p className='text-3xl text-center mb-5 uppercase'>our Process</p>
                <ul className="  p-10  bg-color4 rounded-xl list-disc list-inside *:mb-5">
                    <li>Understanding Client Vision – We begin by discussing your ideas, preferences, and requirements to create a design concept that aligns with your vision.</li>

                    <li>Concept Development – Our team refines the initial ideas into structured design concepts, ensuring functionality and aesthetics.</li>

                    <li>2D Drawings & Space Planning – We create detailed 2D layouts, including furniture placement, material selections, and design specifications to guide the overall concept.</li>

                    <li>3D Visualizations & Renders – We transform the concept into high-quality 3D visuals, providing a realistic preview of the final design. This helps clients make informed decisions before any physical work begins.</li>

                    <li>Client Feedback & Revisions – We collaborate closely with clients, making necessary adjustments to ensure the final renderings align perfectly with their expectations.</li>
                </ul>
            </div>
            <div className="w-[50%] ">

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

                    <p>2D Drawings & Space Planning <br />

                        Floor plans, elevations, and detailed layouts

                        Furniture placement and material specifications

                        CAD drawings for precise execution</p>
                    <p>Color & Material Selection <br />

                        Guidance on the best material combinations for a cohesive look

                        Selection of paint colors, textures, and finishes

                        Coordination with suppliers for material sourcing</p>

                </div>
            </div>
        </section>
    )
}

export default Services
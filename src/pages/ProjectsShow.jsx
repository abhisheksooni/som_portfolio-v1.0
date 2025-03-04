import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  p10image1,
  p10image2,
  p10image3,
  p10image4,
  p1image1,
  p1image2,
  p1image3,
  p2image1,
  p2image2,
  p2image3,
  p2image4,
  p2image5,
  p2image6,
  p3image1,
  p4image1,
  p4image2,
  p4image3,
  p4image4,
  p4image5,
  p4image6,
  p5image1,
  p5image2,
  p5image3,
  p5image4,
  p5image5,
  p6image1,
  p6image2,
  p8image1,
  p8image2,
  p8image3,
  p9image1,
  p9image2,
  p9image3, } from '../Imports/Images'
  import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function ProjectsShow() {
  const bathroomimage = [
    {
      id: 21,
      img: p2image1
    },
    {
      id: 22,
      img: p2image2
    },
    {
      id: 23,
      img: p2image3
    },
    {
      id: 24,
      img: p2image4
    },
    {
      id: 25,
      img: p2image5
    },
    {
      id: 26,
      img: p2image6
    },
  ]
  const bathroom2image = [
    {
      id: 41,
      img: p4image1
    },
    {
      id: 42,
      img: p4image2
    },
    {
      id: 43,
      img: p4image3
    },
    {
      id: 44,
      img: p4image4
    },
    {
      id: 45,
      img: p4image5
    },
    {
      id: 46,
      img: p4image6
    },
  ]
  const keychenimage = [
    {
      id: 61,
      img: p6image1
    },
    {
      id: 62,
      img: p6image2
    },
  ]
  const keycheinimage = [
    {
      id: 101,
      img: p10image1
    },
    {
      id: 102,
      img: p10image2
    },
    {
      id: 103,
      img: p10image3
    },
    {
      id: 104,
      img: p10image4
    },
  ]
  const room = [
    {
      id: 91,
      img: p9image1
    },
    {
      id: 92,
      img: p9image2
    },
    {
      id: 93,
      img: p9image3
    },

  ]
  const home2 = [

    {
      id: 81,
      img: p8image1
    },
    {
      id: 82,
      img: p8image2
    },
    {
      id: 83,
      img: p8image3
    },
  ]
  const home1 = [
    {
      id: 11,
      img: p1image1
    },
    {
      id: 12,
      img: p1image2
    },
    {
      id: 13,
      img: p1image3
    },
  ]
  const gameroom = [
    {
      id: 51,
      img: p5image1
    },
    {
      id: 52,
      img: p5image2
    },
    {
      id: 53,
      img: p5image3
    },
    {
      id: 54,
      img: p5image4
    },
    {
      id: 55,
      img: p5image5
    },

  ]

  const {name} = useParams()
  console.log(name);

  const [data,setData] = useState([])
  const onInit = () => {
    console.log('lightGallery has been initialized');
};

  useEffect(() => {
    // Set the data array based on the route parameter
    if (name === "home1") {
      setData(home1);
    } else if (name === "home2") {
      setData(home2);
    } else if (name === "bathroomimage") {
      setData(bathroomimage);
    } else if (name === "bathroom2image") {
      setData(bathroom2image);
    } else if (name === "keychenimage") {
      setData(keychenimage);
    } else if (name === "room") {
      setData(room);
    } else if (name === "keycheinimage") {
      setData(keycheinimage);
    } else if (name === "gameroom") {
      setData(gameroom);
    }
  }, [name]);


  return (
   <>
   <section className='columns-1k gap-5 mb-10 md:mb-16 *:rounded-xl flex items-stretch justify-center flex-wrap md:columns-2k px-5 md:px-10'>
    
   <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]} 
                 className='light-gallery-container '
            >
              {/* <div className="flex gap-5 flex-wrap *:rounded-xl"> */}

             
               {data.map((image, index) => (
              

          <a href={image.img} className='w-[100%]  md:w-[45%] *:rounded-xl' key={image.id} >
            <img className='w-[100%]  hover:scale-[.97] my-3 duration-150'  src={image.img} alt={image.img} />
          </a>
              
        ))}
               {/* </div> */}
            </LightGallery>
      </section>


        </>
  )
}

export default ProjectsShow
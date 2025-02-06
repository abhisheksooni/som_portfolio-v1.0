import React from 'react'
import '../App.css'
function CetegoryCard({bgimg, name}) {
  return (
   <>
   <div className="bg-color3 rounded-3xl max-w-[350px] h-[230px]">
          <p className='text-2xl text-center font-semibold py-1.5'> {name} </p>
          <div className=" w-[88%] mx-auto h-[1px] bg-color4 my-2 rounded-full"></div>
          <div className="relative z-30 bg-[#9C8FCF]/50 rounded-t-3xl w-[75%] mx-auto h-12 top-5">
          </div>
            <div className="bg-[#D9DADA]/70 relative w-[85%] mx-auto rounded-t-3xl z-40 h-12 -top-3">
            </div>
              <div className={` ${bgimg} relative z-50 h-[80%]  rounded-2xl -top-[42px]`}>

                <div className="relative z-90 -bottom-[109px] left-[275px] bg-color1 rounded-tl-[40px]  w-[80px] h-[80px]">
                <div className="">
                    <div className=" absolute left-[56px] -top-[20px] z-20 w-[20px] bg-color3 h-[20px]"></div>
                </div>
              <div className="relative top-[9px] left-[10px] z-91 bg-white w-[70px] h-[70px] rounded-full"></div>
                </div>
              </div>
        </div>
   </>
  )
}

export default CetegoryCard
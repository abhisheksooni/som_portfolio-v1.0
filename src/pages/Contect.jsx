import React,{useEffect} from 'react'
import { X, Phone, Mail, Instagram, Facebook, Send } from 'lucide-react';

function Contect() {

    const phone = '+912222222';
    const emailAddress = 'soomya.soni0310@gmail.com';
    const instagramAddress = 'som__soni'
    const facebookAddress = 'somyasoni'

    const call  = ()=>window.open(`tel:${phone}`,`_self`);
    const email = ()=>window.open(`mailto:${emailAddress}`,`_blank`);
    const instagramID = ()=>window.open(`https://www.instagram.com/${instagramAddress}`,`_blank`) ;

    const facebook = ()=>window.open(`www.facebook.com/${facebookAddress}`,`_blank`)

    useEffect(()=>{
        window.scroll({top:0,behavior:'smooth'})
    },[])


    return (

        <>
        
        <div className="h-[60px] lg:h-[90px]"></div>
        <div className=' flex justify-center items-center flex-col text-white '>

            <div className=" flex items-center  gap-5">
                <div className="bg-white w-[7px] h-[7px] rounded-full"></div>
                <p className='py-12 font-semibold text-3xl'>  Contect Us</p>
                <div className="bg-white w-[7px] h-[7px] rounded-full"></div>
            </div>
            {/* contect sections */}
            <div className="flex flex-col  lg:max-w-[78vw] p-4 lg:p-1 w-full  justify-center rounded-2xl">

                <div className="mt-5 *:bg-color3 flex justify-center *:items-center lg:m-0 *:m-1 *:w-full h-[23vh] lg:h-[39vh] *:rounded-2xl">  
                    <div onClick={call} className="flex justify-center "><Phone size={60}/></div>
                    <div onClick={email} className="flex justify-center"><Mail size={60} /></div>
                </div>
                <div className="*:bg-color3 flex justify-center *:m-1 *:w-full  h-[23vh] lg:h-[39vh] *:items-center *:rounded-2xl">

                    <div onClick={instagramID} className="flex justify-center"><Instagram size={60} /></div>
                    <div onClick={facebook} className="flex justify-center"><Facebook size={60} /></div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Contect
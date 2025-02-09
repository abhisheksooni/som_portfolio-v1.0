import React,{useEffect} from 'react'
import { X, Phone, Mail, Instagram, Facebook, Send, Linkedin } from 'lucide-react';

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
        
        {/* <div className="h-[60px] lg:h-[90px]"></div> */}
        <div className=' flex justify-center items-center flex-col text-color3 mb-20 '>

                <p className='py-12 font-semibold text-5xl'>  Contect Us</p>
  
            {/* contect sections */}
            <div className="flex flex-col  lg:max-w-[78vw] p-4 lg:p-1 w-full  justify-center rounded-2xl">

                <div className="mt-5 hover:*:scale-95 *:duration-300 *:bg-white flex justify-center *:items-center lg:m-0 *:m-1 *:w-full h-[23vh] lg:h-[39vh] *:rounded-2xl">  
                    <div onClick={call} className="flex justify-center "><Phone size={60}/></div>
                    <div onClick={email} className="flex justify-center"><Mail size={60} /></div>
                </div>
                <div className="*:bg-white hover:*:scale-95 *:duration-300 flex justify-center *:m-1 *:w-full  h-[23vh] lg:h-[39vh] *:items-center *:rounded-2xl">

                    <div onClick={instagramID} className="flex justify-center"><Instagram size={60} /></div>
                    <div onClick={facebook} className="flex justify-center"><Facebook size={60} /></div>
                </div>
                <div className="*:bg-white hover:*:scale-95 *:duration-300 flex justify-center *:m-1 *:w-full  h-[23vh] lg:h-[39vh] *:items-center *:rounded-2xl">

                    <div onClick={instagramID} className="flex justify-center"> <svg role="img"  height={160} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Fiverr</title><path  d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/></svg></div>
                    <div onClick={facebook} className="flex justify-center"> <Linkedin size={60} /></div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Contect
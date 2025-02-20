import React from 'react'
import { aslogo } from '../Imports/Images'
import { X, Phone, Mail, Instagram, Facebook, Send, Linkedin } from 'lucide-react';
function Footer() {


  const phone = '+912222222';
  const emailAddress = 'soomya.soni0310@gmail.com';
  const instagramAddress = 'som__soni'
  const facebookAddress = 'somyasoni'

  const call = () => window.open(`tel:${phone}`, `_self`);
  const email = () => window.open(`mailto:${emailAddress}`, `_blank`);
  const instagramID = () => window.open(`https://www.instagram.com/${instagramAddress}`, `_blank`);

  const facebook = () => window.open(`www.facebook.com/${facebookAddress}`, `_blank`)


  return (
    <>
      <section className='bg-color3 p-5 text-white flex items-center justify-between gap-6 py-10 px-8 lg:px-20 '>
        <div className=""><img className='w-16' src={aslogo} alt="" />
        </div>
        <div className="flex gap-4 hover:*:text-color2 *:cursor-pointer">


          {/* <div className="mt-5 hover:*:scale-95 *:duration-300  flex  justify-center *:items-center  gap-4 *:rounded-2xl"> */}
            <div onClick={instagramID} className="flex justify-center"><Instagram size={28} /></div>
            <div onClick={facebook} className="flex justify-center"><Facebook size={28} /></div>

          {/* </div> */}
          {/* <div className="mt-5 hover:*:scale-95 *:duration-300  flex  justify-center *:items-center gap-4  *:rounded-2xl"> */}

            <div onClick={call} className="flex justify-center "><Phone size={28} /></div>
            <div onClick={email} className="flex justify-center"><Mail size={28} /></div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Footer
import React from 'react'
import { aslogo } from '../Imports/Images'
import { X, Phone, Mail, Instagram, Facebook, Send, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Footer() {

  const phone = '+917470475840';
  const emailAddress = 'somya.soni0310@gmail.com';
  const instagramAddress = 'https://www.instagram.com/as__rendering/'
  const linkedin = 'somya-soni-9015541b4/'
  const fiverr = 'https://www.fiverr.com/som_soni1'

  const call = () => window.open(`tel:${phone}`, `_self`);
  const email = () => window.open(`mailto:${emailAddress}`, `_blank`);
  const instagramID = () => window.open(`${instagramAddress}`, `_blank`);

  const linkedinfun = () => window.open(`https://www.linkedin.com/in/${linkedin}`, `_blank`)
  const fiverrfun = () => window.open(`${fiverr}`, `_blank`)

  const Whatsappfun = () => {
    let number = '+917470475840'
    let message = 'I Need 3D Rendering Service'
    const encodemessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${number}&text=${encodemessage}`

    return (<NavLink className={"flex justify-center"} to={whatsappURL}>
      <svg role="img" width={28} fill='#ffffff' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
    </NavLink>)
  }


  const facebook = () => window.open(`www.facebook.com/${facebookAddress}`, `_blank`)


  return (
    <>
      <section className='bg-color3 p-5 text-white flex items-center justify-between gap-6 py-10 px-8 lg:px-20 '>
        <div className=""><img  loading='lazy'className='w-16' src={aslogo} alt="" />
        </div>
        <div className="flex flex-wrap max-w-[60%] items-center gap-4 hover:*:text-color2 *:cursor-pointer">

      

          <div onClick={linkedinfun} className="flex justify-center"> <Linkedin size={28} />
          </div>
          <div onClick={email} className="flex justify-center"><Mail size={28} />
          </div>
       
          <div onClick={instagramID} className="flex justify-center"><Instagram size={28} />
          </div>
          <div onClick={call} className="flex justify-center "><Phone size={28} />
          </div>
          <div className="">
            <Whatsappfun />
          </div>

          <div onClick={fiverrfun}  className="hidden md:flex"> <svg role="img" width={80} height={60} fill='#fff' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Fiverr</title><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" /></svg></div>
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Footer
import React from 'react'
import { NavLink } from 'react-router-dom';
import whatsappicon from "../Images/whatsapp_icon.png"

function WhatsappButton() {
    const handleWhatsappClick = () => {
        const number = '+917470475840'
        const message = 'I Need 3D Rendering Service'
        const encodemessage = encodeURIComponent(message)
        const whatsappURL = `https://api.whatsapp.com/send?phone=${number}&text=${encodemessage}`
        window.open(whatsappURL, '_blank')
    }

    const Whatsappfun = () => {
        let number = '+917470475840'
        let message = 'I Need 3D Rendering Service'
        const encodemessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${number}&text=${encodemessage}`

        return (<NavLink className={"flex justify-center max-w-[68px]"} to={whatsappURL}>
            <img loading='lazy' src={whatsappicon} className='w-16 md:w-[68px] rounded-full' alt="" />
        </NavLink>)
    }
    return (
        <div className="flex justify-center ">
            <button onClick={handleWhatsappClick}>
                <img
                    loading='lazy'
                    src={whatsappicon}
                    className='w-16 md:w-[68px] rounded-full'
                    alt="WhatsApp Icon"
                />
            </button>
        </div>
    )
}

export default WhatsappButton
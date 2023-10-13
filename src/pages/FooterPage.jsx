import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import {BsFacebook,BsInstagram, BsLinkedin, BsMailbox} from 'react-icons/bs';

const FooterPage = () => {
  return (
    <div className='bg-red-600 py-3 grid grid-rows-2 md:grid-cols-2 md:mt-10 text-yellow-400 h-14'>
       <div className='mx-20'>
        <h1 className='text-2xl '>Thanks for using</h1>
       </div>
       
        
        <div className='flex justify-evenly text-l'>
        <p className='py-1'>Get In Touch</p>
        <div className='flex gap-x-10 py-2'>
            <AiOutlineMail className='hover:animate-spin'/>
            <BsFacebook className='hover:animate-spin'/>
            <BsInstagram className='hover:animate-spin'/>
            <BsLinkedin className='hover:animate-spin'/>
        </div>
        </div>
       
    </div>
  )
}

export default FooterPage
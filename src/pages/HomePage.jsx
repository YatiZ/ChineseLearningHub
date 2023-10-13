import React from 'react'
import Box from '../reusable/box';
import {Routes, Route,Link, Outlet} from 'react-router-dom';
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im';
import {FaTasks} from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import {IoIosPeople} from 'react-icons/io';
import {RxVideo} from 'react-icons/rx';
import img1 from '../images/ADE860F2-D1B0-44B0-A68F-B502F2A6A2AB_4_5005_c-removebg-preview.png';
import img2 from '../images/Books_HD_8314929977.jpg';
import { Functions } from './Functions';

const HomePage = () => {
  return (
    <>
        
        <div className='md:mt-0 mt-4 w-fit md:w-full'>
          <img src={img1} alt='img1' className='w-full'/>
        </div>
        <div className='grid md:grid-cols-3 grid-rows-1 justify-center gap-8 mx-8 text-xl my-8'>

          {Functions.map((fun)=>(
            <Box>
            <Link key={fun.id} to={fun.link}>
              <div className='bg-red-600 md:py-8 rounded-full py-5 px-4'>
                <div className=''></div>
              <h1 className='text-3xl flex gap-x-5 justify-center'>{fun.name}{fun.icons}</h1>
              </div>
              </Link></Box>
          ))}
        
        </div>
        
        
        <Outlet/>
    </>
  )
}

export default HomePage
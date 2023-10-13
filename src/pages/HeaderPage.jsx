import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im';
import {FaTasks} from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import {IoIosPeople} from 'react-icons/io';
import {RxVideo} from 'react-icons/rx';
import { Functions } from './Functions';



const HeaderPage = () => {
  return (
    <div className='bg-red-600 py-4 flex text-yellow-400 font-bold'>
       
         <Link to="/home"><AiOutlineHome className='text-4xl mx-8 hover:animate-pulse'/></Link>
         <nav className='flex md:gap-x-10 gap-x-4 py-3'>
            {Functions.map((fun)=>(
                <Link to={fun.link}><div className='hover:animate-spin text-xl'>{fun.icons}</div></Link>
            ))}
         {/* <Link to="home/library"><ImBooks className='hover:animate-spin'/></Link>
         <Link to="home/exercise"><FaTasks className='hover:animate-spin'/></Link>
         <Link to="home/dictionary"><AiOutlineSearch className='hover:animate-spin'/></Link>
         <Link to="home/sharing"><BsFillStarFill className='hover:animate-spin'/></Link>
         <Link to="home/discussion"><IoIosPeople className='hover:animate-spin'/></Link>
         <Link to="home/video"><RxVideo className='hover:animate-spin'/></Link> */}
         </nav>
       <Outlet/>
    </div>
  )
}

export default HeaderPage
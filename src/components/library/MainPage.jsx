import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import Box from '../../reusable/box';
import { books } from './Books';
import './books.css';

const MainPage = () => {
  return (
    
    <div>
        <h1>Hello</h1>
        <ul>
        {books.map((book)=>(
            <li>
                <Link to={book.link}><img className='bookImg' src={book.img} alt={book.name} /></Link>
            </li>
        ))}
    
        </ul>
    </div>
   
  )
}

export default MainPage
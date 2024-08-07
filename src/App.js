import React from 'react';
import './App.css';
 import image2 from './images/image2.jpg'
 import { FaSquareInstagram } from "react-icons/fa6";
 import { FaTwitterSquare } from "react-icons/fa";
 import { FaFacebook } from "react-icons/fa";

function App() {
  return (
  
      <div className="section ">
      <img className='sec' src={image2} alt="" />
      <div className="content">
        <h1>Material kit</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.<br></br> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <button className='btn'>GET STARTED</button><a href="cdv">READ MORE</a>
      </div>
       <ul className='list'>
        <li className='item'>HOME</li>
        <li className='item'>ABOUT US</li>
        <li className='item'>CONTACT US</li>
        <li><FaSquareInstagram className='icon' /></li>
        <li><FaTwitterSquare className='icon2' /></li>
        <li><FaFacebook  className='icon3'/></li>
       </ul>
       
       
       </div>
    
    
       
  );
}

export default App;

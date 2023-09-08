import React from 'react';
import {useState} from 'react';
const Header = () => {
const[services, setServices]= useState(false)
const[two, setTwo]= useState(false)
  return (
    <div className='flex bg-white w-full h-20'>
      <div className='p-5 mx-20'>
        <img src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62a443e6434916672ae8ad5f_BLACK%20LOGO.svg' />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-7 justify-center'> 

          <li className='mx-7 relative cursor-pointer ' onMouseEnter={()=>setServices(true)} 
          onMouseLeave={()=>setServices(false)}><a>Services 
          {services &&  <div className='border-white	border-0.5 p-4 w-56 absolute text-white top-10 z-10 bg-black'>
          <ul>
            <li className='py-3 hover:text-gray-300' >Mobile App Development</li>
            <li className='py-3' >Web Development</li>
            <li className='py-3' >UI/UX Design</li>
            <li className='py-3' >All Development</li>
          </ul>
          </div>}
          </a>
          </li>
           
           

          <li className='mx-7 relative cursor-pointer'  onMouseEnter={()=>setTwo(true)}  
          onMouseLeave={()=>setTwo(false)} ><a>Hire Developers

          {two && <div className='border-white	border-0.5 p-4 w-96 absolute text-white top-10 z-10 bg-black'>
            <ul className='grid grid-cols-3'>
            <li className='py-3' >Mobile App Developer</li>
            <li className='py-3' >Node JS</li>
            <li className='py-3' >Angular JS</li>
            <li className='py-3' >Flutter</li>
            <li className='py-3' >Laravel</li>
            <li className='py-3' >Webflow</li>            
            <li className='py-3' >WeWeb</li>
            <li className='py-3' >Xano</li>
            <li className='py-3' >Wordpress</li>
            <li className='py-3' >Shopify</li>
            <li className='py-3' >React JS</li>
            <li className='py-3' >ChatGPT</li>     
            <li className='py-3' >Bubble</li>
            <li className='py-3' >Whispher</li>
            <li className='py-3' >UI/UX Designer</li>
            <li className='py-3' >Website Developer</li>
            <li className='py-3' >LanfChain developer</li>  
            <li className='py-3' >Flutterflow</li>
            </ul>
          </div>}
          </a>
          </li>
          <li className='mx-7'><a>Case Study</a></li>
          <li className='mx-7'><a>Pricing Plan</a></li>
          <li className='mx-7'><a>No Code Tools</a></li>
          <li className='mx-7'><a>About Us</a></li>
          <button className='bg-black p-2 text-white '>Get in Touch</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

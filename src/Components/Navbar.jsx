import React, { useState } from 'react'
import logo from "../assets/web-logo.avif";

const Navbar = () => {
    
const [menu ,setMenu] =useState(false)
const toggleMenu = ()=> {
    setMenu(!menu)
}

    const link = (
        <>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </>)
  return (
    <>
    <div className="navbar z-1000 sticky top-0 backdrop-blur-sm shadow-md text-white bg-blue-600">
      <div className="navbar-start">
      <div className="relative">
  
  <div onClick={toggleMenu} className="btn btn-ghost md:hidden">
    {menu ? "close" : "open"}
  </div>

  
  {menu && (
    <ul className="absolute top-full mt-3 left-0 text-gray-500  w-60 bg-white shadow-md min-h-screen">
      {link}
    </ul>
  )}
</div>

        <div className="flex justify-center items-center">
          <img className="w-5 rounded-full" src={logo} alt="" />
          <a className="text-lg italic font-bold  uppercase">
           Kick-fusion
          </a>
        </div>
      </div>
      <div className='navbar-center'>
        
        <ul className="menu menu-horizontal hidden md:flex gap-6 uppercase ">
          {link}
        </ul>
      </div>
      <div className="navbar-end ">
       <div className='flex flex-col justify-center '>
       <p  className='text-end'>
          Need Help
         
        </p>
        <p>
        +88017-7777-7777
        </p>
       </div>
      
      </div>
      
    </div>
  
  </>
  )
}

export default Navbar

import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'
import { Pagination } from 'swiper/modules';
import logo from "../assets/web-logo.avif";
import { DataContext } from './UserContext';

import slider1 from '/slider2.webp'
import slider2 from '/slide1.webp'
import slider3 from '/slider3.jpg'
import slider4 from '/slider4.jpg'

const Navbar = () => {
  const {selectCat,setSelectCat} = useContext(DataContext)
    
const [menu ,setMenu] =useState(false)
const [cat,setCat] = useState(false)
const toggleCat = ()=>{
  setCat(!cat)
}
const toggleMenu = ()=> {
    setMenu(!menu)
}
 const categories = ["All" , "men", "women" , "kid"]
    const link = (
        <>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </>)
        const link2 =(
        <>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </>
        )
  return (
    <>
    <div className="navbar z-1000 shadow-md text-white bg-blue-600">
      <div className="navbar-start">
      <div className="relative">
  
  <div onClick={toggleMenu} className="btn btn-ghost md:hidden">
    {menu ? "close" : "open"}
  </div>

  
  {menu && (
    <ul className="absolute top-full z-1000 mt-3 left-0 text-gray-500  w-60 bg-white shadow-md min-h-screen">
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
  
    <div className="navbar  z-100 sticky top-0 shadow-md text-black bg-white ">
      <div className="navbar-start">
      <div className="relative">
  
 
</div>

        <div className="flex justify-center items-center">
          <div onClick={toggleCat}  className="btn btn-ghost">
    {cat ?   <div  className='flex justify-center items-center gap-3'>
      <p>close</p>
      <a className="text-lg  font-bold font-myfont2  uppercase">
           categories
          </a>
    </div> :    <div className='flex justify-center items-center gap-3'>
      <p>open</p>
      <a className="text-lg  font-bold font-myfont2  uppercase">
           categories
          </a>
    </div>}
  </div>

  
  {cat && (
   
    <>
      
    <ul className="absolute top-full mt-3 left-0 text-gray-500  w-60 bg-white shadow-md min-h-screen">
      {categories.map(singleCat =>(
        <p className='btn' key={singleCat} onClick={()=>setSelectCat(singleCat)}> {singleCat}</p>
      ))}
      
    </ul>
    </>
  )}
        
          
        </div>
      </div>
      <div className='navbar-center'>
        
        <ul className="menu menu-horizontal hidden md:flex gap-6 uppercase ">
         <p>Search bar</p>
        </ul>
      </div>
      <div className="navbar-end ">
       <div className='flex flex-col justify-center '>
       <p  className='text-end'>
          add to cart+fevorite+user
         
        </p>
        
       </div>
      
      </div>
      
    </div>

  <div className='mb-6'>
     <Swiper
     
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
      </Swiper>
  </div>
  
  </>
  )
}

export default Navbar

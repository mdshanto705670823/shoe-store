import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'
import { Autoplay, Pagination } from 'swiper/modules';
import logo from "../assets/web-logo.avif";
import { DataContext } from './UserContext';


import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { MdFavorite } from 'react-icons/md';

const Navbar = () => {
  const {selectCat,setSelectCat, search, setSearch, addToCart,cart} = useContext(DataContext)
    
const [menu ,setMenu] =useState(false)
const [cat,setCat] = useState(false)

const toggleCat = ()=>{
  setCat(!cat)
}
const toggleMenu = ()=> {
    setMenu(!menu)
}
 const categories = ["All" , "men", "women" , "kid"]
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
 console.log(addToCart)
    const link = (
        <>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/blog"><li>Blog</li></NavLink>
          <NavLink to="/contact"><li>Contact Us</li></NavLink>
          <NavLink to="/about">  <li>About Us</li></NavLink>
          
          
        
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
    {menu ? <IoCloseSharp /> : <FaBars />}
  </div>

  
  {menu && (
    <ul className="absolute top-full z-1000 mt-3 left-0 text-black font-myfont font-medium rounded-xl  w-60 bg-white shadow-md ">
      <div className='flex flex-col flex-wrap justify-center m-6'>
        {link}
      </div>
    </ul>
  )}
</div>

        <div className="flex justify-center items-center">
          <img className="w-5 rounded-full" src={logo} alt="" />
          <Link to='/' className="text-lg italic font-bold  uppercase">
           Kick-fusion
          </Link>
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
      <IoCloseSharp />
      <a className="text-lg  font-bold font-myfont2  uppercase">
           categories
          </a>
    </div> :    <div className='flex justify-center items-center gap-3'>
      <FaBars />
      <a className="text-lg  font-bold font-myfont2  uppercase">
           categories
          </a>
    </div>}
  </div>
  {cat && (
    <> 
    <ul className="absolute top-full mt-3 left-0 text-gray-500  w-60 ">
     <div className='flex flex-col  gap-5 my-3'>
       {categories.map(singleCat =>(
        <p className='btn capitalize' key={singleCat} onClick={()=>setSelectCat(singleCat)}> {singleCat}</p>
      ))}
     </div>
      
    </ul>
    </>
  )}     
        </div>
      </div>
      <div className='navbar-center'>
        
        <ul className=" text-black  w-28 md:w-full  ">
   <label onSubmit={()=>handleSearch} className="flex items-center w-full max-w-lg  bg-black/70 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all px-4 py-2 gap-3">
  <svg
    className="h-5 w-5 text-gray-300"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <input
    type="search"
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    placeholder="Search"
    required
    className="w-full bg-transparent outline-none text-base text-white/70 placeholder-gray-300"
  />
</label>
        </ul>
      </div>
      <div className="navbar-end ">
      <div className='flex lg:text-3xl text-xl md:text-2xl justify-center items-center gap-4'>
        <FaUser />
       <Link to="/cart">
        <FaShoppingCart className="text-2xl" />
          {addToCart.length > 0 && (
            <span className="absolute top-10 right-10 bg-red-500 text-white rounded-full text-xs px-1">
               {addToCart.reduce((sum, item) => sum + (item.quantity || 0), 0)}
            </span>
          )}
       </Link>
        <MdFavorite />
       </div>
      </div>
    </div>
  </>
  )
}

export default Navbar

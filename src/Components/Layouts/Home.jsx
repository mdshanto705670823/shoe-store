import React, { useContext, useState } from 'react'
import { DataContext } from '../UserContext'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, Zoom } from 'swiper/modules';

import slider1 from '/slider2.webp'
import slider2 from '/slide1.webp'
import slider3 from '/slider3.jpg'
import slider4 from '/slider4.jpg'
import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Blog from './Blog';

const Home = () => {
    const {data,selectCat,setSelectCat,showMore,setShowMore,search,setSearch,cart,removeCart,clearCart, wish} = useContext(DataContext)
    const filterProducts = data.filter(p => {
  const matchCategory = selectCat === "All" || p.category === selectCat;
  const matchSearch =
    !search ||
    p.name.toLowerCase().includes(search)||
    p.category.toLowerCase().includes(search)
    ;
  return matchCategory && matchSearch;
});
    const topRatingProducts = data.filter(product => product.ratings > 9)
    console.log(topRatingProducts)
    const visibleData = showMore ? filterProducts : filterProducts.slice(0,8)
    const navigate = useNavigate()
    const handleDetails = (id) =>{
      navigate(`/product/${id}`)
    }

    
    
  return (
   <>
  
  <Swiper
    pagination={{ dynamicBullets: true, clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Pagination, Autoplay]}
    className="mySwiper mb-8"
  >
    <SwiperSlide>
      <img src={slider1} alt="Slider 1" className="w-full object-cover rounded-xl" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slider2} alt="Slider 2" className="w-full object-cover rounded-xl" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slider3} alt="Slider 3" className="w-full object-cover rounded-xl" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slider4} alt="Slider 4" className="w-full object-cover rounded-xl" />
    </SwiperSlide>
  </Swiper>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    {visibleData.length > 0 ? (
      visibleData.map((item) => (
        <div
          key={item.id}
          className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
         
          <figure
            onClick={() => handleDetails(item.id)}
            className="cursor-pointer overflow-hidden rounded-t-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </figure>

          
          <div className="p-4 flex flex-col flex-1 gap-2 text-center">
            <h3 className="font-semibold font-myfont2 text-black text-lg line-clamp-2">{item.name}</h3>
            <div className="flex justify-center items-center gap-3 text-sm sm:text-base">
              <p className="text-blue-700 font-semibold">${item.price}</p>
              <p className="text-green-500">⭐ {item.ratings}</p>
            </div>

            
            <div className="flex justify-center items-center gap-4 mt-2 text-xl sm:text-2xl">
              <FaShoppingCart onClick={() => cart(item)} className="text-red-500 cursor-pointer" />
              <MdFavorite
                onClick={() => wish(item)}
                className="text-yellow-500 cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>

          <button
            onClick={() => handleDetails(item.id)}
            className="btn btn-secondary btn-sm capitalize mt-2 mx-4 mb-4"
          >
            View Details
          </button>
        </div>
      ))
    ) : (
      <div className="text-black font-myfont2 col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
        <img
          src="https://i.ibb.co.com/8Lzn6QD6/product-not-found.jpg"
          alt="No products found"
          className="w-40 h-40 mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">No products found</h2>
        <p className="text-center">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    )}
  </div>

 
  <div className="flex justify-center items-center my-6">
    {filterProducts.length > 8 && (
      showMore ? (
        <button
          onClick={() => setShowMore(false)}
          className="btn bg-yellow-500 text-white font-myfont3 rounded-xl transition-transform delay-75 hover:border-yellow-300 hover:border-2 hover:scale-105"
        >
          Show Less
        </button>
      ) : (
        <button
          onClick={() => setShowMore(true)}
          className="btn bg-yellow-500 text-white font-myfont3 rounded-xl transition-transform delay-75 hover:border-yellow-300 hover:border-2 hover:scale-105"
        >
          Show More
        </button>
      )
    )}
  </div>

      <h1 className=' text-black text-4xl font-myfont2 font-bold text-center my-2'>Top Rated Shoes</h1>
  
  <div className='mb-6'>
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    loop={true}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
  >
    
    {topRatingProducts.map((p) => (
      
      <SwiperSlide  key={p.id}>
        <div className="bg-base-200 shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <figure
            onClick={() => handleDetails(p.id)}
            className="cursor-pointer overflow-hidden "
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </figure>

          <div className="p-4 flex flex-col flex-1 gap-2 text-center">
            <h3 className="font-semibold text-lg line-clamp-2 font-myfont2 text-black">{p.name}</h3>
            <div className="flex justify-center items-center gap-3 text-sm sm:text-base">
              <p className="text-blue-700 font-semibold">${p.price}</p>
              <p className="text-green-500">⭐ {p.ratings}</p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-2 text-xl sm:text-2xl">
              <FaShoppingCart onClick={() => cart(p)} className="text-red-500 cursor-pointer" />
              <MdFavorite
                onClick={() => wish(p)}
                className="text-yellow-500 cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>

          <button
            onClick={() => handleDetails(p.id)}
            className="btn btn-secondary btn-sm capitalize mt-2 mx-4 mb-4"
          >
            View Details
          </button>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  <Blog/>
  <About />
</>

  )
}

export default Home

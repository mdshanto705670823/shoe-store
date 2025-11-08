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

const Home = () => {
    const {data,loading,error,selectCat,setSelectCat , showMore,setShowMore } = useContext(DataContext)
    const filterProducts = selectCat === "All" ? data : data.filter(p => p.category === selectCat)
    const topRatingProducts = data.filter(product => product.ratings > 9)
    console.log(topRatingProducts)
    const visibleData = showMore ? filterProducts : filterProducts.slice(0,8)
    
  return (
    <>  
    <Swiper
  pagination={{
    dynamicBullets: true,
    clickable: true, // optional: allows clicking bullets
  }}
  autoplay={{
    delay: 3000, // 3 seconds per slide
    disableOnInteraction: false, // continue autoplay after user interaction
  }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src={slider1} alt="Slider 1" className="w-full object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={slider2} alt="Slider 2" className="w-full object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={slider3} alt="Slider 3" className="w-full object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={slider4} alt="Slider 4" className="w-full object-cover" />
  </SwiperSlide>
</Swiper>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
       
            {
                
                
                 visibleData.map(singledata=> (
                    <div key={singledata.id} >
                     <div >
          <div className="card bg-base-300 shadow-sm ">
           <figure className="p-10 transition-transform delay-100 hover:scale-105">
             <img
               src={singledata.image}
               alt="Shoes"
               className="rounded-xl w-full" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title font-myfont2"> {singledata.name} </h2>
            <div className='flex justify-center gap-26 font-myfont3'>
            <div className='flex'>
               <p className='uppercase '>price: </p>
             <p>${singledata.price}</p>
            </div>
            <div>
              <p className='uppercase'>color</p>
              <p>{singledata.color}</p>
            </div>

            </div>
            <div className='flex justify-center items-center font-myfont3 gap-2'>
              <p className=''>Ratings:</p>
              <p>{singledata.ratings}</p>

            </div>
             <div className="card-actions">
               <button className="btn bg-blue-600 text-white font-myfont3 rounded-4xl transition-transform delay-75 hover:border-yellow-300 hover:border-2 hover:scale-105">Buy Now</button>
               <button className="btn bg-blue-600 text-white font-myfont3 rounded-4xl transition-transform delay-75 hover:border-yellow-300 hover:border-2 hover:scale-105">Favorite</button>
             </div>
           </div>
         </div> 
         </div>               
   </div>
                 ))
            }
        </div>
        <div className='flex justify-center items-center my-6'>
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
      className="btn bg-yellow-500 text-white font-myfont3 rounded-xl transition-transform delay-75 hover:border-yellow-300 hover-border-2 hover:scale-105"
    >
      Show More
    </button>
  )
)}     
        </div>
        <div className='my-10'>
    <Swiper
  slidesPerView={1}
  spaceBetween={20}
  loop={true} 
  autoplay={{
    delay: 2500, 
    disableOnInteraction: false, 
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
  modules={[Pagination, Autoplay]}
  className="mySwiper py-6"
>
  {topRatingProducts.map((p) => (
    <SwiperSlide key={p.id}>
      <div className="card bg-base-300 rounded-none shadow-sm w-full h-full flex flex-col justify-between">
        <figure className="p-5 transition-transform duration-200 hover:scale-105">
          <img
            src={p.image}
            alt={p.name}
            className="rounded-xl w-full object-cover aspect-square"
          />
        </figure>
        <div className="card-body items-center text-center flex flex-col gap-2">
          <h2 className="card-title font-myfont2 text-lg md:text-xl">
            {p.name}
          </h2>

          <div className="flex justify-center gap-8 text-sm md:text-base font-myfont3">
            <div className="flex items-center gap-1">
              <p className="uppercase">Price:</p>
              <p>${p.price}</p>
            </div>
            <div>
              <p className="uppercase">Color</p>
              <p>{p.color}</p>
            </div>
          </div>
          <div className="flex justify-center items-center font-myfont3 gap-2">
            <p>Ratings:</p>
            <p>{p.ratings}</p>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mt-3">
            <button className="btn bg-blue-600 text-white font-myfont3 rounded-full transition-transform hover:border-yellow-300 hover:border-2 hover:scale-105">
              Buy Now
            </button>
            <button className="btn bg-blue-600 text-white font-myfont3 rounded-full transition-transform hover:border-yellow-300 hover:border-2 hover:scale-105">
              Favorite
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        </div>
    </>
  )
}

export default Home

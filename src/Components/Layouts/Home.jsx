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

const Home = () => {
    const {data,loading,error,selectCat,setSelectCat , showMore,setShowMore } = useContext(DataContext)
    const filterProducts = selectCat === "All" ? data : data.filter(p => p.category === selectCat)
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
  pagination={{
    dynamicBullets: true,
    clickable: true, 
  }}
  autoplay={{
    delay: 3000, 
    disableOnInteraction: false, 
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-3'>
       
            {
                
                
                 visibleData.map(singledata=> (
                    <div key={singledata.id} >
                     <div >
          <div className="card bg-base-300 shadow-sm text-black ">
           <figure onClick={() => handleDetails(singledata.id)}className=" transition-transform delay-100 hover:scale-105">
             <img
               src={singledata.image}
               alt="Shoes"
               className="rounded-xl w-full" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title md:text-2xl lg:text-xl  font-myfont2"> {singledata.name} </h2>               
           <div className='flex justify-center items-center gap-4'>
              <p className='text-xl font-myfont2 text-blue-700'>${singledata.price}</p>          
            <div className='flex justify-center items-center font-myfont3 gap-2 text-xl'>
              <p className=''>Ratings:</p>
              <p className='text-green-500'>{singledata.ratings}</p>
            </div>
           </div>
             <div className="card-actions text-4xl gap-12">
             <FaShoppingCart className='text-red-500' />
                   <MdFavorite className='text-yellow-500' />
             </div>
           </div>
         <button onClick={() => handleDetails(singledata.id)} className='btn btn-secondary capitalize'>
          veiw details
          </button> 
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
        
  <Swiper
  slidesPerView={1}
  spaceBetween={10}
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
  
>
  {topRatingProducts.map((p) => (
    <SwiperSlide className='w-64' key={p.id}>
      <div className="card bg-base-300 shadow-sm text-black rounded-lg overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
        
        <figure
          onClick={() => handleDetails(p.id)}
          className="cursor-pointer overflow-hidden rounded-md"
        >
          <img
            src={p.image}
            alt="Shoes"
            className="rounded-md w-full  object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="card-body items-center text-center p-2 gap-1">
          <h2 className="card-title text-sm sm:text-base md:text-lg font-myfont2 leading-tight">
            {p.name}
          </h2>

          <div className="flex justify-center items-center gap-2">
            <p className="text-base sm:text-lg font-myfont2 text-blue-700">
              ${p.price}
            </p>
            <div className="flex justify-center items-center font-myfont3 gap-1 text-sm">
              <p>Ratings:</p>
              <p className="text-green-500">{p.ratings}</p>
            </div>
          </div>

          <div className="card-actions text-xl sm:text-2xl gap-6 mt-1">
            <FaShoppingCart className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
            <MdFavorite className="text-yellow-500 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        <button
          onClick={() => handleDetails(p.id)}
          className="btn btn-secondary btn-xs sm:btn-sm capitalize mt-2"
        >
          View Details
        </button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


       
    </>
  )
}

export default Home

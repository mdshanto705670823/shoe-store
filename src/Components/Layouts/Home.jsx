import React, { useContext, useState } from 'react'
import { DataContext } from '../UserContext'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const Home = () => {
    const {data,loading,error,selectCat,setSelectCat , } = useContext(DataContext)

   
    
   
    const filterProducts = selectCat === "All" ? data : data.filter(p => p.category === selectCat)
 
    const topRatingProducts = data.filter(product => product.ratings > 9)
    console.log(topRatingProducts)
    
  return (
    <>


      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
       
            {
                
                
                 filterProducts.map(singledata=> (
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
        <div className='my-10'>
         <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000, disableOnInteraction: false }} 
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      }}
      modules={[Pagination, Autoplay]} 
      className="mySwiper"
    >
      {
        topRatingProducts.map(p =>(
          <SwiperSlide>
            <div key={p.id} className="card bg-base-300 shadow-sm w-full">
           <figure className="p-10 transition-transform delay-100 hover:scale-105">
             <img
               src={p.image}
               alt="Shoes"
               className="rounded-xl w-full" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title font-myfont2"> {p.name} </h2>
            <div className='flex justify-center gap-26 font-myfont3'>
           
            <div>
              <p className='uppercase'>color</p>
              <p>{p.color}</p>
            </div>

            </div>
            <div className='flex justify-center items-center font-myfont3 gap-2'>
              <p className=''>Ratings:</p>
              <p>{p.ratings}</p>

            </div>
            
           </div>
         </div> 
          </SwiperSlide>
        ))
        }
      
    </Swiper>
        </div>
      
    </>
  )
}

export default Home

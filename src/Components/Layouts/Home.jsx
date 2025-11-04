import React, { useContext } from 'react'
import { DataContext } from '../UserContext'

const Home = () => {
    const {data,loading,error} = useContext(DataContext)
    
    
  return (
    <>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
       
            {
                
                
                 data.map(singledata=> (
                    <div key={singledata.id} >
                     <div >
          <div className="card bg-base-100 shadow-sm ">
           <figure className="px-10 pt-10">
             <img
               src={singledata.image}
               alt="Shoes"
               className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">Card Title</h2>
             <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
             <div className="card-actions">
               <button className="btn btn-primary">Buy Now</button>
             </div>
           </div>
         </div> </div>
                    </div>
                 ))
            }
        </div>
       
      
    </>
  )
}

export default Home

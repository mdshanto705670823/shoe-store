import React, { useContext } from 'react'
import { MdFavorite } from 'react-icons/md';
import { DataContext } from '../UserContext';

const WishList = () => {
    const { wish, wishlist, removeWish,decrementQtyOfWish,cart } =
        useContext(DataContext);
    
  if (!wishlist || wishlist.length === 0) {
    return (
      <p className="text-center my-2 text-gray-300 text-lg">
        Your wishlist is empty ❤️
      </p>
    );
  }

 

  return (
    <div className="max-w-5xl mx-auto p-6 font-myfont2 text-black">
  <h2 className="text-3xl font-bold mb-6 text-center">My Wishlist</h2>

  <div className="flex flex-col gap-4">
    {wishlist.map((item) => (
      <div
        key={item.id}
        className="flex flex-col sm:flex-row justify-between items-center bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 gap-4"
      >
       
        <div className="flex items-center gap-4 flex-1">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg sm:text-xl line-clamp-1">
              {item.name}
            </h3>
            <p className="text-blue-700 font-semibold">${item.price}</p>
            <p className="text-green-600">⭐ {item.ratings}</p>
          </div>
        </div>

        
      

        
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 sm:mt-0">
          <button
            onClick={() => cart(item)} 
            className="btn btn-xs bg-blue-600 text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>

          <MdFavorite
            className="cursor-pointer text-2xl transition-transform hover:scale-110 text-red-500"
           
          />

          <button
            onClick={() => removeWish(item.id)}
            className="btn btn-xs bg-red-500 text-white"
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default WishList

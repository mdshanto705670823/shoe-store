import React, { useContext } from "react";
import { DataContext } from "../UserContext";
import { MdFavorite } from "react-icons/md";

const Blog = () => {
  const {
    data,
    loading,
    error,
    cart,
    addToCart,
    wishlist,
    wish,
    removeWish,
    decrementQtyOfWish,
  } = useContext(DataContext);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!data || data.length === 0)
    return <p className="text-center mt-10">No products available.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-myfont2">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item) => {
          const inWishlist = wishlist.some((w) => w.id === item.id);
          return (
            <div
              key={item.id}
              className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-1 gap-2">
                <h3 className="font-semibold text-lg line-clamp-2">{item.name}</h3>
                <p className="text-blue-700 font-semibold">${item.price}</p>
                <p className="text-green-600">⭐ {item.ratings}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>

                {/* Actions */}
                <div className="mt-auto flex justify-between items-center gap-2">
                  <button
                    onClick={() => cart(item)}
                    className="btn btn-xs bg-blue-600 text-white hover:bg-blue-700 flex-1"
                  >
                    Add to Cart
                  </button>

                  <MdFavorite
                    onClick={() =>
                      inWishlist ? removeWish(item.id) : wish(item)
                    }
                    className={`cursor-pointer text-2xl transition-transform hover:scale-110 ${
                      inWishlist ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

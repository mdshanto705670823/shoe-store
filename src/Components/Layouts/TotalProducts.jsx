import React, { useContext } from "react";
import { DataContext } from "../UserContext";

const ProductCard = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-10 font-myfont2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        All Products
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
           
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
              />
            </div>

            
            <div className="p-4">
            
              <h3 className="font-semibold text-gray-800 text-lg mb-1 truncate">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm mb-2">
                <span className="font-medium text-gray-700">Serial:</span>{" "}
                {product.serial_code || "N/A"}
              </p>

              
              <div className="mb-2">
                <span className="font-medium text-gray-700 text-sm">Sizes:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.size && product.size.length > 0 ? (
                    product.size.map((size, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {size}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">N/A</span>
                  )}
                </div>
              </div>

             
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-700">Category:</span>{" "}
                {product.category || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

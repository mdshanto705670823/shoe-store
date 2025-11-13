import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../UserContext";

function Details() {
  const { id } = useParams();
  const { data, loading, cart, wish } = useContext(DataContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg text-success"></span>
      </div>
    );
  }

  const product = data.find((p) => p.id === parseInt(id));
  if (!product)
    return <p className="text-center mt-20 text-xl">Product not found</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center p-4 gap-4">
 
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-40 h-40 object-contain rounded-lg bg-gray-50"
        />

        <div className="flex-1 space-y-1">
          <h2 className="text-lg font-semibold text-gray-800 leading-tight">
            {product.name}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
            <p className="text-sm text-yellow-600 font-medium">
              ⭐ {product.ratings}
            </p>
          </div>

       
          <div className="flex flex-wrap gap-2 mt-1">
            {product.size.map((s) => (
              <span
                key={s}
                className="px-2 py-1 text-xs border rounded-md bg-gray-100 text-black"
              >
                {s}
              </span>
            ))}
          </div>

        
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => cart(product)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs py-2 rounded-md"
            >
              Add 🛒
            </button>
            <button
              onClick={() => wish(product)}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black text-xs py-2 rounded-md"
            >
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

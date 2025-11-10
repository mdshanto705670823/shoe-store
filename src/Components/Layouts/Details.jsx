import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../UserContext";

function Details() {
  const { id } = useParams();
  const { data, loading,cart,wish } = useContext(DataContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg text-success"></span>
      </div>
    );
  }

  const product = data.find((p) => p.id === parseInt(id));
  if (!product) return <p className="text-center mt-20 text-xl">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 shadow-md rounded-2xl mt-10 text-black">
      
     
      <div className="flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl shadow-md w-full max-w-md object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

    
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold font-myfont2">{product.name}</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        <div className="divider"></div>

        <div className="flex items-center justify-between">
          <p className="text-3xl font-semibold text-blue-700">${product.price}</p>
          <p className="text-lg text-green-600 font-semibold">
            ⭐ {product.ratings} / 10
          </p>
        </div>

        <div className="mt-4 space-y-2 text-lg">
          <p>
            <span className="font-semibold">Serial Code:</span> {product.serial_code}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {product.color}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {product.weight}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Collection:</span> {product.collection}
          </p>
        </div>

     
        <div className="mt-6">
          <p className="font-semibold mb-2 text-lg">Available Sizes:</p>
          <div className="flex gap-3 flex-wrap">
            {product.size.map((s) => (
              <span
                key={s}
                className="px-4 py-2 border rounded-xl bg-base-200 hover:bg-base-300 cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        
        <div className="flex gap-4 mt-8">
          <button onClick={()=> cart(product)} className="btn bg-green-500 hover:bg-green-600 text-white w-1/2">
            Add to Cart 🛒
          </button>
          <button onClick={()=> wish(product)} className="btn bg-yellow-400 hover:bg-yellow-500 text-black w-1/2">
            Add to Wishlist ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;

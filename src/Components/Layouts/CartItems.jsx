import React, { useContext } from 'react'
import { DataContext } from '../UserContext';

const CartItems = () => {
  const { addToCart, cart, removeCart, decrementQty } =
    useContext(DataContext);

 
  if (addToCart.length === 0) {
    return <p className="text-center mt-8">Your cart is empty</p>;
  }

 
  const total = addToCart.reduce(
    (sum, item) => sum + (item.quantity || 1) * item.price,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 font-myfont2 text-black">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="flex flex-col gap-4">
        {addToCart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-base-200 p-4 rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decrementQty(item.id)}
                className="btn btn-xs bg-yellow-400"
              >
                -
              </button>
              <p>{item.quantity || 1}</p>
              <button
                onClick={() => cart(item)} 
                className="btn btn-xs bg-green-400"
              >
                +
              </button>
              <button
                onClick={() => removeCart(item.id)}
                className="btn btn-xs bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="text-right mt-4 text-xl font-bold text-white">
          Total: $
          {total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItems;

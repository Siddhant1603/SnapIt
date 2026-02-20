import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  clearCart,
  selectCartItems,
  selectCartTotalPrice
} from '../Redux/CounterSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
    

      {cartItem.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-4">
          Your cart is empty
        </p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 max-w-4xl mx-auto border rounded-lg p-4 mb-4 shadow-sm"
            >
              {/* Left */}
              <div className="w-1/4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-contain"
                />
                <p className="mt-2 text-sm font-medium">
                  {item.title}
                </p>
              </div>

              {/* Right */}
              <div className="w-3/4 border-l pl-4">
              <i className="fa-solid fa-xmark flex ml-150 mt-2" onClick={()=>{handleRemoveFromCart(item)}}></i>
                <h2 className="text-sm text-gray-600 mb-2">
                  {item.description}
                </h2>
                <p className="font-semibold">
                  Price: ₹{item.price} | Quantity: {item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* BILL SECTION */}
          <div className="max-w-4xl mx-auto border-t mt-6 pt-4">
            <div className="flex justify-between text-lg mb-2">
              <span>Total Items:</span>
              <span>
                {cartItem.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between text-lg mb-2">
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between text-lg mb-2 text-green-600">
              <span>Discount (20% OFF):</span>
              <span>- ₹{(totalPrice * 0.2).toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xl font-bold mt-3">
              <span>Final Amount:</span>
              <span>
                ₹{(totalPrice - totalPrice * 0.2).toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => {
                alert("Order placed successfully ✅");
                dispatch(clearCart());
              }}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

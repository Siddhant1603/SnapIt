import React, { use } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromCart,clearCart, selectCartItems,selectCartTotalPrice } from '../Redux/CounterSlice';


const Product = () => {


const dispatch =useDispatch();

 const handleaddToCart=(item)=>{
  dispatch(addToCart(item))
 };

const cartItem=useSelector(selectCartItems);
console.log("Cart Items:", cartItem);

  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
// const [visible, setVisible] = useState(10);
const [search,setsearch]=useState("");
const[query,setquery]=useState("");

useEffect(()=>{
const fetchproduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching products");

      }
    };
    fetchproduct();
},[]);




const filteredproducts= product.filter((item)=>{
  return item.title.toLowerCase().includes(query.toLowerCase());
})

const handleSearch=(e)=>{
  e.preventDefault();
  setquery(search);
  setsearch("");
}

return (
  <div className="px-4 my-10">
  {error && (
    <p className="text-red-500 text-center mb-4">
      {error}
    </p>
  )}

<div className=''>
<form
  onSubmit={handleSearch}
  className="flex items-center gap-2 max-w-md mx-auto mt-4 mb-5"
>
  <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => setsearch(e.target.value)}
    className="flex-1 border border-gray-500 rounded-md px-4 py-2 
               focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:border-blue-500"
  />

  <button
    type="submit"
    className="bg-blue-600 text-white px-5 py-2 rounded-md
               hover:bg-blue-700 transition"
  >
    Search
  </button>
</form>




</div>

  <div className="flex flex-wrap justify-center gap-6">
    {filteredproducts.map((item) => (
      <div
        key={item.id}
        className="w-64 border rounded-xl p-4 shadow-sm hover:shadow-md transition"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-contain mb-4"
        />

        <h2 className="font-semibold text-sm mb-1 line-clamp-2">
          {item.title}
        </h2>

        <p className="font-bold text-lg text-green-600">
          ₹{item.price}
        </p>

        <p className="text-sm text-gray-600 mb-3">
          {item.rating.rate} ⭐ | {item.rating.count}
        </p>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer" onClick={()=>{handleaddToCart(item)}}>
          Add to cart
        </button>
      </div>
    ))}
  </div>
</div>

)
}
export default Product


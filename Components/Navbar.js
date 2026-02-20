import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';


import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromCart,clearCart, selectCartItems,selectCartTotalPrice } from '../Redux/CounterSlice';

const Navbar = () => {

 const handleaddToCart=(item)=>{
  dispatch(addToCart(item))
 };

const cartItem=useSelector(selectCartItems);

  return (
    <div>
     <h2 className='bg-white  py-4 shadow-2xl flex items-center justify-between px-8'>
        <div className=''>
            <Link to="/" className='max-w-5xl text-5xl mx-auto justify-between flex items-center'>SnapIt</Link>
           
        </div>

        <div className='flex justify-center items-center gap-8'>
            <ul className='flex gap-8 font-semibold text-xl '>
             <NavLink to="/" className={({isActive})=>`${isActive ? "border-b-3 border-red-500 ":"text-black" }"cursor-pointer`}> <li>Home</li></NavLink>
              <NavLink to="/product" className={({isActive})=>`${isActive ? "border-b-3 border-red-500 ":"text-black" }"cursor-pointer`}>    <li>Product</li></NavLink>
                    <NavLink to="/about"className={({isActive})=>`${isActive ? "border-b-3 border-red-500 ":"text-black" }"cursor-pointer`}> <li>About</li></NavLink>
                      <NavLink to="/contact" className={({isActive})=>`${isActive ? "border-b-3 border-red-500 ":"text-black" }"cursor-pointer`}> <li>Contact</li></NavLink>
                       
            </ul>
            <Link to="/cart" className='relative'><i className="fa-solid fa-cart-arrow-down"></i>
             <span className='bg-red-500 rounded-full absolute -top-2 -right-3 flex justify-center items-center w-4 h-4 text-xs text-white'>{cartItem.length}</span>
            </Link>
               <SignedOut>
        <SignInButton className="bg-red-600 rounded-md text-white py-3 px-3 cursor-pointer font-bold" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
           
        </div>
     </h2>
    
    </div>
    
  )
}

export default Navbar

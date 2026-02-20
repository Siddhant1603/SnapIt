import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Product from './Components/Product';
import { ClerkProvider, SignInButton } from '@clerk/clerk-react';
import Footer from './Components/Footer';

import { store } from './Redux/Store';
import { Provider } from 'react-redux';





const Applayout = () => {
    return (
        <div className='Applayout'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/product' element={<Product />} />
                
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}


const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Applayout />
</ClerkProvider></Provider>);
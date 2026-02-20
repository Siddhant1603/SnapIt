import {configureStore} from '@reduxjs/toolkit';
import cart from './CounterSlice';
export const store=configureStore({
    reducer:{
SuperCart:cart
    }
})



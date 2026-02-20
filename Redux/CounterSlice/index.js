import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
   
      const existingItem =state.items.find((item)=>item.id===newItem.id);
      if(existingItem){
existingItem.quantity +=1;
      }else{
        state.items.push({...newItem,quantity:1});
      }
      state.totalPrice += newItem.price;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalPrice -= action.payload.price;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCartItems = (state) => state.SuperCart.items;
export const selectCartTotalPrice = (state) => state.SuperCart.totalPrice;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

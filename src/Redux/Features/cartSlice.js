import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.cartData = removeItem;
    },
    getTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    incQuantity: (state, action) => {
      state.cartData.filter(item => {if(item.id === action.payload){
        item.quantity += 1;
      }});
    },
    decQuantity: (state, action) => {
      state.cartData.filter(item => {if(item.id === action.payload){
        item.quantity -= 1;
      }});
    },

  },
});

export const { addToCart, removeFromCart, getTotalPrice, incQuantity, decQuantity} = cartSlice.actions;
export default cartSlice.reducer;

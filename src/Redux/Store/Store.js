import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice";
import filterSlice from "../Features/filterSlice";
import loginSlice from "../Features/loginSlice";

export const Store = configureStore({
    reducer:{
        cart:cartSlice,
        filter:filterSlice,
        login:loginSlice,
    },
});
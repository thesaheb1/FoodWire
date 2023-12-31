import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        filterData:[]
    },
    reducers:{
        filterFood:(state, action)=>{
            state.filterData = action.payload;
        }
    }
});


export const {filterFood} = filterSlice.actions;
export default filterSlice.reducer;
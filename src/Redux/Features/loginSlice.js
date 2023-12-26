import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState:{
        isLoggedIn:false,
    },
    reducers:{
        setIsLoggedIn:(state, actino) => {
            state.isLoggedIn = actino.payload;
        }

    }
});

export const {setIsLoggedIn} = loginSlice.actions;
export default loginSlice.reducer;
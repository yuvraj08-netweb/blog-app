import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSilce = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state)=>{
            state.status = false;
            state.userData = null;
        },

    }
});

export const {login, logout} = authSilce.actions;

export default authSilce.reducer;

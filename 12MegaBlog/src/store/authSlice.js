import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData:null,
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {

        // these functions are called actions 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logOut:(state)=> {
            state.status = false;
            state.userData = null;
        }
    }
})

// that's why we are exporting these functions from authSlice.actions
export const {login, logOut}  =  authSlice.actions;
export default authSlice.reducer;

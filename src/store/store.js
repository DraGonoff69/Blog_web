// we are using redux to know wether the user is logged in or not
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({
    reducer:{
        auth:authSlice,
        //TODO
    }
    
});



export default store
import {configureStore} from '@reduxjs/toolkit';
import userReducer from "../features/auth/userSlice";

const appStore= configureStore({
    reducer:{
         user: userReducer,
    }
})
export default appStore;

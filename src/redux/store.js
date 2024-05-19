import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
    //Aquí van todos los reducers o porciones de estado
    reducer: {
        authUser: authReducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";




import cartReducer from "./reducers/cartSlice";



const rootReducer = combineReducers({
   
    cart: cartReducer,
   
});


const store = configureStore({
    reducer: rootReducer,
});
store.subscribe(() => {
    console.log(store.getState())
})



export default store;

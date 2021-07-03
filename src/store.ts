import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";




import cartReducer from "./reducers/cartSlice";
import mealReducer from "./reducers/mealSlice";



const rootReducer = combineReducers({
   
    cart: cartReducer,
    meals:mealReducer
   
});


const store = configureStore({
    reducer: rootReducer,
});
store.subscribe(() => {
    console.log(store.getState())
})



export default store;

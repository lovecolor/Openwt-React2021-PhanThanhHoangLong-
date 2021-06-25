
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import expenseReducer from "./reducers/expenseSlice";





const rootReducer = combineReducers({
  listExpense:expenseReducer
  
});


const store = configureStore({
  reducer: rootReducer,
});
store.subscribe(() => {
  console.log(store.getState());
});



export default store;

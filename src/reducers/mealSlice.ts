import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mealApi from "../api/mealApi";
export const getAll:any=createAsyncThunk('meals/getAll',async(params,thunkAPI)=>{
    const listMeal:any=await mealApi.getAll();
  
    
        
    return Object.values(listMeal);
})
const initialState:any=[]
const mealSlice = createSlice({
    name: "meals",
    initialState: initialState,
    reducers: {
        


    },
    extraReducers:{
        [getAll.fulfilled]:(state,action):any=>{
            
            
            return[
                ...action.payload
            ]
        }
    }
    
});

const { reducer: mealReducer, actions } = mealSlice;
export const {
    
} = actions;
export default mealReducer;

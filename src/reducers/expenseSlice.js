import { createAsyncThunk, createSlice,configureStore  } from "@reduxjs/toolkit";




const expenseSlice = createSlice({
  name: "expenseState",
  initialState: [],
  reducers: {
    addNewItem: (state, action) => {
      state.push(action.payload)
    },
    
  },
  extraReducers: {
 
  },
});

const { reducer: expenseReducer, actions } = expenseSlice;
export const { addNewItem } = actions;
export default expenseReducer;

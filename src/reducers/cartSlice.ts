import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.total += (action.payload.price * action.payload.qty)
            const items = state.items as any
            const idExistMeal = items.findIndex((e: any) => e.id === action.payload.id)
            if (idExistMeal >= 0) {
                items[idExistMeal].qty += action.payload.qty
                state.items = items
                return
            }
            state.items.push(action.payload as never)

        },
        editQty: (state, action) => {
            const { payload } = action
            const { id, diff } = payload
            const items = state.items as any
            const idMeal = items.findIndex((e: any) => e.id === id)
            items[idMeal].qty += diff
            state.total+=(diff*items[idMeal].price)
            if(items[idMeal].qty==0)
            {
                state.items=items.filter((e:any)=>e.id!=id)
                return
            }
            state.items = items

        },


    },
});

const { reducer: cartReducer, actions } = cartSlice;
export const {
    addItem, editQty
} = actions;
export default cartReducer;

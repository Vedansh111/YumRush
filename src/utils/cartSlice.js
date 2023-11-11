import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:['AS'],
    },
    reducers:{
        addItems : (state, action) => {
            state.items.push(action.payload)
        },
        removeItems : (state, action) => {
            state.items.pop(action.payload)
        },
        clearCart : (state) => {
            // state.items.clear()
            state.items = [];
        }
    }
})

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
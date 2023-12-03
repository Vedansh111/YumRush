import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            const itemInCart = state.items.find(items => items.id === action.payload.id);
            itemInCart ? itemInCart.quantity++ : state.items.push({ ...action.payload, quantity: 1 })
        },
        decreamentItem: (state, action) => {
            const itemInCart = state.items.find(items => items.id === action.payload.id);
            if (!itemInCart) return;
            if (itemInCart.quantity === 1) {
                state.items = state.items.filter(items=> items.id !== action.payload.id);
            } else {
                itemInCart.quantity--;
            }
            state.totalItemCount--;
        },
        removeItem: (state, action) => {
            // state.items = state.items.filter(items => items.id !== action.payload);
            state.items.pop(state.items);
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, decreamentItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalItemCount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            // state.items.push(action.payload)
            const itemInCart = state.items.find(item => item.id === action.payload.id);
            itemInCart ? itemInCart.quantity++ : state.items.push({ ...action.payload, quantity: 1 })
            state.totalItemCount++;
        },
        decreamentItem: (state, action) => {
            const itemInCart = state.items.find(item => item.id === action.payload.id);
            if (!itemInCart) return;
            if (itemInCart.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                itemInCart.quantity--;
            }
            state.totalItemCount--;
        },
        removeItem: (state, action) => {
            // state.items.pop(action.payload)
            state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalItemCount--;
        },
        clearCart: (state) => {
            state.items.clear()
            state.totalItemCount = 0;
        }
    }
})

export const { addItem, removeItem, decreamentItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
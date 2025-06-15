import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCartItem: (state) => {
      // state.items.length = 0;
      return { items: [] };
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItem } = CartSlice.actions;

export default CartSlice.reducer;

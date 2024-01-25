import { createSlice } from "@reduxjs/toolkit";

const storedItem = localStorage.getItem("cart");

const initialState = {
  // cart: [],
  cart: storedItem ? JSON.parse(storedItem) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity += 1;
      // totalPrice has static value of rate so every time the item.price changes the total price remain same
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity -= 1;
      
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
// cart is the slice name and cart is the state within it

export const getCartLength = (state) => state.cart.cart.length;

export const getCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;

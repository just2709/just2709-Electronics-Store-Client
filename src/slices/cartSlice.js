import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    setQuantity(state, action) {
      const userId = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).id : "";
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const id = action.payload.id;
      state.cartItems = state.cartItems.filter((x) => x.id != id);
    },
    removeAllCart(state) {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      state.cartItems = [];
    },
    emptyCart(state) {
      state.cartItems = [];
    },
    renderCartAfterLogin(state) {
      state.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    },
  },
});
const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, removeFromCart, setQuantity, removeAllCart, emptyCart, renderCartAfterLogin } = actions;
export default reducer;

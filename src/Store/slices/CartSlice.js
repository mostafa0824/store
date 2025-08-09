import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  items: savedCart,
  totalPrice: savedCart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0)
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const find = state.items.find((pr) => pr.id === item.id);

      if (find) {
        find.cartQuantity++;
      } else {
        state.items.push({ ...item, cartQuantity: 1 });
      }

      state.totalPrice += item.price;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((pr) => pr.id === id);

      if (item) {
        state.totalPrice -= item.price;
        item.cartQuantity--;

        if (item.cartQuantity === 0) {
          state.items = state.items.filter((pr) => pr.id !== id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

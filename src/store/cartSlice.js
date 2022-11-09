import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart?.find(
        (item) => item.name === action.payload.name
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          name: action.payload.name,
          image: action.payload.image,
          quantity: 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

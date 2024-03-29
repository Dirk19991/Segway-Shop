import { Category } from './../main/featuredScooter/FeaturedScooter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Accessory } from '../main/accessories/Accessories';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface Cart {
  cart: CartItem[];
}

const initialState: Cart = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem | Category | Accessory>) {
      const itemInCart = state.cart?.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    decreaseItems(
      state,
      action: PayloadAction<CartItem | Category | Accessory>
    ) {
      const itemInCart = state.cart?.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      } else {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart = state.cart.filter((elem, i) => i !== index);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, decreaseItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface PlaceOrder {
  orderPlaced: boolean;
}

const initialState: PlaceOrder = {
  orderPlaced: false,
};

const placeOrderSlice = createSlice({
  name: 'placeOrder',
  initialState,
  reducers: {
    placeOrder(state, action) {
      state.orderPlaced = action.payload;
    },
  },
});

export const { placeOrder } = placeOrderSlice.actions;

export default placeOrderSlice.reducer;

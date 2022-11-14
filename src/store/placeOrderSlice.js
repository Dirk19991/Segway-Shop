import { createSlice } from '@reduxjs/toolkit';

const placeOrderSlice = createSlice({
  name: 'placeOrder',
  initialState: {
    orderPlaced: false,
  },
  reducers: {
    placeOrder(state, action) {
      state.orderPlaced = action.payload;
    },
  },
});

export const { placeOrder } = placeOrderSlice.actions;

export default placeOrderSlice.reducer;

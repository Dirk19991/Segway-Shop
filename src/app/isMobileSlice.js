import { createSlice } from '@reduxjs/toolkit';

const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState: {
    isMobile: false,
  },
  reducers: {
    setMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { setMobile } = isMobileSlice.actions;

export default isMobileSlice.reducer;

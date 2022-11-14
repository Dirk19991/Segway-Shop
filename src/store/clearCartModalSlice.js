import { createSlice } from '@reduxjs/toolkit';

const clearCartModalSlice = createSlice({
  name: 'clearCartModal',
  initialState: {
    open: false,
  },
  reducers: {
    toggleModal(state, action) {
      state.open = action.payload;
    },
  },
});

export const { toggleModal } = clearCartModalSlice.actions;

export default clearCartModalSlice.reducer;

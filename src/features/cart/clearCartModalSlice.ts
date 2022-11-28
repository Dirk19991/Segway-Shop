import { createSlice } from '@reduxjs/toolkit';

interface ClearCartModal {
  open: boolean;
}

const initialState: ClearCartModal = {
  open: false,
};

const clearCartModalSlice = createSlice({
  name: 'clearCartModal',
  initialState,
  reducers: {
    toggleModal(state, action) {
      state.open = action.payload;
    },
  },
});

export const { toggleModal } = clearCartModalSlice.actions;

export default clearCartModalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
    chosenItem: null,
  },
  reducers: {
    toggleModal(state, action) {
      state.open = action.payload;
    },
    chooseItem(state, action) {
      state.chosenItem = action.payload;
    },
  },
});

export const { toggleModal, chooseItem } = modalSlice.actions;

export default modalSlice.reducer;

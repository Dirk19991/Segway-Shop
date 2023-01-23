import { Category } from './../main/featuredScooter/FeaturedScooter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Modal {
  open: boolean;
  chosenItem: null | Category;
}

const initialState: Modal = {
  open: false,
  chosenItem: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
    chooseItem(state, action: PayloadAction<Category>) {
      state.chosenItem = action.payload;
    },
  },
});

export const { toggleModal, chooseItem } = modalSlice.actions;

export default modalSlice.reducer;

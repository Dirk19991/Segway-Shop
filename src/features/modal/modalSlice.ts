import { createSlice } from '@reduxjs/toolkit';

interface ChosenItem {
  id: number;
  name: string;
  image: string;
  maxSpeed: string;
  maxDistance: string;
  battery: string;
  weight: string;
  charge: string;
  price: string;
}

interface Modal {
  open: boolean;
  chosenItem: null | ChosenItem;
}

const initialState: Modal = {
  open: false,
  chosenItem: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
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

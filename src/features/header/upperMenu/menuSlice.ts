import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuOpened {
  menuOpened: boolean;
}

const initialState: MenuOpened = {
  menuOpened: false,
};

const menuOpenedSlice = createSlice({
  name: 'menuOpened',
  initialState,
  reducers: {
    toggleMenu(state, action: PayloadAction<boolean>) {
      state.menuOpened = action.payload;
    },
  },
});

export const { toggleMenu } = menuOpenedSlice.actions;

export default menuOpenedSlice.reducer;

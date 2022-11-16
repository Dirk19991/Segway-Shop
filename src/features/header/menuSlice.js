import { createSlice } from '@reduxjs/toolkit';

const menuOpenedSlice = createSlice({
  name: 'menuOpened',
  initialState: {
    menuOpened: true,
  },
  reducers: {
    toggleMenu(state, action) {
      state.menuOpened = action.payload;
    },
  },
});

export const { toggleMenu } = menuOpenedSlice.actions;

export default menuOpenedSlice.reducer;

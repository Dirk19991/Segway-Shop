import { createSlice } from '@reduxjs/toolkit';

const featuresSlice = createSlice({
  name: 'features',
  initialState: {
    delivery: true,
    warranty: false,
    support: false,
    charge: false,
  },
  reducers: {
    changeHighlight(state, action) {
      state.delivery = false;
      state.warranty = false;
      state.support = false;
      state.charge = false;
      state[action.payload] = true;
    },
  },
});

export const { changeHighlight } = featuresSlice.actions;

export default featuresSlice.reducer;

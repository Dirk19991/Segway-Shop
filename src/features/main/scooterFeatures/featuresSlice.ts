import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Features {
  delivery: boolean;
  warranty: boolean;
  support: boolean;
  charge: boolean;
}

type ChosenFeature = 'delivery' | 'warranty' | 'support' | 'charge';

const initialState: Features = {
  delivery: true,
  warranty: false,
  support: false,
  charge: false,
};

const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    changeHighlight(state, action: PayloadAction<ChosenFeature>) {
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

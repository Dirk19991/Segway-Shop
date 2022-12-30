import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FeaturedModel {
  price: number;
  guarantees: {
    low: boolean;
    middle: boolean;
    high: boolean;
  };
  chosenGuarantee: null | number;
  totalCost: number;
  id: null | number;
}

export type Chosen = 'low' | 'middle' | 'high';

interface ChosenGuarantee {
  price: number;
  chosen: Chosen;
  id: number;
}

const initialState: FeaturedModel = {
  price: 949.99,
  guarantees: {
    low: false,
    middle: false,
    high: false,
  },
  chosenGuarantee: null,
  totalCost: 949.99,
  id: null,
};

const featuredModelSlice = createSlice({
  name: 'featuredModel',
  initialState,
  reducers: {
    chooseGuarantee(state, action: PayloadAction<ChosenGuarantee>) {
      if (state.guarantees[action.payload.chosen] === true) {
        state.chosenGuarantee = null;
        state.totalCost = state.price;
        let elem: Chosen;
        for (elem in state.guarantees) {
          state.guarantees[elem] = false;
        }

        state.id = null;
      } else {
        let elem: Chosen;
        for (elem in state.guarantees) {
          state.guarantees[elem] = false;
        }
        state.guarantees[action.payload.chosen] = true;
        state.chosenGuarantee = action.payload.price;
        state.totalCost = state.price + state.chosenGuarantee;
        state.id = action.payload.id;
      }
    },
  },
});

export const { chooseGuarantee } = featuredModelSlice.actions;

export default featuredModelSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './featuresSlice';

export default configureStore({
  reducer: {
    features: featuresReducer,
  },
});

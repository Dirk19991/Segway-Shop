import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './featuresSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    features: featuresReducer,
    modal: modalReducer,
  },
});

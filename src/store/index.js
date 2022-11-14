import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import featuresReducer from './featuresSlice';
import modalReducer from './modalSlice';
import cartReducer from './cartSlice';
import featuredModelReducer from './featuredModelSlice';
import clearCartModalReducer from './clearCartModalSlice';
import placeOrderReducer from './placeOrderSlice';

const rootReducer = combineReducers({
  features: featuresReducer,
  modal: modalReducer,
  cart: cartReducer,
  featuredModel: featuredModelReducer,
  clearCartModal: clearCartModalReducer,
  placeOrder: placeOrderReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

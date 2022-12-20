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
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import featuresReducer from '../features/main/scooterFeatures/featuresSlice';
import modalReducer from '../features/modal/modalSlice';
import cartReducer from '../features/cart/cartSlice';
import featuredModelReducer from '../features/main/featuredScooter/featuredModelSlice';
import clearCartModalReducer from '../features/cart/clearCartModalSlice';
import placeOrderReducer from '../features/cart/placeOrderSlice';
import menuReducer from '../features/header/upperMenu/menuSlice';

const rootReducer = combineReducers({
  features: featuresReducer,
  modal: modalReducer,
  cart: cartReducer,
  featuredModel: featuredModelReducer,
  clearCartModal: clearCartModalReducer,
  placeOrder: placeOrderReducer,
  menuOpened: menuReducer,
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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

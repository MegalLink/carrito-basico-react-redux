import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/tiendaReducer';
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
  reducer: reducer,
});

const appDispatch = store.dispatch;
const rootState = store.getState;
export { store, appDispatch, rootState };

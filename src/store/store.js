import { configureStore } from '@reduxjs/toolkit';
import tiendaReducer from './reducers/tiendaReducer';
import counterReducer from './reducers/counterReducer';
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
  reducer: { store: tiendaReducer, counter: counterReducer },
});

export { store };

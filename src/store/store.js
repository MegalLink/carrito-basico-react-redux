import { configureStore } from '@reduxjs/toolkit';
import tiendaReducer from './reducers/tiendaReducer';
import counterReducer from './reducers/counterReducer';
import pokemomReducer from './reducers/pokemonReducer';

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
  reducer: {
    store: tiendaReducer,
    counter: counterReducer,
    pokemon: pokemomReducer,
  },
});

export { store };

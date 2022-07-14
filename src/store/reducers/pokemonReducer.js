import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { actionsPokemonEnum } from '../constants';
const initialState = { pokemon: {} };

export const getPokemon = createAsyncThunk(
  actionsPokemonEnum.getPokemon,
  async () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
      const pokemon = res.data;
      console.log('axios', pokemon.name);
      return pokemon;
    });
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state, action) => {
        state.isLoading = 'pending';
        state.name = 'PENDING!!!!!!!!!!!!!!!!!!!';
        state.pokemon = {};
        console.log('loading', state);
      })
      .addCase(
        getPokemon.fulfilled,
        (state, action) => {
          console.log('payload', action.payload);
          state.isLoading = 'loaded';
          state.name = action.payload.name;
          state.pokemon = action.payload;
          console.log('loaded', state.pokemon);
        },
        5000
      );
  },
});

export default pokemonSlice.reducer;

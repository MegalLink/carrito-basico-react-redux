import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { actionsPokemonEnum } from '../constants';
const initialState = { isLoading: false, name: '' };

export const getPokemon = createAsyncThunk(
  actionsPokemonEnum.getPokemon,
  async () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
      console.log('fisrt');
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
        state.isLoading = true;
        state.name = 'PENDING!!!!!!!!!!!!!!!!!!!';
        console.log('loading', state);
      })
      .addCase(
        getPokemon.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.name = action.payload.name;
          console.log('loaded', state);
        },
        5000
      );
  },
});

export default pokemonSlice.reducer;

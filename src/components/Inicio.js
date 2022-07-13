import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../store/reducers/pokemonReducer';
export default function Inicio() {
  const dispatcher = useDispatch();

  return (
    <div>
      <h1>Inicio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
        diam, accumsan at pharetra ut, placerat vitae ipsum. Proin quis mauris
        orci.
      </p>
      <button
        onClick={() => {
          dispatcher(getPokemon());
        }}
      >
        Call thunk pokemon
      </button>
    </div>
  );
}

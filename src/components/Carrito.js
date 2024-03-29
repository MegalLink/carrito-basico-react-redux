import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const Carrito = () => {
  const { pokemon } = useSelector((store) => {
    return store.pokemon;
  });
  console.log(pokemon);
  const { carrito } = useSelector((store) => {
    return store.store;
  });

  const { value } = useSelector((store) => {
    return store.counter;
  });

  return (
    <>
      <h3>Carrito de compras</h3>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <NombreProducto>{producto.nombre}</NombreProducto>
              Cantidad:{producto.cantidad}
            </Producto>
          );
        })
      ) : (
        <p>Aún no has agregado productos al carrito</p>
      )}
      <h2> Cantidad: {value} </h2>
      {JSON.stringify(pokemon) === JSON.stringify({}) ? (
        <p> Not Called thunk </p>
      ) : (
        <>
          <p>Called thunk</p>
          <h2> name: {pokemon.name}</h2>
          <h2> id: {pokemon.id}</h2>
        </>
      )}
    </>
  );
};
const Producto = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;
const NombreProducto = styled.p`
font-weight_bold;
font-size:16px;
color:#000;
`;

export default Carrito;

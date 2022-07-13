import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const Carrito = () => {
  const { isLoading, name } = useSelector((store) => {
    return store.pokemon;
  });

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
      {isLoading == '' ? (
        <p> Not Called thunk </p>
      ) : (
        <>
          <p>Called thunk</p>
          <h2> name: {name}</h2>
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

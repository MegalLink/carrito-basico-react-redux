import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
const Carrito = ({ carrito }) => {
  console.log(carrito);
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
const globalProps = estado => {
  return {
    carrito: estado.carrito
  };
};
export default connect(globalProps)(Carrito);

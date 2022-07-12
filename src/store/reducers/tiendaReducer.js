import { createReducer } from '@reduxjs/toolkit';
import { addProduct } from '../actions/actions';
const estadoInicial = {
  productos: [
    { id: 1, nombre: 'Producto A' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
    { id: 5, nombre: 'Producto 5' },
  ],
  carrito: [],
};

const tiendaReducer = createReducer(estadoInicial, {
  [addProduct]: (estado, accion) => {
    const { id, nombre } = accion;
    if (estado.carrito.length == 0) {
      return {
        ...estado,
        carrito: [{ id, nombre, cantidad: 1 }],
      };
    } else {
      const nuevoCarrito = [...estado.carrito];
      const yaExiste =
        nuevoCarrito.filter((productoC) => {
          return productoC.id === id;
        }).length > 0;
      if (yaExiste) {
        nuevoCarrito.forEach((productoC, index) => {
          if (productoC.id == id) {
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = {
              id,
              nombre,
              cantidad: cantidad + 1,
            };
          }
        });
      } else {
        nuevoCarrito.push({
          id,
          nombre,
          cantidad: 1,
        });
      }
      return {
        ...estado,
        carrito: nuevoCarrito,
      };
    }
  },
});

export default tiendaReducer;

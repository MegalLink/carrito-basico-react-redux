import React, { useState } from "react";
import "./style.css";
import styled from "styled-components";
import { NavLink, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Tienda from "./components/Tienda";
import Error404 from "./components/Error404";
import Carrito from "./components/Carrito";
export default function App() {
  
  

  
  return (
    <Contenedor>
      <Menu>
        <NavLink to="/"> Inicio</NavLink>
        <NavLink to="/blog"> Blog</NavLink>
        <NavLink to="/tienda"> Tienda</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/blog" component={Blog} />
          <Route path="/tienda">
            <Tienda />
          </Route>
          <Route component={Error404} /> //Ruta default
        </Switch>
      </main>
      <aside>
        <Carrito />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

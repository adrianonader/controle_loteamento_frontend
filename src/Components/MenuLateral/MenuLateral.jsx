import React from "react";
import { Link } from "react-router-dom";
import {
  MenuBody,
  NavSubMenu,
  PrimaryButton,
  PrimaryButtonGroup,
  SecundaryButtonGroup,
  NavMenu,
} from "./styles";
function MenuLateral() {
  return (
    <nav>
      <MenuBody>
        <NavMenu>
          <PrimaryButtonGroup>Cientes</PrimaryButtonGroup>
          <NavSubMenu>
            <SecundaryButtonGroup>Cadastrar</SecundaryButtonGroup>
            <SecundaryButtonGroup>Consultar</SecundaryButtonGroup>
          </NavSubMenu>
          <PrimaryButtonGroup>Loteamentos</PrimaryButtonGroup>
          <NavSubMenu>
            <SecundaryButtonGroup>
              <Link to={"cadastro"}>Cadastrar Lote</Link>
            </SecundaryButtonGroup>
            <SecundaryButtonGroup>
              <Link to={"cadloteamento"}>Cadastrar Loteamento</Link>
            </SecundaryButtonGroup>
            <SecundaryButtonGroup>Excluir</SecundaryButtonGroup>
            <SecundaryButtonGroup>
              <Link to={"loteamento"}>Consultar</Link>
            </SecundaryButtonGroup>
          </NavSubMenu>
        </NavMenu>
      </MenuBody>
    </nav>
  );
}

export default MenuLateral;

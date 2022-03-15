import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";
import { ApiLoteamentosContext } from "../Contexts/ApiContext";
import "./Loteamentos.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Loteamentos = () => {
  const { loteamentos, setLoteamentos } = useContext(ApiLoteamentosContext);
  const navigate = useNavigate();

  function linkLoteamento(loteamento) {
    navigate(`/quadras/${loteamento.id}`, { state: { ...loteamento } });
  }
  return (
    <>
      <Container maxWidth="sm">
        <header>
          <Typography variant="h4" className="titulo">
            Loteamentos
          </Typography>
        </header>

        <div className="nomes-loteamentos">
          {loteamentos.map((loteamento) => (
            <ul key={loteamento.id}>
              <li className="nome-loteamento" onClick={() => linkLoteamento(loteamento)}>
                {loteamento.nome}
              </li>
            </ul>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Loteamentos;

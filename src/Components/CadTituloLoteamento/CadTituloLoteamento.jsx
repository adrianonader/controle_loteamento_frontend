import React, { useContext, useState } from "react";
import { TextField, Container, Typography, Button } from "@mui/material";
import axios from "axios";
import { ApiLoteamentosContext } from "../Contexts/ApiContext";

function CadTituloLoteamento() {
  const { loteamentos, setLoteamentos } = useContext(ApiLoteamentosContext);
  const [nomeLoteamento, setNomeLoteamento] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNomeLoteamento({ [name]: value });
    console.log(nomeLoteamento);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3100/api/v1/loteamentos", nomeLoteamento).then((response) => {
      setLoteamentos(response.data);
      alert("Loteamento Cadastrado");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container maxWidth="sm">
          <Typography variant="h4" className="titulo">
            Cadastro de lote
          </Typography>
          <div>
            <TextField
              name="nome"
              id="nome"
              label="Nome do Loteamento"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </Container>
      </form>
    </>
  );
}

export default CadTituloLoteamento;

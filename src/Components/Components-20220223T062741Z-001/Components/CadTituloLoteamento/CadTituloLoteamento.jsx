import React, { useState } from "react";
import { TextField, Container, Typography, Button } from "@mui/material";

function CadTituloLoteamento(props) {
  const [formValores, setformValores] = useState();
  const handleInputChange = (e) => {
    const valor = e.target.value;

    setformValores(valor);
    console.log(valor);
  };

  const handleSubimit = (e) => {
    e.preventDefault();
    props.addLoteamento(formValores);
  };

  return (
    <>
      <form onSubmit={handleSubimit}>
        <Container maxWidth="sm">
          <div>
            <TextField
              name="cadloteamento"
              id="standard-basic"
              label="Nome do Loteamento"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
            />
          </div>
          <button>Cadastrar</button>
        </Container>
      </form>
    </>
  );
}

export default CadTituloLoteamento;

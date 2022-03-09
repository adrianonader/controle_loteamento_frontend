import React from "react";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Clientes.css";

function Clientes() {
  return (
    <>
      <Box>
        <Container maxWidth="md">
          <Typography variant="h4" className="titulo">
            Cadastro de Clientes
          </Typography>
          <form>
            <div className="corpo-form-clientes">
              <TextField
                id="nome"
                label="Nome"
                variant="standard"
                required
                margin="normal"
                name="nome"
                size="small"
                fullWidth={true}
              />
              <div className="corpo-form2-clientes">
                <TextField id="cpf" label="CPF" variant="standard" required margin="normal" name="cpf" size="small" />
              </div>
              <div className="corpo-form2-clientes">
                <TextField id="rg" label="RG" variant="standard" required margin="normal" name="rg" size="small" />
              </div>
            </div>
            <div className="corpo-form-clientes">
              <TextField
                id="endereco"
                label="Endereço"
                variant="standard"
                required
                margin="normal"
                name="endereco"
                size="small"
              />
              <TextField
                id="numero"
                label="Número"
                variant="standard"
                required
                margin="normal"
                name="numero"
                size="small"
              />
              <TextField
                id="bairro"
                label="Bairro"
                variant="standard"
                required
                margin="normal"
                name="bairro"
                size="small"
              />
              <TextField
                id="cidade"
                label="Cidade"
                variant="standard"
                required
                margin="normal"
                name="Cidade"
                size="small"
              />
            </div>
            <div className="corpo-form-clientes">
              <TextField
                id="telefone"
                label="Telefone"
                variant="standard"
                required
                margin="normal"
                name="telefone"
                size="small"
              />
              <TextField
                id="telefone_alt"
                label="Telefone"
                variant="standard"
                required
                margin="normal"
                name="telefone_alt"
                size="small"
              />
              <TextField
                id="email"
                label="e-mail"
                variant="standard"
                required
                margin="normal"
                name="email"
                size="small"
              />
            </div>
          </form>
        </Container>
      </Box>
    </>
  );
}
export default Clientes;

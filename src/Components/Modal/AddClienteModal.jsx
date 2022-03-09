import React from "react";
import { TextField, Button } from "@mui/material";

const AddClienteModal = () => {
  return (
    <>
      <div className="addclientemodal-form">
        <p>+</p>
        <p>Cadastrar novo cliente</p>
      </div>
      <div className="addclientemodal-form2">
        <TextField id="cpf" label="CPF" variant="standard" margin="normal" name="cpf" size="small" />
      </div>
      <Button type="submit">Buscar</Button>
    </>
  );
};

export default AddClienteModal;

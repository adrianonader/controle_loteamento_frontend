import React from "react";
import { TextField, Button } from "@mui/material";
import "./AddClienteModal.css";
const AddClienteModal = () => {
  return (
    <>
      <div className="addclientemodal-form">
        <div className="addclientemodal-form2">
          <TextField id="cpf" label="CPF" variant="standard" margin="normal" name="cpf" size="small" />

          <button className="button-addclientemodal" type="submit">
            Buscar
          </button>
        </div>
        <div className="addclientemodal-form2">
          <p className="mais">+</p>
          <p>Cadastrar novo cliente</p>
        </div>
      </div>
    </>
  );
};

export default AddClienteModal;

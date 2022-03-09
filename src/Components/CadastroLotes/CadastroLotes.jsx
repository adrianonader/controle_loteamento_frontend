import React, { useState, useContext } from "react";
import { TextField, Container, Typography, MenuItem, Select, InputLabel, Button, FormControl } from "@mui/material";
import { ApiLoteamentosContext } from "../Contexts/ApiContext";
import { ApiLotesContext } from "../Contexts/ApiContext";
import {
  InputArea,
  InputCadastroMunicipal,
  InputCartorio,
  InputFrente,
  InputLateral,
  InputLote,
  InputMatricula,
  InputNumero,
  InputQuadra,
  InputValor,
} from "./MaskInputs";
import "./CadastroLotes.css";
import axios from "axios";

function CadastroLotes() {
  const { loteamentos } = useContext(ApiLoteamentosContext);
  const { lotes, setLotes } = useContext(ApiLotesContext);
  const [formValores, setformValores] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformValores({ [name]: value });
  };

  //  const handleInputChange = (e) => {
  //    const { name, value, type, checked } = e.target;
  //    const isCheckbox = type === "checkbox";
  //
  //    const data = formValores[name] || {};
  //    if (isCheckbox) {
  //      data[value] = checked;
  //    }
  //    const newValue = isCheckbox ? data : value;
  //    setformValores({ ...formValores, [name]: newValue });
  //  };

  //const dataSale = sale;
  //
  //const dataForm = formValores;
  //const valorFinal = dataForm.concat(dataSale);
  console.log(formValores);

  const hanldeSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/v1/lotes", formValores).then((response) => {
      setLotes(response.data);
    });
  };

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h4" className="titulo">
          Cadastro de lote
        </Typography>
        <form onSubmit={hanldeSubmit} className="form-cadastro-loteamento">
          <div>
            <FormControl required size="small" sx={{ minWidth: 400 }}>
              <InputLabel name="2">Loteamento</InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="1"
                name="loteamento_id"
                label="Loteamento"
                onChange={handleInputChange}
              >
                {loteamentos.map((loteamento) => (
                  <MenuItem key={loteamento.id} value={loteamento.id}>
                    {loteamento.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="corpo-form">
            <InputCadastroMunicipal onChange={handleInputChange} />

            <InputQuadra onChange={handleInputChange} />

            <InputLote onChange={handleInputChange} />
          </div>

          <div className="corpo-form">
            <TextField
              id="endereco"
              label="Endereço"
              variant="standard"
              required
              className="field-cadmun"
              fullWidth={true}
              margin="normal"
              onChange={handleInputChange}
              name="endereco"
              size="small"
            />

            <div className="corpo-form2">
              <InputNumero onChange={handleInputChange} />
            </div>
          </div>

          <div className="corpo-form">
            <InputArea onChange={handleInputChange} />

            <InputFrente onChange={handleInputChange} />

            <InputLateral onChange={handleInputChange} />
          </div>

          <div className="corpo-form">
            <InputMatricula onChange={handleInputChange} />

            <InputCartorio onChange={handleInputChange} />

            <InputValor id="valor" onChange={handleInputChange} />
          </div>

          <div className="bt-cadastro">
            <Button variant="secundary" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default CadastroLotes;

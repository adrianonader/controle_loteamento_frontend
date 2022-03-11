import React, { useState, useContext } from "react";
import { TextField, Container, Typography, MenuItem, Select, InputLabel, Button, FormControl } from "@mui/material";
import { ApiLoteamentosContext } from "../Contexts/ApiContext";
import { ApiLotesContext } from "../Contexts/ApiContext";
import {
  InputArea,
  InputCadastroMunicipal,
  InputFrente,
  InputLateral,
  InputQuadra,
  InputValor,
  InputLoteInicial,
  InputLoteFinal,
} from "./MaskInputs";
import "./CadastroLotes.css";
import axios from "axios";
import { apiLotes } from "../../Api/api";

function CadVariosLotes() {
  const { loteamentos } = useContext(ApiLoteamentosContext);
  const { lotes, setLotes } = useContext(ApiLotesContext);
  const [formValores, setformValores] = useState({});
  const [loteInicial, setLoteInicial] = useState({});
  const [loteFinal, setLoteFinal] = useState({});
  const [formFinal, setFormFinal] = useState({});

  const handleInputLoteInicial = (e) => {
    const valorinicial = e.target.value;
    setLoteInicial(valorinicial);
  };
  const handleInputLoteFinal = (e) => {
    const valorfinal = e.target.value;
    setLoteFinal(valorfinal);
  };
  async function gerarLotes() {
    for (var numero_lote = loteInicial; numero_lote <= loteFinal; numero_lote++) {
      const arrayLotes = { ...formValores, numero_lote };
      await setFormFinal(arrayLotes);
    }
    console.log(formFinal);
  }
  console.log(formFinal);
  console.log(loteInicial, loteFinal);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformValores({ ...formValores, [name]: value });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3100/api/v1/lotes", formFinal).then((response) => {
      setLotes(response.data);
    });

    apiLotes.get("lotes").then((response) => {
      console.log(" GETLOTES");
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

            <InputLoteInicial onChange={handleInputLoteInicial} />
            <InputLoteFinal onChange={handleInputLoteFinal} />
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
          </div>

          <div className="corpo-form">
            <InputArea onChange={handleInputChange} />

            <InputFrente onChange={handleInputChange} />

            <InputLateral onChange={handleInputChange} />
          </div>

          <div className="corpo-form">
            <InputValor id="valor" onChange={handleInputChange} />
          </div>

          <div className="bt-cadastro">
            <Button variant="secundary" onClick={gerarLotes}>
              Gerar Lotes
            </Button>
            <Button variant="secundary" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default CadVariosLotes;

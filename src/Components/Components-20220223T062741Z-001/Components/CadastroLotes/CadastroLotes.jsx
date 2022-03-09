import React, { useEffect, useState } from "react";
import {
  TextField,
  Container,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import "./CadastroLotes.css";

function CadastroLotes(props) {
  const [formValores, setformValores] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setformValores({ ...formValores, [name]: value });
  };

  const hanldeSubimit = (e) => {
    e.preventDefault();
    props.addLote(formValores);
    // await addDoc(lotesCollectionRef, formValores);

    //const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h4" className="titulo">
          Cadastro de lote
        </Typography>
        <form onSubmit={hanldeSubimit} className="form-cadastro-loteamento">
          <div>
            <InputLabel id="loteamento">Selecione o loteamento:</InputLabel>
            <Select
              variant="standard"
              name="loteamento"
              onChange={handleInputChange}
              sx={{ minWidth: 400 }}
            >
              {props.loteamentos.map((e) => (
                <MenuItem value={e.nome} key={e.nome}>
                  {e.nome}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="corpo-form">
            <TextField
              name="cadmunicipal"
              id="standard-basic"
              label="Cadastro Municipal"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
            />

            <TextField
              id="standard-basic"
              label="Quadra"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="quadra"
            />
            <TextField
              id="standard-basic"
              label="Lote"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="lote"
            />
          </div>
          <div className="corpo-form">
            <TextField
              id="standard-basic"
              label="Endereço"
              variant="standard"
              required
              className="field-cadmun"
              fullWidth={true}
              margin="normal"
              onChange={handleInputChange}
              name="endereco"
            />
            <div className="corpo-form2">
              <TextField
                id="standard-basic"
                label="Número"
                variant="standard"
                required
                className="field-cadmun"
                margin="normal"
                onChange={handleInputChange}
                name="numero"
              />
            </div>
          </div>
          <div className="corpo-form">
            <TextField
              id="standard-basic"
              label="Área total - m²"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="areatotal"
            />

            <TextField
              id="standard-basic"
              label="Frente - m"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="frente"
            />
            <TextField
              id="standard-basic"
              label="Laterais - m"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="laterais"
            />
          </div>
          <div className="corpo-form">
            <TextField
              id="standard-basic"
              label="Matrícula"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              name="matricula"
              onChange={handleInputChange}
            />
            <TextField
              id="standard-basic"
              label="Cartório"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              name="cartorio"
              onChange={handleInputChange}
            />
            <TextField
              id="standard-basic"
              label="Valor de venda - R$"
              variant="standard"
              required
              className="field-cadmun"
              margin="normal"
              onChange={handleInputChange}
              name="valor"
            />
          </div>
          <div className="bt-cadastro">
            <button>Cadastrar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default CadastroLotes;

import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export const InputCadastroMunicipal = (props) => (
  <InputMask
    mask="aa.99.99.99.99"
    alwaysShowMask={false}
    falsevalue={props.value}
    maskChar=""
    onChange={props.onChange}
  >
    {(inputProps) => (
      <TextField
        {...inputProps}
        name="cadastro_municipal"
        id="cadastro_municipal"
        label="Cadastro Municipal"
        variant="standard"
        className="field-cadmun"
        margin="normal"
        size="small"
        inputProps={{ style: { textTransform: "uppercase" } }}
      />
    )}
  </InputMask>
);

export const InputLoteInicial = (props) => (
  <InputMask mask="99" false value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="numero_lote_inicial"
        label="Lote inicial"
        variant="standard"
        required
        className="field-cadmun"
        margin="normal"
        name="numero_lote_inicial"
        size="small"
      />
    )}
  </InputMask>
);

export const InputLoteFinal = (props) => (
  <InputMask mask="99" false value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="numero_lote_final"
        label="Lote final"
        variant="standard"
        required
        className="field-cadmun"
        margin="normal"
        name="numero_lote_final"
        size="small"
      />
    )}
  </InputMask>
);

export const InputQuadra = (props) => (
  <InputMask mask="99" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="quadra"
        label="Quadra"
        variant="standard"
        required
        margin="normal"
        name="quadra"
        size="small"
      />
    )}
  </InputMask>
);

export const InputNumero = (props) => (
  <InputMask mask="9999" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="numero"
        label="Número"
        variant="standard"
        margin="normal"
        name="numero"
        size="small"
      />
    )}
  </InputMask>
);

export const InputArea = (props) => (
  <InputMask mask="999.99" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="area"
        label="Área total - m²"
        variant="standard"
        required
        margin="normal"
        name="area"
        size="small"
      />
    )}
  </InputMask>
);

export const InputFrente = (props) => (
  <InputMask mask="99.99" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="frente"
        label="Frente - m"
        variant="standard"
        required
        margin="normal"
        name="frente"
        size="small"
      />
    )}
  </InputMask>
);

export const InputLateral = (props) => (
  <InputMask mask="99.99" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="lateral"
        label="Laterais - m"
        variant="standard"
        required
        margin="normal"
        name="lateral"
        size="small"
      />
    )}
  </InputMask>
);

export const InputMatricula = (props) => (
  <InputMask mask="999.999" value={props.value} onChange={props.onChange} maskChar="" cursorPosition="end">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="matricula"
        label="Matrícula"
        variant="standard"
        className="field-cadmun"
        margin="normal"
        name="matricula"
        size="small"
      />
    )}
  </InputMask>
);

export const InputCartorio = (props) => (
  <InputMask mask="9" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="cartorio"
        label="Cartório"
        variant="standard"
        margin="normal"
        name="cartorio"
        size="small"
      />
    )}
  </InputMask>
);

export const InputValor = (props) => (
  <InputMask mask="99.999" value={props.value} onChange={props.onChange} maskChar="">
    {(inputProps) => (
      <TextField
        {...inputProps}
        id="valor"
        label="Valor de venda - R$"
        variant="standard"
        required
        margin="normal"
        name="valor"
        size="small"
        type="text"
      />
    )}
  </InputMask>
);

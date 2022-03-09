import React, { useState, useContext } from "react";
import { ApiLotesContext } from "../Contexts/ApiContext";
import "./Modal.css";
import axios from "axios";
import AddClienteModal from "./AddClienteModal";

const Modal = (props) => {
  const { lotes, setLotes } = useContext(ApiLotesContext);
  const [venda, setVenda] = useState(props.loteId);

  const handleInputChange = (e) => {
    console.log(venda, "antes do set");
    const { name, checked } = e.target;
    props.setLoteId((prevState) => ({ ...prevState, [name]: checked }));
    setVenda(props.loteId);

    console.log(venda, "depois do set");
    console.log(props.loteId.vendido);
    changeLotes();
  };
  const changeLotes = () => {
    console.log(venda, "venda use changelotes");
    axios.put(`http://localhost:3000/api/v1/lotes/${props.loteId.id}`, venda).then((response) => {
      props.getLotes(response.data);
    });
  };
  return (
    <div className="fundo">
      <div className="modal">
        <p className="fechar"></p>
        <div className="div-button-modal">
          <button onClick={props.onClose} className="fechar">
            X
          </button>
        </div>
        <div className="conttent"></div>
        <h3>{props.loteId.loteamento_id}</h3>
        <h4 className="quadra-modal">
          <p>Quadra:</p> {props.loteId.cadastro_municipal}
        </h4>
        <div className="Modal-dados-lote">
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">nº do lote</p>
            <p className="lote-item">{props.loteId.numero_lote}</p>
          </div>
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">nº da quadra</p>
            <p className="lote-item">{props.loteId.quadra}</p>
          </div>
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">Endereço</p>
            <p className="lote-item">{props.loteId.endereco}</p>
          </div>
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">Área</p>
            <p className="lote-item">{props.loteId.area}</p>
          </div>
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">Frente</p>
            <p className="lote-item">{props.loteId.frente}</p>
          </div>
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">Lateral</p>
            <p className="lote-item">{props.loteId.lateral}</p>
          </div>
          <div className="Modal-dado-lote">
            <p className="lote-item-titulo">Valor</p>
            <p className="lote-item">{props.loteId.valor}</p>
          </div>
          <div className="Modal-dado-lote">
            <label className="lote-item-titulo">
              Vendido
              <input
                onChange={handleInputChange}
                name="vendido"
                type="checkbox"
                value={venda}
                checked={props.loteId.vendido}
              />
            </label>
          </div>
        </div>
        {props.loteId.vendido ? <AddClienteModal /> : null}

        <div className="div-button-modal-apagar">
          <button type="button" onClick={() => props.deleteLote(props.loteId.id)}>
            Apagar
          </button>
          <button type="button">Editar</button>
        </div>
      </div>
      <p className="final-modal">xxx </p>
    </div>
  );
};
export default Modal;

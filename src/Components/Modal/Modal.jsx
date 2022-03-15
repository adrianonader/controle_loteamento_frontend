import React, { useContext, useState } from "react";
import "./Modal.css";
import axios from "axios";
import AddClienteModal from "./AddClienteModal";
import { ApiLoteamentosContext } from "../Contexts/ApiContext";
const Modal = (props) => {
  const { loteamentos, setLoteamentos } = useContext(ApiLoteamentosContext);
  const { thisLoteamento, setThisLoteamento } = useState();
  const handleInputChange = (e) => {
    const { name, checked } = e.target;

    props.setLoteId((prevState) => ({ ...prevState, [name]: checked }));

    axios.put(`http://localhost:3100/api/v1/lotes/${props.loteId.id}`, { [name]: checked }).then((response) => {
      props.getLotes();
    });
  };
  var a = "";
  console.log(props.loteId.loteamento_id);
  if (props.loteId.vendido == true) {
    var a = "-vendido";
  }

  console.log(thisLoteamento);
  console.log("esses", loteamentos[props.loteId.loteamento_id].nome);
  return (
    <div className="fundo">
      <div className={`modal${a}`}>
        <p className="fechar"></p>
        <div className="div-button-modal">
          <button onClick={props.onClose} className="fechar">
            X
          </button>
        </div>
        <div className="conttent"></div>
        <h3>{loteamentos[props.loteId.loteamento_id].nome}</h3>
        <h4 className="quadra-modal">
          <p>Quadra:</p> {props.loteId.cadastro_municipal}
        </h4>
        <div className="modal-endereco">
          <p className="endereco-item">{props.loteId.endereco}</p>
          <p className="endereco-item">N°</p>
          <p className="endereco-item">{props.loteId.numero ? props.loteId.numero : "s/cad"}</p>
        </div>
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
            <p className="lote-item-titulo">Matrícula</p>
            <p className="lote-item">{props.loteId.matricula ? props.loteId.matricula : "s/cad."}</p>
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
              <input onChange={handleInputChange} name="vendido" type="checkbox" checked={props.loteId.vendido} />
            </label>
          </div>
        </div>
        <div className="div-button-modal-apagar">
          <div>
            <button className={`middle-buttons${a}`} type="button" onClick={() => props.deleteLote(props.loteId.id)}>
              Apagar
            </button>
          </div>

          <div>
            <button className={`middle-buttons${a}`}>Editar</button>
          </div>
        </div>
        {props.loteId.vendido ? <AddClienteModal /> : null}

        <div className="div-button-modal-apagar">
          <button className={`end-buttons${a}`} type="button" onClick={() => props.deleteLote(props.loteId.id)}>
            Apagar
          </button>
          <button className={`end-buttons${a}`} type="button">
            Concluir venda
          </button>
          <button className={`end-buttons${a}`} type="button">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;

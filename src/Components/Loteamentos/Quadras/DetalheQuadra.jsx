import React, { useContext } from "react";
import { ApiLoteamentosContext, ApiLotesContext } from "../../Contexts/ApiContext";
import "./DetalheQuadra.css";

const DetalheQuadra = (props) => {
  const { loteamentos, setLoteamentos } = useContext(ApiLoteamentosContext);
  const { lotes, setLotes } = useContext(ApiLotesContext);

  const selectloteamento = lotes.filter((lote) => lote.loteamento_id == props.ids).map((a) => a);
  const lotesdaquadra = selectloteamento.filter((b) => b.cadastro_municipal == props.cad_quadra).map((c) => c);
  const lotesvendidos = lotesdaquadra.filter((d) => d.vendido == true).map((e) => e);

  const sizelotesdaquadra = lotesdaquadra.length;
  const sizelotesvendidos = lotesvendidos.length;
  const sizelotesdisponiveis = sizelotesdaquadra - sizelotesvendidos;

  console.log("todos os lotes", selectloteamento);
  console.log("lotes da quadra", lotesdaquadra);
  console.log("lotes vendidos", lotesvendidos);

  return (
    <>
      <div className={`hr${props.reorganizaQuadra ? "lateral" : ""}`}></div>
      <div className={`detalhecard-corpo${props.reorganizaQuadra ? "lateral" : ""}`}>
        <div className={`detalhecard-corpo-item${props.reorganizaQuadra ? "lateral" : ""}`}>
          <div className={`detalhecard-titulo${props.reorganizaQuadra ? "lateral" : ""}`}> Nº de lotes:</div>
          <div className={`detalhecard-dado${props.reorganizaQuadra ? "lateral" : ""}`}>{sizelotesdaquadra}</div>
        </div>
        <div className={`detalhecard-corpo-item${props.reorganizaQuadra ? "lateral" : ""}`}>
          <div className={`detalhecard-titulo${props.reorganizaQuadra ? "lateral" : ""}`}> Vendidos:</div>
          <div className={`detalhecard-dado${props.reorganizaQuadra ? "lateral" : ""}`}>{sizelotesvendidos}</div>
        </div>
        <div className={`detalhecard-corpo-item${props.reorganizaQuadra ? "lateral" : ""}`}>
          <div className={`detalhecard-titulo${props.reorganizaQuadra ? "lateral" : ""}`}> Disponiveis:</div>
          <div className={`detalhecard-dado${props.reorganizaQuadra ? "lateral" : ""}`}>{sizelotesdisponiveis}</div>
        </div>
      </div>
    </>
  );
};

export default DetalheQuadra;

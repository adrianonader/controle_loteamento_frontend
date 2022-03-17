import React, { useContext, useState } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import { ApiLoteamentosContext, ApiLotesContext } from "../../Contexts/ApiContext";
import DetalheQuadra from "./DetalheQuadra";
import "./Quadras.css";
const Quadras = () => {
  const { ids } = useParams();
  const { lotes } = useContext(ApiLotesContext);
  const [reorganizaQuadra, setReorganizaQuadra] = useState(false);
  const oloteamento = lotes.filter((lote) => lote.loteamento_id == ids).map((a) => a.cadastro_municipal); //Separando todos os lotes do respectivo loteamento
  const quadras = oloteamento.filter((cad, i) => oloteamento.indexOf(cad) === i); // Separando as quadras respectivo loteamento
  const reage = "re";
  return (
    <>
      <header>
        <div onClick={() => setReorganizaQuadra(true)} variant="h4" className="titulo">
          Loteamentos
        </div>
      </header>
      <div className="container">
        <div className={`card-quadras-corpo${reorganizaQuadra ? "lateral" : ""}`}>
          {quadras.map((cad_quadra, index) => (
            <Link to={`loteamento/${cad_quadra}`}>
              <div
                className={`card-quadras${reorganizaQuadra ? "lateral" : ""}`}
                onClick={() => setReorganizaQuadra(true)}
              >
                <h6 className="card-quadras-title">Quadra:</h6>
                <ul key={index}>
                  <li>
                    <p className={`card-quadras-quadra${reorganizaQuadra ? "lateral" : ""}`}>{cad_quadra}</p>
                  </li>

                  <li className={`card-detalhe-quadra${reorganizaQuadra ? "lateral" : ""}`}>
                    <DetalheQuadra cad_quadra={cad_quadra} ids={ids} reorganizaQuadra={reorganizaQuadra} />
                  </li>
                  {console.log(Outlet)}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Quadras;

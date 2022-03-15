import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiLoteamentosContext, ApiLotesContext } from "../../Contexts/ApiContext";
import DetalheQuadra from "./DetalheQuadra"

const Quadras = () => {
  const { ids } = useParams()
  const { loteamentos, setLoteamentos } = useContext(ApiLoteamentosContext);
  const { lotes, setLotes } = useContext(ApiLotesContext);


  const oloteamento = lotes.filter(lote => lote.loteamento_id == ids).map(a => a.cadastro_municipal) //Separando todos os lotes do respectivo loteamento
  const quadras = oloteamento.filter((cad, i) => oloteamento.indexOf(cad) === i);// Separando as quadras respectivo loteamento
  
 
  
 
  return (
    <>
      
      <div maxWidth="sm">
        <header>
          <div variant="h4" className="titulo">
            Loteamentos
          </div>
        </header>

        

        <div className="nomes-loteamentos">
          
          {quadras.map((quadra , index) => (
            <ul key={index}>
              <h6>Quadra:</h6>
              <li>
                <p>{quadra}</p>
              </li>
              <li>
              <DetalheQuadra quadra={quadra} ids={ids} />
              </li>
          </ul>
          ))}
        </div>
      </div>
      
     
    </>
  );
};

export default Quadras;

import React, { useContext } from "react";
import { ApiLoteamentosContext, ApiLotesContext } from "../../Contexts/ApiContext";



const DetalheQuadra = (props) =>{
  const { loteamentos, setLoteamentos } = useContext(ApiLoteamentosContext);
  const { lotes, setLotes } = useContext(ApiLotesContext);


    const selectloteamento = lotes.filter(lote => lote.loteamento_id == props.ids).map(a => a)
    const lotesdaquadra = selectloteamento.filter(b => b.cadastro_municipal == props.quadra).map(c => c)
    const lotesvendidos = lotesdaquadra.filter(d=> d.vendido == true).map(e =>e )
    
    const sizelotesdaquadra = lotesdaquadra.length
    const sizelotesvendidos = lotesvendidos.length
    const sizelotesdisponiveis =  sizelotesdaquadra - sizelotesvendidos
    
    console.log("todos os lotes", selectloteamento)
    console.log("lotes da quadra", lotesdaquadra)
    console.log("lotes vendidos", lotesvendidos)
   

    return(
    <>  
    <div> 
        <div> Nº de lotes:</div>
        <div>{sizelotesdaquadra}</div>
    </div>
    <div> 
        <div> Vendidos:</div>
        <div>{sizelotesvendidos}</div>
    </div>
    <div> 
        <div> Disponiveis:</div>
        <div>{sizelotesdisponiveis}</div>
    </div>
    </>  
    )
    
    

}

export default DetalheQuadra
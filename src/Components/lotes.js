import React from "react";

function Lotes(props) {
  return (
    <div>
      <h2>Lote do Rails no React</h2>
      {props.lotes.map((lote) => {
        return (
          <div key={lote.id}>
            <p>{lote.cadastro_municipal}</p>
            <p>{lote.area}</p>
            <p>{lote.lodeamento_id}</p>

            <p>{lote.valor}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Lotes;

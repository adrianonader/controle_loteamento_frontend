import React, { useContext, useEffect, useState } from "react";
import { ApiLotesContext, ApiLoteamentosContext } from "../../Contexts/ApiContext";
import { Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";
import { Tituloh2 } from "./LoteamentoStyle";
import Modal from "../../Modal/Modal";
import axios from "axios";
import { apiLotes } from "../../../Api/api";
import { useParams } from "react-router-dom";
import "./Loteamento.css";

function Loteamento() {
  const { lotes, setLotes } = useContext(ApiLotesContext);
  const { loteamentos } = useContext(ApiLoteamentosContext);
  const [loteId, setLoteId] = useState();
  const { ids, cad_quadra } = useParams();
  const getLotes = () => {};

  useEffect(() => {
    apiLotes.get("lotes").then((response) => {
      console.log(" GETLOTES");
      setLotes(response.data);
    });
  }, []);

  const deleteLote = (e) => {
    if (window.confirm("Deseja apagar o lote?")) {
      axios.delete(`http://localhost:3100/api/v1/lotes/${e}`).then((response) => {
        alert("Lote apagado");
        getLotes();
        setLoteId(null);
      });
    }
  };
  console.log(useParams());
  function onClose() {
    setLoteId(null);
  }
  console.log(loteamentos);
  console.log(ids);
  const lotesquadraid = useParams();
  const teste = ids;
  const lotesformap = lotes.filter((lote) => lote.cadastro_municipal == lotesquadraid.qd).map((a) => a);

  return (
    <>
      <Tituloh2>1</Tituloh2>

      <div className="table-body">
        <Table sx={{ minWidth: 550, maxWidth: 700, m: "auto" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Terrenos</TableCell>

              <TableCell align="right">Lote</TableCell>
              <TableCell align="right">Área m²</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {lotesformap.map((lote) => (
              <TableRow onClick={() => setLoteId(lote)} key={lote.id} sx={{ border: 0 }}>
                <TableCell component="th" scope="row">
                  {lote.cadastro_municipal}
                </TableCell>
                <TableCell align="right">{lote.loteamento}</TableCell>
                <TableCell align="right">{lote.quadra}</TableCell>
                <TableCell align="right">{lote.frente}</TableCell>
                <TableCell align="right">{lote.area}</TableCell>
                <TableCell align="right">{lote.valor}</TableCell>
                <TableCell align="right">{lote.vendido ? "Vendido" : "Disponível"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {loteId ? (
        <Modal loteId={loteId} setLoteId={setLoteId} onClose={onClose} deleteLote={deleteLote} getLotes={getLotes} />
      ) : null}
    </>
  );
}

export default Loteamento;

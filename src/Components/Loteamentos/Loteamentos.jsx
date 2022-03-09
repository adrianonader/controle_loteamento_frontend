import React, { useContext, useEffect, useState } from "react";
import { ApiLotesContext } from "../Contexts/ApiContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tituloh2 } from "./LoteamentoStyle";
import Modal from "../Modal/Modal";
import axios from "axios";
import { apiLotes } from "../../Api/api";
function Loteamentos() {
  const { lotes, setLotes } = useContext(ApiLotesContext);
  const [loteId, setLoteId] = useState();

  const getLotes = () => {
    apiLotes.get("lotes").then((response) => {
      console.log("useffect lotemaneto");

      setLotes(response.data);
    });
  };

  //  useEffect(() => {
  //    getLotes();
  //  }, []);
  //
  const deleteLote = (e) => {
    if (window.confirm("Deseja apagar o lote?")) {
      axios.delete(`http://localhost:3000/api/v1/lotes/${e}`).then((response) => {
        alert("Lote apagado");
        getLotes();
        setLoteId(null);
      });
    }
  };

  function onClose() {
    setLoteId(null);
  }

  return (
    <>
      <Tituloh2>Loteamento Debortole</Tituloh2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550, maxWidth: 700, m: "auto" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Terrenos</TableCell>
              <TableCell align="right">Quadra</TableCell>
              <TableCell align="right">Lote</TableCell>
              <TableCell align="right">Área m²</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {lotes.map((lote) => (
              <TableRow onClick={() => setLoteId(lote)} key={lote.id} sx={{ border: 0 }}>
                <TableCell component="th" scope="row">
                  {lote.cadastro_municipal}
                </TableCell>
                <TableCell align="right">{lote.loteamento}</TableCell>
                <TableCell align="right">{lote.frente}</TableCell>
                <TableCell align="right">{lote.area}</TableCell>
                <TableCell align="right">{lote.valor}</TableCell>
                <TableCell align="right">{lote.vendido ? "Vendido" : "Disponível"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {loteId ? (
        <Modal
          lotes={lotes}
          setLotes={setLotes}
          loteId={loteId}
          setLoteId={setLoteId}
          onClose={onClose}
          deleteLote={deleteLote}
          getLotes={getLotes}
        />
      ) : null}
    </>
  );
}

export default Loteamentos;

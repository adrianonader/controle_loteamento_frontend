import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tituloh2, SquareQuadra } from "./LoteamentoStyle";
function Loteamentos(props) {
  return (
    <>
      <Tituloh2>Loteamento Debortole</Tituloh2>

      <SquareQuadra>
        <p>Quadra</p>NO.22.12.11
      </SquareQuadra>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 550, maxWidth: 700, m: "auto" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Terrenos</TableCell>
              <TableCell align="right">Quadra</TableCell>
              <TableCell align="right">Lote</TableCell>
              <TableCell align="right">Área m²</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.adicionarLote.map((lote) => (
              <TableRow
                key={lote.cadmunicipal}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {lote.cadmunicipal}
                </TableCell>
                <TableCell align="right">{lote.quadra}</TableCell>
                <TableCell align="right">{lote.lote}</TableCell>
                <TableCell align="right">{lote.areatotal}</TableCell>
                <TableCell align="right">{lote.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Loteamentos;

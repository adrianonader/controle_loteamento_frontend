import { Routes, Route, useParams } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import PaginaInicial from "../Components/PaginaInicial/PaginaInicial";
import CadastroLotes from "../Components/CadastroLotes/CadastroLotes";
import Loteamentos from "../Components/Loteamentos/Loteamentos";
import CadTituloLoteamento from "../Components/CadTituloLoteamento/CadTituloLoteamento.jsx";
import Clientes from "../Components/Clientes/Clientes";
import CadVariosLotes from "../Components/CadVariosLotes/CadVariosLotes";
import Loteamento from "../Components/Loteamentos/Quadras/Loteamento";
import Quadras from "../Components/Loteamentos/Quadras/Quadras";

export const AppRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="cadastro" element={<CadastroLotes />} />
        <Route path="cadvarioslotes" element={<CadVariosLotes />} />
        <Route path="loteamentos" element={<Loteamentos />} />
        <Route path="quadras/:ids" element={<Quadras />}>
          <Route path="loteamento/:qd" element={<Loteamento />} />
        </Route>
        <Route path="cadloteamento" element={<CadTituloLoteamento />} />
        <Route path="clientescadastro" element={<Clientes />} />
      </Routes>
    </>
  );
};

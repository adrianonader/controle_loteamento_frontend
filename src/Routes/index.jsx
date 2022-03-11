import { Routes, Route } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import PaginaInicial from "../Components/PaginaInicial/PaginaInicial";
import CadastroLotes from "../Components/CadastroLotes/CadastroLotes";
import Loteamentos from "../Components/Loteamentos/Loteamentos";
import TituloLoteamento from "../Components/CadTituloLoteamento/CadTituloLoteamento.jsx";
import Clientes from "../Components/Clientes/Clientes";
import CadVariosLotes from "../Components/CadVariosLotes/CadVariosLotes";

export const AppRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="cadastro" element={<CadastroLotes />} />
        <Route path="cadvarioslotes" element={<CadVariosLotes />} />
        <Route path="loteamento" element={<Loteamentos />} />
        <Route path="cadloteamento" element={<TituloLoteamento />} />

        <Route path="clientescadastro" element={<Clientes />} />
      </Routes>
    </>
  );
};

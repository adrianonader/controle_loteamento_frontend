import React, { useState, useEffect } from "react";
import { apiLotes, apiLoteamentos } from "../../Api/api";
import { ApiLotesContext, ApiLoteamentosContext } from "./ApiContext";

export const ApiLotesProvider = ({ children }) => {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    apiLotes.get("lotes").then(({ data }) => {
      setLotes(data);
    });
  }, []);
  return <ApiLotesContext.Provider value={{ lotes, setLotes }}>{children}</ApiLotesContext.Provider>;
};

export const ApiLoteamentosProvider = ({ children }) => {
  const [loteamentos, setLoteamentos] = useState([]);
  useEffect(() => {
    apiLoteamentos.get("loteamentos").then(({ data }) => {
      setLoteamentos(data);
    });
  }, []);

  return (
    <ApiLoteamentosContext.Provider value={{ loteamentos, setLoteamentos }}>{children}</ApiLoteamentosContext.Provider>
  );
};

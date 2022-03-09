import React from "react";
import { ApiLotesProvider, ApiLoteamentosProvider } from "./Components/Contexts/ApiProvider";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/index.jsx";

function App() {
  return (
    <>
      <ApiLoteamentosProvider>
        <ApiLotesProvider>
          <ThemeProvider theme={LightTheme}>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </ApiLotesProvider>
      </ApiLoteamentosProvider>
    </>
  );
}

export default App;

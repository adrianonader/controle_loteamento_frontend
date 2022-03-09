import { createTheme } from "@mui/material";
import { yellow, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[900],
      dark: yellow[600],
      light: yellow[500],
      constrasText: cyan[900],
    },
    secondary: {
      main: cyan[900],
      dark: cyan[400],
      light: cyan[200],
      constrasText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
});

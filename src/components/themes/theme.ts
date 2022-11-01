import { createTheme } from "@mui/material"
import { cyan, purple, yellow } from "@mui/material/colors"

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#454646",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#1B1D21",
      default: "#f7f6f3",
    },
  },
})

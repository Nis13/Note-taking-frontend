import { createTheme, ThemeOptions } from "@mui/material";
import { indigo } from "@mui/material/colors";

const typography = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  h1: { fontSize: 36, fontWeight: "bolder" },
  h2: { fontSize: 24, fontWeight: "bold" },
  h3: { fontSize: 14, fontWeight: "bold" },
} satisfies ThemeOptions["typography"];

export const theme = createTheme({
  typography,
  palette: {
    primary: indigo,
    text: {
      primary: "#000000",
      secondary: "#808080",
    },
    warning: {
      main: "#FF6347",
    },
  },
});

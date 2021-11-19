import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import React from "react";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [mode, setMode] = React.useState("dark");

  const changeTheme = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <GlobalContext.Provider value={{ mode, changeTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

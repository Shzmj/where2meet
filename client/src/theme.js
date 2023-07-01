import {
    ThemeOptions, createTheme,
  } from "@mui/material/styles";

export const basicTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#45dc92',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
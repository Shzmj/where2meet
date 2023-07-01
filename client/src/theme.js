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
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            width: "240px",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            padding: "0px"
          }
        }
      },
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: "0px",
            paddingBottom: "0px",
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            // color: "#45dc92",
          },
        },
      },
    }
  });
import {
  createTheme,
} from "@mui/material/styles";

export const appBarHeight = 75;
export const drawerWIdth = "30%";

export const primaryColor = "#45dc92";

export const basicTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
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
          width: `${drawerWIdth}px`,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0px",
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
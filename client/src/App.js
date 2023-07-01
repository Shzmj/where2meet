import React from 'react';
import { AppBar, Toolbar, TextField, Typography, Divider, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import sideDrawer from "./Sidebar/sideDrawer.js";
import { basicTheme, appBarHeight, drawerWIdth } from "./theme.js";
import OurGoogleMaps from "./google_maps.js";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={basicTheme}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWIdth}px)` },
            height: { sm: `${appBarHeight}px` },
            ml: { sm: `${drawerWIdth}px` },
            zIndex: 1500
          }}
        >
          <Toolbar sx={{ height: { sm: `${appBarHeight}px` }, position: "absolute", zIndex: 9 }}>
            <Typography variant="h4">Triangular</Typography>
          </Toolbar>
        </AppBar>
        <Divider />
        <Grid container>
          <Grid item xs={12} sm={8} md={9}>
            {/* Elements on the left */}
            {sideDrawer()}
            <TextField />
          </Grid>
          {/* <Grid item xs={12} sm={4} md={3} style={{ height: '100vh' }}>
            <OurGoogleMaps />
          </Grid> */}
          <OurGoogleMaps />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;

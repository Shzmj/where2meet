import './App.css';
import React from 'react';
import {AppBar, Toolbar, TextField, Typography, Divider} from "@mui/material";
import {
  ThemeProvider,
} from "@mui/material/styles";

import sideDrawer from "./sideDrawer.js"

import {basicTheme, appBarHeight, drawerWIdth} from "./theme.js";

import OurGoogleMaps from "./google_maps.js"

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={basicTheme}>
        <AppBar 
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWIdth}px)` },
            height: {sm: `${appBarHeight}px`},
            ml: { sm: `${drawerWIdth}px` },
          }}>
          <Toolbar sx={{height: {sm: `${appBarHeight}px`}}}>
            <Typography variant="h4">
              Triangular
            </Typography>
          </Toolbar>
        </AppBar>
        <Divider/>
          {sideDrawer()}
        <TextField>
        </TextField>
        <OurGoogleMaps />
      </ThemeProvider>
    </div>
  );
}

export default App;

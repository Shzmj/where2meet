import logo from './logo.svg';
import './App.css';
import React from 'react';
import {AppBar, Toolbar, TextField, 
  IconButton, Typography, Paper, 
  List, ListItem, Drawer,
  ListItemText, ListItemIcon, Divider,
  Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import {
  experimental_sx as sx,
  ThemeProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import sideDrawer from "./sideDrawer.js"

import {basicTheme} from "./theme.js";

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={basicTheme}>
        <AppBar 
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${240}px)` },
            height: {sm: '75px'},
            ml: { sm: `${240}px` },
          }}>
          <Toolbar sx={{height: {sm: "75px"}}}>
            <Typography variant="h4">
              Triangular
            </Typography>
          </Toolbar>
        </AppBar>
        <Divider/>
          {sideDrawer()}
        <TextField>
        </TextField>
      </ThemeProvider>
    </div>
  );
}

export default App;

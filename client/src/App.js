import logo from './logo.svg';
import './App.css';
import React from 'react';
import {AppBar, Toolbar, TextField, 
  IconButton, Typography, Paper, 
  List, ListItem, Drawer} from "@mui/material";
import {
  experimental_sx as sx,
  ThemeProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";

import {basicTheme} from "./theme.js";

function App() {
  

  return (
    <div className="App">
      <ThemeProvider theme={basicTheme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start"  aria-label="menu">
            </IconButton>
            <Typography variant="h5" sx={{"fontWeight": "bold"}}>
              Triangular
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Paper variant="outlined">
          <React.Fragment>
            <List>
              <ListItem>
                asd
              </ListItem>
              <ListItem>
                qwer
              </ListItem>
            </List>
          </React.Fragment>
          </Paper>
        </Drawer>
        <TextField>

        </TextField>
      </ThemeProvider>
    </div>
  );
}

export default App;

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

import {basicTheme} from "./theme.js";

import OurGoogleMaps from "./google_maps.js"

function App() {
  
  const drawer = (
    <div>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
          open
        >
        <Toolbar sx={{height: {sm: "75px"}}}/>
        <Divider/>
        <Paper variant="outlined">
        <React.Fragment>
          <List>
            <ListItem>
              {/* <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon> */}
              <Accordion square={true}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{width: {sm: "240px"}}}
              >
                <Typography>asdf</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
              </Accordion>
            </ListItem>
            <ListItem>
              qwer
            </ListItem>
          </List>
        </React.Fragment>
        </Paper>
      </Drawer>
    </div>
  );

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
          {drawer}
        <TextField>
        </TextField>
        <OurGoogleMaps />
      </ThemeProvider>
    </div>
  );
}

export default App;

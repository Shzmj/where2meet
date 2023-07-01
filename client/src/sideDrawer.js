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

export default function sideDrawer() {
    const listItem = (
        <div>
          <ListItem>
          {/* <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon> */}
          <Accordion square={true}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
        <Divider/>
        </div>
      );
    
    return (
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
              {listItem}
              {listItem}
            </List>
          </React.Fragment>
          </Paper>
        </Drawer>
      </div>
    );
}
import React from 'react';
import {Toolbar, Paper, 
  List, Drawer, Divider} from "@mui/material";

import listItem from "./listItem.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import makeGroup from "./makeGroup.js";
import friendList from "./friendList.js";
import { appBarHeight, drawerWIdth } from '../theme.js';

export default function sideDrawer() {
    
    return (
      <div>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWIdth },
            }}
            open
          >
          <Toolbar sx={{height: {sm: appBarHeight}}}/>
          <Divider/>
          <Paper variant="outlined">
          <React.Fragment>
            <List>
              {listItem("New Group", makeGroup())}
              {listItem("Friends", friendList([
                {
                  "name": "shaam",
                  "preferences": "farding shidding and pooping"
                },
                {
                  "name": "shubh",
                  "preferences": "being a fat fatty"
                }
              ]))}
            </List>
          </React.Fragment>
          </Paper>
        </Drawer>
      </div>
    );
}
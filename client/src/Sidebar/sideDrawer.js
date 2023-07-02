import React from 'react';
import {
  Toolbar, Paper,
  List, Drawer, Divider
} from "@mui/material";

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
        {/* <Toolbar sx={{height: {sm: appBarHeight}}}/> */}
        <Divider sx={{ height: { sm: appBarHeight } }} />
        <Paper>
          <React.Fragment>
            <List>
              {listItem("New Group", makeGroup())}
              {listItem("Friends", friendList([
                {
                  "name": "shaam",
                  "preferences": "Cinema, Restaurant"
                },
                {
                  "name": "shubh",
                  "preferences": "Sports, Restaurant"
                }
              ]))}
            </List>
          </React.Fragment>
        </Paper>
      </Drawer>
    </div>
  );
}
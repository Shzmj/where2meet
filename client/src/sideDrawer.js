import React from 'react';
import {Toolbar, Paper, 
  List, Drawer, Divider} from "@mui/material";

import listItem from "./listItem.js";

export default function sideDrawer() {
    
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
              {listItem()}
              {listItem()}
            </List>
          </React.Fragment>
          </Paper>
        </Drawer>
      </div>
    );
}
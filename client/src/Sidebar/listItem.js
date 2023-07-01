import React from "react";
import {Typography, ListItem, Divider,
    ListItemIcon, Box} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { primaryColor } from "../theme";

export default function listItem(name, component) {
    return (
        <div>
          <ListItem
          sx={{ml: 0, flexDirection: "column"}}
          >
          {/* <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon> */}
          {/* <Accordion square={true}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          >
            <Typography>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {component}
          </AccordionDetails>
          </Accordion> */}
          <Box>
            <Typography
            variant="h6"
            >
              {name}
            </Typography>
          </Box>
          <Divider sx={{
            backgroundColor: primaryColor, 
            borderWidth: "3px", 
            width: "100%",
            mb: 1.5
            }}/>
          {component}
        </ListItem>
        <Divider/>
        </div>
      );
}
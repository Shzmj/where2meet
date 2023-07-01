import React from "react";
import {Typography, ListItem, Divider,
    Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function listItem(name, component) {
    return (
        <div>
          <ListItem>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
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
        </ListItem>
        <Divider/>
        </div>
      );
}
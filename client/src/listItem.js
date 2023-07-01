import React from "react";
import {Typography, ListItem, Divider,
    Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function listItem(component) {
    return (
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
            {component}
          </AccordionDetails>
          </Accordion>
        </ListItem>
        <Divider/>
        </div>
      );
}
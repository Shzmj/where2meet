import React from "react";

import {Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider} from "@mui/material";

export default function friendList(friendList) {

    const listItem = (name, preferences) => (
        console.log(name, preferences),
        <Box>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt={name}/>
                </ListItemAvatar>
                <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Preferences - 
                    </Typography>
                    {preferences}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Box>
    );

    const list = [];

    for (let i = 0; i < friendList.length; i++) {
        list.push(
        <div key={i}>
            {listItem(friendList[i].name, friendList[i].preferences)}
        </div>
        );
    }

    return (
        <Box>
            <List sx={{
                // transform: "translateX(-25px)",
                width: "100%"
            }}>
            {list}
            </List>
        </Box>
    )
}
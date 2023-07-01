import React from "react";

import {TextField, Typography, Checkbox, FormControlLabel, Box} from "@mui/material";

export default function makeGroup() {

    return (
        <Box sx={{ml: 1.5}}>
            <Typography
            variant="h6"
            >

            </Typography>
            <TextField
            label="Group Name"
            sx={{mb: 1.5}}
            />
            <TextField
            label="Your Name"
            sx={{mb: 1.5}}
            />
            <TextField
            label="Location"
            sx={{mb: 1.5}}
            />
            <Typography
            sx={{mt: 1.5, mb: 1.5}}
            >
                Preferred Event Types
            </Typography>
            <FormControlLabel
            label="Restaurant"
            control={<Checkbox/>}
            >
            </FormControlLabel>
            <FormControlLabel
            label="Cinema"
            control={<Checkbox/>}
            >
            </FormControlLabel>
            <FormControlLabel
            label="Club"
            control={<Checkbox/>}
            >
            </FormControlLabel>
            <FormControlLabel
            label="Sports"
            control={<Checkbox/>}
            >
            </FormControlLabel>
        </Box>
    );
}
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { TextField, Popover, Typography } from "@mui/material";
import { useMemo, useCallback, useRef } from "react";

export default function Places({ setCenter }) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete();
    return (
        <div>
            <TextField id="outlined-basic" value={value} variant="outlined" onChange={e => setValue(e.target.value)} placeholder="Add starting address" />
            <Popover>
                {status === "OK" && data.map(({ place_id, description }) => {
                    <Typography key={place_id} onClick={async () => {
                        setValue(description, false);
                        clearSuggestions();
                        try {
                            const results = await getGeocode({ address: description });
                            const { lat, lng } = await getLatLng(results[0]);
                            setCenter({ lat, lng });
                        } catch (error) {
                            console.log("error!");
                        }
                    }}>
                        {description}
                    </Typography>
                })}
            </Popover>
            <h1>Places</h1>
        </div>
    )
}
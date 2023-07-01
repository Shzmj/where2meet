import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import RoomIcon from '@mui/icons-material/Room';

export default function OurGoogleMaps() {

	//loads map using Manav's hidden API key.
	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY, });

	//renders map using map function
	if (!isLoaded) return <div>loading google map...</div>;
	return <Map />;
}


//renders google map using markers.
function Map() {

	//creates pins given location and
	//uses memoisation to ensure pin stays in place if map re-renders.
	const blueMountains = useMemo(() => ({ lat: -33.680640, lng: -209.698501 }), []);
	const northEastHarbour = useMemo(() => ({ lat: -33.845184, lng: -208.772438 }), []);
	const coogeeBeach = useMemo(() => ({ lat: -33.921355, lng: -208.741788 }), []);

	return <GoogleMap
		zoom={10}
		center={{ lat: -33.78827854, lng: -209.5010376 }}
		mapContainerClassName="map-container"
	>
		<MarkerF position={blueMountains} icon={RoomIcon} />
		<MarkerF position={northEastHarbour} icon={RoomIcon} />
		<MarkerF position={coogeeBeach} icon={RoomIcon} />
	</GoogleMap>
}
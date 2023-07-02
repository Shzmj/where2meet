import { useMemo, useCallback, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { GoogleMap, useLoadScript, MarkerF, Circle, usePlaces } from "@react-google-maps/api";
import RoomIcon from '@mui/icons-material/Room';
import * as turf from '@turf/turf'

//temporary->since MUI wasn't working with google maps. consider using advanced markers.
import yellow_marker from "./yellow_marker.png"


export default function OurGoogleMaps() {

	//loads map using Manav's hidden API key.
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
		libraries: ["places"],
	});

	//renders map using map function
	if (!isLoaded) return <div>loading google map...</div>;
	return <Map />;
}


//renders google map using markers.
function Map() {
	const [centerPoint, setCenter] = useState({ lat: -33.78827854, lng: -209.5010376 });
	const mapRef = useRef();
	const options = useMemo(
		() => ({
			disableDefaultUI: true,
		}),
		[]
	);
	const onLoad = useCallback((map) => (mapRef.current = map), []);
	//creates pins given location and
	//uses memoisation to ensure pin stays in place if map re-renders.
	const blueMountains = useMemo(() => ({ lat: -33.680640, lng: -209.698501 }), []);
	const northEastHarbour = useMemo(() => ({ lat: -33.845184, lng: -208.772438 }), []);
	const coogeeBeach = useMemo(() => ({ lat: -33.921355, lng: -208.741788 }), []);


	// TODO: add implementation to fetch locations from db
	//first and last coordinate need to be the same
	const coordinates = [
		[-33.680640, -209.698501],
		[-33.845184, -208.772438],
		[-33.921355, -208.741788 ],
		[-33.680640, -209.698501]
	];


	// finds central point of all the locations
	var polygon = turf.polygon([coordinates]);
	var centroid = turf.centroid(polygon);
	console.log(centroid.geometry.coordinates);
	const centroid_memo = useMemo(() => ({ lat: centroid.geometry.coordinates[0], lng: centroid.geometry.coordinates[1] }), []);

	// TODO: make api call for points of interest around the centroid
	// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters

	const { isLoaded: placesLoaded, loadError: placesLoadError } = usePlaces();
	const placesService = useRef();

	useEffect(() => {
	  if (placesLoaded) {
		placesService.current = new window.google.maps.places.PlacesService(mapRef.current.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
	  }
	}, [placesLoaded]);




	return (
		<>
			<div className="map">
				<GoogleMap
					zoom={10}
					center={centerPoint}
					mapContainerClassName="map-container"
					options={options}
					onLoad={onLoad}
				>
					<MarkerF position={blueMountains} label="shubh" />
					<MarkerF position={northEastHarbour} label="shaam"/>
					<MarkerF position={coogeeBeach} label="soham"/>
					<MarkerF position={centroid_memo} label="centroid" icon={yellow_marker} />
				</GoogleMap>
			</div>
			<RoomIcon />
			{placesLoaded && placesService.current && (
      			<POIList placesService={placesService.current} center={centroid_memo} />
    		)}
		</>
	)
}
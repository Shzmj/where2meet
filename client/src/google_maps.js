import { useMemo, useCallback, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { GoogleMap, useLoadScript, MarkerF, Circle } from "@react-google-maps/api";
import RoomIcon from '@mui/icons-material/Room';
import * as turf from '@turf/turf'

//TODO: temporary->consider using advanced markers. This looks ugly.
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

	const mapRef = useRef();
	const options = useMemo(() => ({ disableDefaultUI: true,}), []);

	// TODO: add implementation to fetch locations from mongodb
	//first and last coords need to be the same
/*
	const given_users_data = TODO_shubh_function(TODO_url_groupID_string)
	var curr_users_data = given_users_data
	var coordinates;
	for (int i = 0; i < curr_users_data; i++) {
		coordinates.push(curr_users_data[i].coordinates);
	}
	coordinates.push(curr_users_data[0].coordinates);
*/
	const coordinates = [
		[-33.680640, -209.698501],
		[-33.845184, -208.772438],
		[-33.921355, -208.741788],
		[-33.680640, -209.698501]
	];

	// finds central point of all the people's locations
	var polygon = turf.polygon([coordinates]);
	var centroid = turf.centroid(polygon);
	console.log(centroid.geometry.coordinates);
	const centroid_memo = useMemo(() => ({ lat: centroid.geometry.coordinates[0], lng: centroid.geometry.coordinates[1] }), [centroid.geometry.coordinates]);


	//uses google places to find relevant places.
	const onLoad = useCallback((map) => {
		mapRef.current = map;
		const service = new window.google.maps.places.PlacesService(map);

		// Define parameters for the nearbySearch.
		//TODO: get the radius, and event type from form.
		const request = {
			location: centroid_memo,
			radius: '500',
			type: ['restaurant'],
		};

		// Call nearbySearch and print results
		//TODO: currently printing in console, get it to print in sidebar somehow.
		service.nearbySearch(request, (results, status) => {
			if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				console.log(results);
			}
		});
	}, [centroid_memo]);

	//creates pins from given coords.
	//TODO: write these, and their call in the return statement in an array somehow.
	const blueMountains = useMemo(() => ({ lat: -33.680640, lng: -209.698501 }), []);
	const northEastHarbour = useMemo(() => ({ lat: -33.845184, lng: -208.772438 }), []);
	const coogeeBeach = useMemo(() => ({ lat: -33.921355, lng: -208.741788 }), []);


	return (
		<>
			<div className="map">
				<GoogleMap
					zoom={10}
					center={centroid_memo}
					mapContainerClassName="map-container"
					options={options}
					onLoad={onLoad}
				>
					<MarkerF position={blueMountains} label="shubh" />
					<MarkerF position={northEastHarbour} label="shaam" />
					<MarkerF position={coogeeBeach} label="soham" />
					<Circle center={centroid_memo} radius={15000} options={circleOptions} />
					<MarkerF position={centroid_memo} label="centroid" icon={yellow_marker} />
				</GoogleMap>
			</div>
		</>
	)
}

const defaultOptions = {
	strokeOpacity: 0.5,
	strokeWeight: 2,
	clickable: false,
	draggable: false,
	editable: false,
	visible: true,
};

const circleOptions = {
	...defaultOptions,
	zIndex: 3,
	fillOpacity: 0.05,
	strokeColor: "#8BC34A",
	fillColor: "#8BC34A",
};
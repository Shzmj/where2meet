import { useMemo, useCallback, useRef, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, Circle } from "@react-google-maps/api";
import RoomIcon from '@mui/icons-material/Room';
import { points, center } from '@turf/turf';

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


	// add implementation to fetch locations from db
	const coordinates = [
		[-74.0060, 40.7128],
		[-118.2437, 34.0522],
		[-0.1278, 51.5074],
	];


	// need to find central point of all the locations
	const allPoint = points(coordinates);
	const centroid = center(allPoint);
	const centralCoordinate = center.geometry.coordinates;
	const [longitude, latitude] = centralCoordinate;
	console.log(longitude, latitude)

	// make api call
	// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters



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
					<MarkerF position={blueMountains} icon={RoomIcon} />
					<MarkerF position={northEastHarbour} icon={RoomIcon} />
					<MarkerF position={coogeeBeach} icon={RoomIcon} />
					{/* <Circle center={centroid.geometry.coordinates} radius={10000} /> */}
				</GoogleMap>
			</div>
		</>
	)
}
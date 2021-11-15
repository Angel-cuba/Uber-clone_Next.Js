import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYW5nZWxjdWJhZmlubGFuZGlhIiwiYSI6ImNrdm13M2F4ajlraTQyb3M3M3R4dHU5czIifQ.BXzxXHExlRbDWwmZ3WxJhw';

const Map = ({ pickupCoordinates, destinationCoordinates }) => {
	console.log(pickupCoordinates, destinationCoordinates);
	useEffect(() => {
		//if (map.current) return; // initialize map only once
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			//center: [60.192059, 24.945831],
			center: [-99.29011, 39.39172], //USA
			zoom: 3,
		});
		if (pickupCoordinates) {
			addToMap(map, pickupCoordinates);
		}
		if (destinationCoordinates) {
			addToMap(map, destinationCoordinates);
		}
	}, [pickupCoordinates, destinationCoordinates]);

	const addToMap = (map, coordinates) => {
		// Create a default Marker and add it to the map.
		const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
		// Create a default Marker, colored black, rotated 45 degrees.
		// const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
		// 	.setLngLat(coordinates)
		// 	.addTo(map);
	};

	return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
	flex-1
`;

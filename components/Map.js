import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYW5nZWxjdWJhZmlubGFuZGlhIiwiYSI6ImNrdm13M2F4ajlraTQyb3M3M3R4dHU5czIifQ.BXzxXHExlRbDWwmZ3WxJhw';

const Map = () => {
	useEffect(() => {
		//if (map.current) return; // initialize map only once
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			//center: [60.192059, 24.945831],
			center: [-99.29011, 39.39172], //USA
			zoom: 3,
		});
	});

	return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
	flex-1
`;

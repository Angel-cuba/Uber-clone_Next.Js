import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYW5nZWxjdWJhZmlubGFuZGlhIiwiYSI6ImNrdm13M2F4ajlraTQyb3M3M3R4dHU5czIifQ.BXzxXHExlRbDWwmZ3WxJhw';

export default function Home() {
	// const map = new mapboxgl.Map({
	// 	container: 'map', // container ID
	// 	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	// 	center: [-74.5, 40], // starting position [lng, lat]
	// 	zoom: 9, // starting zoom
	// });

	useEffect(() => {
		console.log('hoal');
	}, []);

	return (
		<Wrapper>
			<Map>Map</Map>
			<ActionItem>Started</ActionItem>
		</Wrapper>
	);
}

const Wrapper = tw.div`
	flex flex-col bg-red-300 h-screen
`;
const Map = tw.div`
 bg-red-500 flex-1
`;

const ActionItem = tw.div`
flex-1
`;

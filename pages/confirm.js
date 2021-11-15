import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from '../components/Map';

const Confirm = () => {
	const [pickupCoordinates, setPickupCoordinates] = useState();
	const [destinationCoordinates, setDestinationCoordinates] = useState();

	const GetPickUpCoordinates = () => {
		const pickup = 'Santa Monica';

		//fetch to call api
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
				new URLSearchParams({
					access_token:
						'pk.eyJ1IjoiYW5nZWxjdWJhZmlubGFuZGlhIiwiYSI6ImNrdm13M2F4ajlraTQyb3M3M3R4dHU5czIifQ.BXzxXHExlRbDWwmZ3WxJhw',
					limit: 1,
				})
		)
			.then((response) => response.json())
			.then((data) => setPickupCoordinates(data.features[0].center));
	};

	const GetDropOffCoordinates = () => {
		const destination = 'Los Angeles';

		//fetch to call api
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?` +
				new URLSearchParams({
					access_token:
						'pk.eyJ1IjoiYW5nZWxjdWJhZmlubGFuZGlhIiwiYSI6ImNrdm13M2F4ajlraTQyb3M3M3R4dHU5czIifQ.BXzxXHExlRbDWwmZ3WxJhw',
					limit: 1,
				})
		)
			.then((response) => response.json())
			.then((data) => {
				setDestinationCoordinates(data.features[0].center);
			});
	};

	useEffect(() => {
		GetPickUpCoordinates();
		GetDropOffCoordinates();
	}, []);

	return (
		<Wrapper>
			<Map pickupCoordinates={pickupCoordinates} destinationCoordinates={destinationCoordinates} />
			<RideContainer>
				Ride selector Confirm button
				{/* {pickupCoordinates}
				{destinationCoordinates} */}
			</RideContainer>
		</Wrapper>
	);
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;

const RideContainer = tw.div`
flex-1
`;

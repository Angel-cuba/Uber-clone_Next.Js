import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import RideSelector from './components/RideSelector';
//Location for query address
import { useRouter } from 'next/router';

const Confirm = () => {
	const router = useRouter();
	const { pickup, destination } = router.query;

	const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
	const [destinationCoordinates, setDestinationCoordinates] = useState([0, 0]);

	const GetPickUpCoordinates = (pickup) => {
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

	const GetDropOffCoordinates = (destination) => {
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
		GetPickUpCoordinates(pickup);
		GetDropOffCoordinates(destination);
	}, [pickup, destination]);

	return (
		<Wrapper>
			<Map pickupCoordinates={pickupCoordinates} destinationCoordinates={destinationCoordinates} />
			<RideContainer>
				<RideSelector
					pickupCoordinates={pickupCoordinates}
					destinationCoordinates={destinationCoordinates}
				/>
				<ConfirmButtonContainer>
					<ConfirmButton>Confirm UberX</ConfirmButton>
				</ConfirmButtonContainer>
			</RideContainer>
		</Wrapper>
	);
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
 `;

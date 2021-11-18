import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
const carList = [
	{
		imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
		service: 'UberX',
		multiplier: 1,
	},
	{
		imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
		service: 'UberXL',
		multiplier: 1.5,
	},
	{
		imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
		service: 'Black',
		multiplier: 2,
	},
	{
		imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
		service: 'Comfort',
		multiplier: 1.2,
	},
	{
		imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
		service: 'Black SUV',
		multiplier: 2.8,
	},
];

function RideSelector({ pickupCoordinates, destinationCoordinates }) {
	const [rideDuration, setRideDuration] = useState(1);
	const [distance, setDistance] = useState(1);
	// console.log('rideDuration', rideDuration);

	//get ride duration from MapBox API
	const access_token =
		'pk.eyJ1IjoiYW5nZWxjdWJhZmlubGFuZGlhIiwiYSI6ImNrdm13M2F4ajlraTQyb3M3M3R4dHU5czIifQ.BXzxXHExlRbDWwmZ3WxJhw';
	const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${destinationCoordinates[0]}, ${destinationCoordinates[1]}?access_token=${access_token}`;

	// setRideDuration(data.routes[0].duration / 100)
	useEffect(() => {
		const Get = async () => {
			await fetch(url)
				.then((response) => response.json())
				.then(
					(data) =>
						setRideDuration(data.routes[0].duration / 3600) +
						setDistance(data.routes[0].distance) +
						console.log(data)
				)
				.catch((error) => console.log(error.message));
		};
		Get();
	}, [pickupCoordinates, destinationCoordinates, url]);
	// url

	return (
		<Wrapper>
			<Title>Choose a ride or swipe up for more options</Title>
			<CarList>
				{carList.map((car, index) => (
					<Car key={index}>
						<CarImage src={car.imgUrl} />
						<CarDetails>
							<Service>{car.service}</Service>
							<Time>Time around {rideDuration.toFixed(0)} hours</Time>
							<Distance>
								<Text>Distance:</Text>
								{(distance / 1000).toFixed(2)} km
							</Distance>
						</CarDetails>
						<Price>{'£ ' + (rideDuration * car.multiplier).toFixed(2)}</Price>
					</Car>
				))}
			</CarList>
		</Wrapper>
	);
}

export default RideSelector;

const Wrapper = tw.div`
flex-1 bg-gray-100 overflow-y-scroll flex flex-col
`;

const Title = tw.div`
text-gray-600 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
overflow-y-scroll 
`;

const Car = tw.div`
flex p-4 items-center 
`;

const CarImage = tw.img`
h-14 
`;

const CarDetails = tw.div`
flex-1
`;

const Service = tw.div`
font-medium 
`;

const Time = tw.div`
text-xs text-blue-500
`;
const Distance = tw.div`
text-xl text-blue-900 flex `;

const Price = tw.div`
text-sm
`;
const Text = tw.div`
px-4`;

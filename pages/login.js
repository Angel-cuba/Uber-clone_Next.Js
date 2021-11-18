import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				router.push('/');
			}
		});
	}, []);

	return (
		<Wrapper>
			<UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />

			<Title>Log in to have access to your account</Title>
			<HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
			<SigInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SigInButton>
		</Wrapper>
	);
};

export default Login;

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 p-4
`;

const SigInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`;

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`;

const Title = tw.div`
text-5xl pt-4 text-gray-500 
`;

const HeadImage = tw.img`
object-contain 
`;

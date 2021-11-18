import tw from 'tailwind-styled-components';
import Map from '../pages/components/Map';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					name: user.displayName,
					photoURL: user.photoURL,
				});
			} else {
				setUser(null);
				router.push('/login');
			}
		});
	}, [router]);

	return (
		<Wrapper>
			<Map />
			<ActionItem>
				<Header>
					<UberLogo src="https://res.cloudinary.com/dqaerysgb/image/upload/v1636742897/Uber-Logo_psxun1.png" />
					<Profile>
						<Name>{user && user.name}</Name>
						<UserImage src={user && user.photoURL} onClick={() => signOut(auth)} />
					</Profile>
				</Header>
				<ActionButtons>
					<Link href="/search" passHref>
						<ActionButton>
							<ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
							Ride
						</ActionButton>
					</Link>
					<ActionButton>
						<ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
						Reserve
					</ActionButton>
					<ActionButton>
						<ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
						Reserve
					</ActionButton>
				</ActionButtons>
				<InputButton>Where to...</InputButton>
			</ActionItem>
		</Wrapper>
	);
}

const Wrapper = tw.div`
	flex flex-col  h-screen 

`;

const ActionItem = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-30
`;

const UserImage = tw.img`
h-12 w-12 rounded-full  border-gray-200 p-px cursor-pointer
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex bg-gray-300 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-sl
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex itmes-center mt-8
`;

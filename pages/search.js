import React from 'react';
import tw from 'tailwind-styled-components';

const Search = () => {
	return (
		<Wrapper>
			<ButtonContainer>
				<BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
			</ButtonContainer>

			<InputContainer>
				<FromToIcons>
					<Circle
						src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png
               "
					/>
				</FromToIcons>
			</InputContainer>
		</Wrapper>
	);
};

export default Search;

const Wrapper = tw.div`
bg-gray-100 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12`;
const InputContainer = tw.div``;

const FromToIcons = tw.div``;

const Circle = tw.img``;
const Line = tw.img``;

import styled from "styled-components";
import {useRecoilState} from "recoil";
import {buttonState} from "./buttonState";

const StyledHeader = styled.header`
	background-color: aqua;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	height: 64px;
	position: absolute;
	padding: 0 16px;
`;

export const Header = () => {
	const [buttonHandler, setButtonState] = useRecoilState(buttonState);

	const handleButtonClick = () => {
		setButtonState(!buttonHandler)
	}


	return (
		<StyledHeader>
			<button onClick={handleButtonClick}>
				MENU
			</button>
		</StyledHeader>
	);
};

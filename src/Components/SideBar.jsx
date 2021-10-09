import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {buttonState} from "./buttonState";

const StyledSideBar = styled.nav`
	background-color: yellow;
	top: 64px;
	left: 0;
	bottom: 0;
	width: 200px;
	position: absolute;
  transform: translateX(${({btnEnabled}) => btnEnabled ? '0%' : '-100%'});
  transition: transform 250ms ease-in-out 0s;
`;


export const SideBar = () => {
	const buttonHandler = useRecoilValue(buttonState);

	return (
		<StyledSideBar btnEnabled={buttonHandler}>
			{buttonHandler ? 'on' : 'off'}
		</StyledSideBar>
	);
};

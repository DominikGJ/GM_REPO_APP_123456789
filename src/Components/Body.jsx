import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {buttonState} from "./buttonState";

const StyledBody = styled.body`
  background-color: red;
  top: 64px;
  left: 200px;
  bottom: 0;
  right: 0;
  position: absolute;
`;


export const Body = () => {
	const buttonHandler = useRecoilValue(buttonState);

	return (
		<StyledBody>
    {buttonHandler ? 'on' : 'off'}
		</StyledBody>
	);
};

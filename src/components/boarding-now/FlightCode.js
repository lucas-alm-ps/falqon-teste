import styled from "styled-components";

export default function FlightCode({ flightCode, location }) {
	return (
		<StyledDiv>
			<Code>{flightCode}</Code>
			<Location>{location}</Location>
		</StyledDiv>
	);
}
const StyledDiv = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Code = styled.h2`
	font-family: "runda";
	font-size: 48px;
	font-weight: 300;
	line-height: 48px;
	font-style: normal;
	text-align: left;
	letter-spacing: 1px;
	color: #ffffff;
`;

const Location = styled.h3`
	font-family: "runda";
	font-size: 11px;
	font-weight: 400;
	line-height: 18px;
	font-style: normal;
	text-align: left;
	letter-spacing: 1px;
	opacity: 0.5;
	color: #ffffff;
`;

import styled from "styled-components";

export default function FlightInfo({ title, info }) {
	return (
		<StyledDiv>
			<Title>{title}</Title>
			<Info>{info}</Info>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	width: 103px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

const Title = styled.h4`
	opacity: 0.5;

	font-family: "runda";
	font-size: 11px;
	font-weight: 400;
	line-height: 18px;
	font-style: normal;
	text-align: center;
	letter-spacing: 1px;
	color: #ffffff;
`;

const Info = styled.h3`
	font-family: "runda";
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	font-style: normal;
	text-align: center;
	letter-spacing: 1px;
	color: #ffffff;
`;

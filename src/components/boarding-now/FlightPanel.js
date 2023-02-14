import styled from "styled-components";
import FlightCode from "./FlightCode";
import { FaArrowRight as ArrowIcon } from "react-icons/fa";
import FlightInfo from "./FlightInfo";

export default function FlightPanel() {
	return (
		<StyledDiv>
			<FlightBox>
				<FlightCode FROM flightCode="LHR" location="London, England" />
				<ArrowIcon className="icon" />
				<FlightCode TO flightCode="JFK" location="New York City, USA" />
			</FlightBox>

			<Line />

			<FlightInfoBox>
				<FlightInfo title="FLIGHT" info="VA2501" />
				<FlightInfo title="SEAT" info="35a" />
				<FlightInfo title="GATE" info="34B" />
				<FlightInfo title="DEPARTS" info="10.25" />
				<StyledButton>VIEW BOARDING PASS</StyledButton>
			</FlightInfoBox>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FlightBox = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 25px;

	.icon {
		color: #fff;
	}
`;

const FlightInfoBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Line = styled.hr`
	border: none;
	width: 95%;
	height: 1px;
	opacity: 0.49;

	background: #707070;
	margin: 15px 0 20px 0;
`;

const StyledButton = styled.button`
	width: 180px;
	height: 46px;

	border-radius: 2px;

	background: #431c60;

	font-family: "runda";
	font-size: 10px;
	font-weight: 500;
	line-height: 37px;
	font-style: normal;
	text-align: center;
	letter-spacing: 1px;
	border: none;
	color: #ffffff;

	cursor: pointer;
`;

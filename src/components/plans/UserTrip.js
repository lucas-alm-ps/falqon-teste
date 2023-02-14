import styled from "styled-components";
import tripLocation from "../../assets/lady-liberty.jpg";
import { HiClock as ClockIcon } from "react-icons/hi";

export default function UserTrip() {
	return (
		<Square>
			<img src={tripLocation} alt="" />
			<InfoBox>
				<Title>Lady Liberty Tour</Title>

				<Line />

				<Info>
					<ClockIcon className="icon" /> Thursday 4th Jan at 09.15
				</Info>
			</InfoBox>
		</Square>
	);
}

const Square = styled.section`
	width: 100%;
	height: 280px;
	opacity: 0.91;

	border-radius: 2px;

	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.53));

	background: #272727;
	overflow: hidden;
	position: relative;
	margin-bottom: 20px;

	img {
		height: 280px;
		object-fit: cover;
		object-position: bottom;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const InfoBox = styled.div`
	width: 100%;
	height: 105px;
	background: rgba(33, 33, 33, 0.9);

	position: absolute;
	bottom: 0;
	left: 0;

	box-sizing: border-box;
	padding: 15px 20px;
`;

const Title = styled.h3`
	font-family: "runda";
	font-size: 24px;
	font-weight: 500;
	line-height: 33px;
	font-style: normal;
	text-align: left;
	color: #ffffff;
`;

const Info = styled.p`
	font-family: "runda";
	font-size: 12px;
	font-weight: 400;
	line-height: 37px;
	font-style: normal;
	text-align: left;
	color: #ffffff;

	display: flex;
	align-items: center;

	.icon {
		color: #ffffff;
		font-size: 20px;
		margin-right: 10px;
	}
`;

const Line = styled.hr`
	border: none;
	width: 100%;
	height: 1px;
	opacity: 0.49;

	background: #707070;
	margin: 5px 0;
`;

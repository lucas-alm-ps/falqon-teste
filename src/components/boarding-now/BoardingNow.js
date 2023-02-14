import styled from "styled-components";
import FlightPanel from "./FlightPanel";

export default function BoardingNow() {
	return (
		<Square>
			<BoardInfo>
				<TextInfo color="#8BC34A">BOARDING NOW</TextInfo>
				<TextInfo color="#000">GATE CLOSES AT 10.00</TextInfo>
			</BoardInfo>

			<FlightPanel />
		</Square>
	);
}

const Square = styled.section`
	width: 100%;
	height: 279px;

	border-radius: 2px;

	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.53));

	background: rgba(33, 33, 33, 0.9);
`;

const BoardInfo = styled.div`
	display: flex;
`;

const TextInfo = styled.p`
	width: 50%;
	height: 35px;
	opacity: 0.8;
	${({ color }) => color && `background: ${color};`}

	font-family: "runda";
	font-size: 11px;
	font-weight: 600;
	line-height: 10px;
	font-style: normal;
	text-align: center;
	color: #fff;

	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding: 0 10px;
`;

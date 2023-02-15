import { useState } from "react";
import styled from "styled-components";
import options from "./options";
import TransportOption from "./TransportOption";

export default function TransportOptions() {
	const [selected, setSelected] = useState(null);

	return (
		<Square>
			<InputBox>
				<Title>From</Title>
				<Info>JFK Airport </Info>
			</InputBox>

			<InputBox>
				<Title>To</Title>
				<Info>36 W 38th St, New York, NY 1008</Info>
			</InputBox>

			<Line />

			<Options>
				{options.map((option) => (
					<TransportOption
						Icon={option.Icon}
						title={option.title}
						price={option.price}
						color={option.color}
						selected={selected === option.title}
						setSelected={setSelected}
					/>
				))}
			</Options>
		</Square>
	);
}

const Square = styled.section`
	width: 100%;
	height: 290px;
	opacity: 0.91;

	border-radius: 2px;
	box-sizing: border-box;
	padding: 20px;

	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.53));

	background: linear-gradient(-136deg, #7b1fa2 0%, #4527a0 100%);
	overflow: hidden;
	position: relative;

	img {
		height: 280px;
		object-fit: cover;
		object-position: bottom;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
const InputBox = styled.div`
	width: 100%;
	height: 40px;
	background: #ffffff;

	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 15px;
`;
const Info = styled.h2`
	margin-left: 15px;
	font-family: "runda";
	font-size: 12px;
	font-weight: 400;
	line-height: 37px;
	font-style: normal;
	text-align: left;
	color: #431c60;
`;

const Title = styled.h2`
	margin-left: 15px;

	font-family: "runda";
	font-size: 12px;
	font-weight: 400;
	line-height: 37px;
	font-style: normal;
	text-align: left;
	color: #8e8e8e;
`;

const Line = styled.hr`
	border: none;
	width: 100%;
	height: 1px;

	background: #919191;
	margin: 15px 0 20px 0;
`;

const Options = styled.div`
	display: flex;
	justify-content: space-between;

	@media (min-width: 790px) {
		justify-content: space-around;
	}
`;

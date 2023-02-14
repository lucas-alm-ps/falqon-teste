import styled from "styled-components";

export default function TransportOption({
	Icon,
	title,
	price,
	color,
	selected,
	setSelected,
}) {
	return (
		<StyledDiv onClick={selectItem}>
			<Circle color={color}>
				<Icon className="icon" />
			</Circle>
			<Price isSelected={selected}>{price}</Price>
			<Title isSelected={selected}>{title}</Title>
		</StyledDiv>
	);

	function selectItem() {
		setSelected(title);
	}
}

const StyledDiv = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	.icon {
		color: #fff;
		font-size: 45px;
	}
`;

const Title = styled.h3`
	font-family: "runda";
	font-size: 12px;
	font-weight: 400;
	line-height: 37px;
	font-style: normal;
	text-align: center;
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#b9b9b9")};
	margin-top: -20px;
`;

const Price = styled.h3`
	font-family: "runda";
	font-size: 12px;
	font-weight: 400;
	line-height: 37px;
	font-style: normal;
	text-align: center;
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#b9b9b9")};
`;

const Circle = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.32));

	background: ${({ color }) => color && `${color};`};
`;

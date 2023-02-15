import styled from "styled-components";
import { MdLocationOn as LocationIcon } from "react-icons/md";
import hotelPhoto from "../../assets/hotel.webp";

export default function UserHotel() {
	return (
		<Square>
			<img src={hotelPhoto} alt="" />
			<InfoBox>
				<TitleBox>
					<Title>The James Hotel </Title>

					<StyledButton>4 NIGHTS</StyledButton>
				</TitleBox>

				<Line />

				<Info>
					<LocationIcon className="icon" />
					36 W 38th St, New York, NY 10018
				</Info>
			</InfoBox>
		</Square>
	);
}

const Square = styled.section`
	width: 100%;
	height: 280px;

	border-radius: 2px;

	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.53));

	background: #272727;
	overflow: hidden;
	position: relative;
	margin-bottom: 20px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	@media (min-width: 790px) {
		height: 350px;
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

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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

const StyledButton = styled.button`
	width: 80;
	height: 24px;
	border-radius: 5px;
	border: none;

	background: #7b1fa2;
	opacity: 1;
	background: linear-gradient(-139deg, #7b1fa2 0%, #4527a0 100%);

	font-family: "runda";
	font-size: 11px;
	font-weight: 400;
	font-style: normal;
	text-align: center;
	color: #ffffff;
`;

import Xarrow from "react-xarrows";
import styled from "styled-components";
import driverPhoto from "../../assets/driver.jpg";
import { FaPen as PenIcon } from "react-icons/fa";

export default function PickUp() {
	return (
		<Square>
			<Info>
				<img src={driverPhoto} alt="" />
				<Message>
					Ryan from Corey Car Services is confirmed for pickup at
					<span> 15.40.</span>
				</Message>
			</Info>

			<ItemBox>
				<Circle id="el1" />
				<Title>Pickup</Title>

				<IconBox>
					<PenIcon className="icon" />
				</IconBox>

				<p>John F. Kennedy International Airport Queens</p>
			</ItemBox>

			<ItemBox>
				<Circle id="el2" />
				<Title>Destination</Title>

				<IconBox>
					<PenIcon className="icon" />
				</IconBox>

				<p>36 W 38th Street New York, NY 10018</p>
			</ItemBox>
			<Xarrow
				start={"el1"}
				end={"el2"}
				showHead={false}
				strokeWidth={2}
				lineColor="#fff"
			/>
		</Square>
	);
}

const Square = styled.div`
	width: 100%;
	height: 280px;
	opacity: 0.91;

	box-sizing: border-box;
	padding: 35px 25px;

	border-radius: 2px;

	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.53));

	background: #272727;
	overflow: hidden;
	position: relative;
	margin-bottom: 20px;
`;

const Info = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;

	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
		object-position: bottom;

		border-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		margin-right: 15px;
	}

	span {
		color: #8bc34a;
	}
`;

const ItemBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	p {
		margin-top: auto;
		margin-left: 65px;
		margin-right: 95px;

		font-family: "runda";
		font-size: 12px;
		font-weight: 400;
		line-height: 18px;
		font-style: normal;
		text-align: left;
		color: #ffffff;
	}
`;

const IconBox = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	background: #7b1fa2;
	background: linear-gradient(-141deg, #7b1fa2 0%, #7b1fa2 100%);

	.icon {
		font-size: 20px;
		color: #fff;
		cursor: pointer;
	}
`;

const Circle = styled.div`
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background-color: #7b1fa2;
	outline: 1px solid #ccc;
	outline-offset: 2px;
	-moz-outline-radius: 30px;
`;

const Message = styled.h3`
	width: 100%;
	font-family: "runda";
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	font-style: normal;
	text-align: left;
	color: #ffffff;
`;

const Title = styled.h3`
	font-family: "runda";
	font-size: 20px;
	font-weight: 500;
	line-height: 37px;
	font-style: normal;
	text-align: left;
	color: #ffffff;
	margin-right: auto;
	margin-left: 20px;
`;

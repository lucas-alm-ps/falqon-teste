import styled from "styled-components";
import { HiPlus as AddIcon } from "react-icons/hi";
import UserHotel from "./UserHotel";
import UserTrip from "./UserTrip";
import PickUp from "../picking-up/PickUp";

export default function UserPlans() {
	return (
		<StyledSection>
			<TitleBox>
				<Title>Your Plans</Title>
				<AddButton>
					<AddIcon className="icon" />
				</AddButton>
			</TitleBox>

			<UserHotel />
			<PickUp />
			<UserTrip />
		</StyledSection>
	);
}
const StyledSection = styled.section`
	margin-top: 40px;
`;

const Title = styled.h2`
	font-family: "runda";
	font-size: 18px;
	font-weight: 400;
	line-height: 37px;
	font-style: normal;
	text-align: left;
	color: #aab5e0;
`;

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AddButton = styled.button`
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 50%;

	background: #7b1fa2;
	background: linear-gradient(-141deg, #7b1fa2 0%, #7b1fa2 100%);

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	.icon {
		color: #fff;
		font-size: 25px;
	}
`;

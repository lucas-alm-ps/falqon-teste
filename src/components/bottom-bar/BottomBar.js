import styled from "styled-components";
import {
	FaPlane as PlaneIcon,
	FaCompass as CompassIcon,
	FaUser as UserIcon,
	FaHeart as HeartIcon,
} from "react-icons/fa";

export default function BottomBar() {
	return (
		<Bar>
			<PlaneIcon className="icon" />
			<CompassIcon className="icon" />
			<UserIcon className="icon" />
			<HeartIcon className="icon" />
		</Bar>
	);
}

const Bar = styled.nav`
	width: 100vw;
	height: 56px;
	background-color: #431c60;

	position: fixed;
	bottom: 0;
	left: 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	.icon {
		color: #fff;
		font-size: 25px;
		cursor: pointer;
	}
`;

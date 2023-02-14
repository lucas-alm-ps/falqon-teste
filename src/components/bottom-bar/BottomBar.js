import styled from "styled-components";

export default function BottomBar() {
	return <Bar></Bar>;
}

const Bar = styled.nav`
	width: 100%;
	height: 56px;
	background-color: #431c60;

	position: fixed;
	bottom: 0;
	left: 0;
`;

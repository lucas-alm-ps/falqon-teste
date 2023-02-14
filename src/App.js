import styled from "styled-components";
import BottomBar from "./components/bottom-bar/BottomBar";
import GlobalStyle from "./styles/GlobalStyle";
import mainPhoto from "./assets/newyork-skyline.jpg";
import BoardingNow from "./components/boarding-now/BoardingNow";
import UserPlans from "./components/plans/UserPlans";
import TransportOptions from "./components/transport-options/TransportOptions";

function App() {
	return (
		<Page>
			<GlobalStyle />

			<img src={mainPhoto} alt="" />

			<Title>Let’s get you there…</Title>

			<BoardingNow />
			<UserPlans />
			<TransportOptions />
			<BottomBar />
		</Page>
	);
}

export default App;

const Page = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #261136;

	box-sizing: border-box;
	padding: 30px 20px;
	margin-bottom: 55px;
	overflow-y: scroll;

	img {
		width: 100vw;
		height: 370px;
		object-fit: cover;
		position: fixed;
		top: 0;
		left: 0;
	}
`;

const Title = styled.h1`
	margin-top: 180px;
	margin-bottom: 20px;
	font-family: runda, sans-serif;
	font-size: 36px;
	font-weight: 700;
	line-height: 41px;
	font-style: normal;
	text-align: left;
	letter-spacing: 1px;
	color: #fff;

	position: relative;
	z-index: 1;
`;

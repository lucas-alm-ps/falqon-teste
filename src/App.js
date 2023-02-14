import styled from "styled-components";
import BottomBar from "./components/bottom-bar/BottomBar";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	return (
		<Page>
			<GlobalStyle />
			<BottomBar />
		</Page>
	);
}

export default App;

const Page = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #261136;
`;

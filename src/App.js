import "./App.css";
import CharacterList from "./components/CharacterList";
import EpisodeGuide from "./components/EpisodeGuide";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #4caf50;
  padding: 15px;
  color: white;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <h1>Rick and Morty App</h1>
      </Header>
      <Main>
        <CharacterList />
        <EpisodeGuide />
      </Main>
      <Footer>
        <p>© 2024 Rick and Morty App</p>
      </Footer>
    </AppContainer>
  );
}

export default App;

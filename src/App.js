import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Intro />
      <Feature />
      <Creations />
      <Footer />
    </AppContainer>
  );
};

export default App;

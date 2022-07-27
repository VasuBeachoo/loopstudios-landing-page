import styled from "styled-components";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Intro />
      <Feature />
      <Creations />
      <Footer />
    </AppContainer>
  );
};

export default App;

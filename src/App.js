import { useState, useEffect } from "react";
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
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 1000) {
      setMobile(true);
    } else {
      setMenu(false);
      setMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <AppContainer>
      <GlobalStyle />
      <Intro menu={menu} setMenu={setMenu} />
      <Feature />
      <Creations mobile={mobile} />
      <Footer />
    </AppContainer>
  );
};

export default App;

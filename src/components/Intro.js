import styled from "styled-components";
import NavMenu from "./NavMenu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Heading = styled.h1``;

const Intro = () => {
  return (
    <Container>
      <NavMenu />
      <Heading>IMMERSIVE EXPERIENCES THAT DELIVER</Heading>
    </Container>
  );
};

export default Intro;

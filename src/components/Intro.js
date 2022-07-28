import styled from "styled-components";
import NavMenu from "./NavMenu";
import introBgDesktop from "../assets/desktop/image-hero.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: max(50vw, 50vh);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${introBgDesktop});
  background-size: cover;
  background-position: center;
  padding: 2.65rem var(--side-padding);
`;

const Heading = styled.h1`
  color: var(--White);
  font-family: var(--heading-font);
  font-size: 3.25rem;
  letter-spacing: 0.2rem;
  line-height: 4.6rem;
  max-width: 35rem;
  border: 0.4rem solid var(--White);
  padding: 2.25rem;
  margin: 7.5rem 0 0 0;
`;

const Intro = () => {
  return (
    <Container>
      <NavMenu />
      <Heading>IMMERSIVE EXPERIENCES THAT DELIVER</Heading>
    </Container>
  );
};

export default Intro;

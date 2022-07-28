import styled from "styled-components";
import interactiveImgDesktop from "../assets/desktop/image-interactive.jpg";
import interactiveImgMobile from "../assets/mobile/image-interactive.jpg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  padding: 9rem var(--side-padding) 7.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const Img = styled.img`
  width: 50vw;

  @media (max-width: 1000px) {
    width: 75vw;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  left: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 35rem;
  background-color: var(--White);
  padding: 5rem 5rem 0;
  z-index: 2;

  @media (max-width: 1000px) {
    position: static;
    padding: 5rem 1rem 0;
  }
`;

const Heading = styled.h1`
  color: var(--Black);
  font-family: var(--heading-font);
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 2.75rem;
  margin: 0;
`;

const Paragraph = styled.p`
  color: var(--Dark-Gray);
  font-family: var(--body-font);
  font-size: 1rem;
  letter-spacing: 0.025rem;
  line-height: 1.85rem;
  margin: 1rem 0 0 0;
`;

const Feature = () => {
  return (
    <Container>
      <Img src={interactiveImgDesktop} alt="interactive" />
      <TextContainer>
        <Heading>THE LEADER IN INTERACTIVE VR</Heading>
        <Paragraph>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Paragraph>
      </TextContainer>
    </Container>
  );
};

export default Feature;

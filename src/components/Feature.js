import styled from "styled-components";
import interactiveImgDesktop from "../assets/desktop/image-interactive.jpg";
import interactiveImgMobile from "../assets/mobile/image-interactive.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  padding: 0 var(--side-padding);
`;

const Img = styled.img``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Heading = styled.h1`
  color: var(--Black);
  font-family: var(--heading-font);
`;

const Paragraph = styled.p`
  color: var(--Dark-Gray);
  font-family: var(--body-font);
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

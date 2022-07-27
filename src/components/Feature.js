import styled from "styled-components";
import interactiveImgDesktop from "../assets/desktop/image-interactive.jpg";
import interactiveImgMobile from "../assets/mobile/image-interactive.jpg";

const Container = styled.div``;

const Img = styled.img``;

const TextContainer = styled.div``;

const Heading = styled.h1``;

const Paragraph = styled.p``;

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

import styled from "styled-components";
import earthImgDesktop from "../assets/desktop/image-deep-earth.jpg";
import arcadeImgDesktop from "../assets/desktop/image-night-arcade.jpg";
import soccerImgDesktop from "../assets/desktop/image-soccer-team.jpg";
import gridImgDesktop from "../assets/desktop/image-grid.jpg";
import aboveImgDesktop from "../assets/desktop/image-from-above.jpg";
import pocketImgDesktop from "../assets/desktop/image-pocket-borealis.jpg";
import curiosityImgDesktop from "../assets/desktop/image-curiosity.jpg";
import fisheyeImgDesktop from "../assets/mobile/image-fisheye.jpg";
import earthImgMobile from "../assets/mobile/image-deep-earth.jpg";
import arcadeImgMobile from "../assets/mobile/image-night-arcade.jpg";
import soccerImgMobile from "../assets/mobile/image-soccer-team.jpg";
import gridImgMobile from "../assets/mobile/image-grid.jpg";
import aboveImgMobile from "../assets/mobile/image-from-above.jpg";
import pocketImgMobile from "../assets/mobile/image-pocket-borealis.jpg";
import curiosityImgMobile from "../assets/mobile/image-curiosity.jpg";
import fisheyeImgMobile from "../assets/mobile/image-fisheye.jpg";

const Container = styled.div``;

const HeaderContainer = styled.div``;

const Heading = styled.h2``;

const Btn = styled.button``;

const GridContainer = styled.div``;

const Img = styled.img``;

const Creations = () => {
  const imgs = [
    {
      desktopSrc: earthImgDesktop,
      mobile: earthImgMobile,
      alt: "deep-earth",
    },
    {
      desktopSrc: arcadeImgDesktop,
      mobile: arcadeImgMobile,
      alt: "night-arcade",
    },
    {
      desktopSrc: soccerImgDesktop,
      mobile: soccerImgMobile,
      alt: "team-soccer",
    },
    {
      desktopSrc: gridImgDesktop,
      mobile: gridImgMobile,
      alt: "the-grid",
    },
    {
      desktopSrc: aboveImgDesktop,
      mobile: aboveImgMobile,
      alt: "from-up-above-vr",
    },
    {
      desktopSrc: pocketImgDesktop,
      mobile: pocketImgMobile,
      alt: "pocket-borealis",
    },
    {
      desktopSrc: curiosityImgDesktop,
      mobile: curiosityImgMobile,
      alt: "the-curiosity",
    },
    {
      desktopSrc: fisheyeImgDesktop,
      mobile: fisheyeImgMobile,
      alt: "make-it-fisheye",
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        <Heading>OUR CREATIONS</Heading>
        <Btn>SEE ALL</Btn>
      </HeaderContainer>
      <GridContainer>
        {imgs.map((img) => (
          <Img src={img.desktopSrc} alt={img.alt} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default Creations;

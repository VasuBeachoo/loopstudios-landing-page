import styled from "styled-components";
import earthImgDesktop from "../assets/desktop/image-deep-earth.jpg";
import arcadeImgDesktop from "../assets/desktop/image-night-arcade.jpg";
import soccerImgDesktop from "../assets/desktop/image-soccer-team.jpg";
import gridImgDesktop from "../assets/desktop/image-grid.jpg";
import aboveImgDesktop from "../assets/desktop/image-from-above.jpg";
import pocketImgDesktop from "../assets/desktop/image-pocket-borealis.jpg";
import curiosityImgDesktop from "../assets/desktop/image-curiosity.jpg";
import fisheyeImgDesktop from "../assets/desktop/image-fisheye.jpg";
import earthImgMobile from "../assets/mobile/image-deep-earth.jpg";
import arcadeImgMobile from "../assets/mobile/image-night-arcade.jpg";
import soccerImgMobile from "../assets/mobile/image-soccer-team.jpg";
import gridImgMobile from "../assets/mobile/image-grid.jpg";
import aboveImgMobile from "../assets/mobile/image-from-above.jpg";
import pocketImgMobile from "../assets/mobile/image-pocket-borealis.jpg";
import curiosityImgMobile from "../assets/mobile/image-curiosity.jpg";
import fisheyeImgMobile from "../assets/mobile/image-fisheye.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Heading = styled.h2`
  color: var(--Black);
  font-family: var(--heading-font);
`;

const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  user-select: none;
  background-color: var(--Black);
  color: var(--White);
  font-family: var(--heading-font);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  width: 100%;
`;

const Creation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: 40vw;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const Caption = styled.p`
  color: var(--White);
  font-family: var(--heading-font);
`;

const Creations = () => {
  const creations = [
    {
      caption: "DEEP EARTH",
      desktopSrc: earthImgDesktop,
      mobileSrc: earthImgMobile,
    },
    {
      caption: "NIGHT ARCADE",
      desktopSrc: arcadeImgDesktop,
      mobileSrc: arcadeImgMobile,
    },
    {
      caption: "TEAM SOCCER",
      desktopSrc: soccerImgDesktop,
      mobileSrc: soccerImgMobile,
    },
    {
      caption: "THE GRID",
      desktopSrc: gridImgDesktop,
      mobileSrc: gridImgMobile,
    },
    {
      caption: "FROM UP ABOVE VR",
      desktopSrc: aboveImgDesktop,
      mobileSrc: aboveImgMobile,
    },
    {
      caption: "POCKET BOREALIS",
      desktopSrc: pocketImgDesktop,
      mobileSrc: pocketImgMobile,
    },
    {
      caption: "THE CURIOSITY",
      desktopSrc: curiosityImgDesktop,
      mobileSrc: curiosityImgMobile,
    },
    {
      caption: "MAKE IT FISHEYE",
      desktopSrc: fisheyeImgDesktop,
      mobileSrc: fisheyeImgMobile,
    },
  ];

  let key = 0;

  return (
    <Container>
      <HeaderContainer>
        <Heading>OUR CREATIONS</Heading>
        <Btn>SEE ALL</Btn>
      </HeaderContainer>
      <GridContainer>
        {creations.map((creation) => (
          <Creation key={key++} bg={creation.desktopSrc}>
            <Caption>{creation.caption}</Caption>
          </Creation>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Creations;

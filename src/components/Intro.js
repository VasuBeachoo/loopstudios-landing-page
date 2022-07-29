import styled from "styled-components";
import NavMenu, { Logo, MenuIcon } from "./NavMenu";
import introBgDesktop from "../assets/desktop/image-hero.jpg";

const Container = styled.div`
  position: relative;
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
  padding: 3.65rem var(--side-padding);
`;

const IntroNavMenu = styled(NavMenu)`
  display: flex;

  @media (max-width: 1000px) {
    div {
      display: none;
    }

    ${MenuIcon} {
      @media (max-width: 1000px) {
        display: block;
      }
    }
  }
`;

const Heading = styled.h1`
  color: var(--White);
  font-family: var(--heading-font);
  font-size: clamp(2rem, 5vw, 3.25rem);
  letter-spacing: 0.2rem;
  line-height: 4.6rem;
  max-width: 35rem;
  border: 0.4rem solid var(--White);
  padding: 2.25rem;
  margin: 7.5rem 0 0 0;
`;

const MobileNavMenu = styled(NavMenu)`
  position: absolute;
  top: 7.5rem;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 90%;
  background-color: var(--Black);
  padding: 2rem;
  margin: 0 auto;

  ${Logo} {
    display: none;
  }

  div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.25rem;
  }
`;

const Intro = ({ menu, setMenu }) => {
  return (
    <Container>
      <IntroNavMenu menu={menu} setMenu={setMenu} />
      <Heading>IMMERSIVE EXPERIENCES THAT DELIVER</Heading>
      {menu && <MobileNavMenu />}
    </Container>
  );
};

export default Intro;

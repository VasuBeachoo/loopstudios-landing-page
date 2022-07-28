import styled from "styled-components";
import NavMenu from "./NavMenu";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--Black);
  padding: 3rem var(--side-padding);

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;
  }
`;

const FooterNavMenu = styled(NavMenu)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.15rem;
  width: auto;

  @media (max-width: 1000px) {
    align-items: center;
    gap: 1.75rem;

    div {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.65rem;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
`;

const Icon = styled.img`
  width: 1.4rem;
  border-bottom: 0.1rem solid var(--Black);
  padding-bottom: 0.5rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    border-color: var(--White);
  }
`;

const Copyright = styled.p`
  text-align: right;
  color: var(--Very-Dark-Gray);
  font-family: var(--body-font);
  font-size: 0.9rem;
  margin: 0 0 0 1rem;
`;

const Footer = () => {
  const icons = [
    { src: iconFacebook, alt: "facebook" },
    { src: iconTwitter, alt: "twitter" },
    { src: iconPinterest, alt: "pinterest" },
    { src: iconInstagram, alt: "instagram" },
  ];

  let key = 0;

  return (
    <FooterContainer>
      <FooterNavMenu />
      <Container>
        <SocialIcons>
          {icons.map((icon) => (
            <Icon key={key++} src={icon.src} alt={icon.alt} />
          ))}
        </SocialIcons>
        <Copyright>&copy; 2021 Loopstudios. All rights reserved.</Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

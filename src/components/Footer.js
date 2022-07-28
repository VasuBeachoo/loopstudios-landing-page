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
`;

const FooterNavMenu = styled(NavMenu)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const SocialIcons = styled.div``;

const Icon = styled.img``;

const Copyright = styled.p`
  color: var(--Very-Dark-Gray);
  font-family: var(--body-font);
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

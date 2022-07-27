import styled from "styled-components";
import NavMenu from "./NavMenu";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";

const FooterContainer = styled.div``;

const Container = styled.div``;

const SocialIcons = styled.div``;

const Icon = styled.img``;

const Copyright = styled.p``;

const Footer = () => {
  const icons = [
    { src: iconFacebook, alt: "facebook" },
    { src: iconTwitter, alt: "twitter" },
    { src: iconPinterest, alt: "pinterest" },
    { src: iconInstagram, alt: "instagram" },
  ];

  return (
    <FooterContainer>
      <NavMenu />
      <Container>
        <SocialIcons>
          {icons.map((icon) => (
            <Icon src={icon.src} alt={icon.alt} />
          ))}
        </SocialIcons>
        <Copyright>&copy; 2021 Loopstudios. All rights reserved.</Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

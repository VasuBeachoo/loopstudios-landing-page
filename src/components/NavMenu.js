import styled from "styled-components";
import logo from "../assets/logo.svg";

const Container = styled.div``;

const Logo = styled.img``;

const Links = styled.div``;

const Link = styled.p``;

const UnstyledNavMenu = () => {
  const links = ["About", "Careers", "Events", "Products", "Support"];
  let key = 0;

  return (
    <Container>
      <Logo src={logo} alt="logo" />;
      <Links>
        {links.map((link) => (
          <Link key={key++}>{link}</Link>
        ))}
      </Links>
    </Container>
  );
};

const NavMenu = styled(UnstyledNavMenu)``;

export default NavMenu;

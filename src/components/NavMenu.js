import styled from "styled-components";
import logo from "../assets/logo.svg";

const Logo = styled.img`
  width: 10rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;
`;

const Link = styled.p`
  user-select: none;
  color: var(--White);
  font-family: var(--body-font);
  font-size: clamp(1rem, 0.5vw, 2rem);
  margin: 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`;

const UnstyledNavMenu = ({ className }) => {
  const links = ["About", "Careers", "Events", "Products", "Support"];

  let key = 0;

  return (
    <div className={className}>
      <Logo src={logo} alt="logo" />
      <Links>
        {links.map((link) => (
          <Link key={key++}>{link}</Link>
        ))}
      </Links>
    </div>
  );
};

const NavMenu = styled(UnstyledNavMenu)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default NavMenu;

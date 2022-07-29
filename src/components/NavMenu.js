import styled from "styled-components";
import logo from "../assets/logo.svg";
import menuOpenIcon from "../assets/icon-hamburger.svg";
import menuCloseIcon from "../assets/icon-close.svg";

export const Logo = styled.img`
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

export const MenuIcon = styled.img`
  display: none;
  transition: 0.2s;

  :hover {
    cursor: pointer;
  }
`;

const UnstyledNavMenu = ({ className, menu, setMenu }) => {
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
      <MenuIcon
        src={menu ? menuCloseIcon : menuOpenIcon}
        alt={menu ? "x-icon" : "hamburger-icon"}
        onClick={() => setMenu(!menu)}
      />
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

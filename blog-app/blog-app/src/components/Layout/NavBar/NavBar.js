import { NavBarStyled } from "./NavBar.styled";
import { NavMenu } from "./NavMenu/NavMenu";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <NavMenu />
    </NavBarStyled>
  );
};

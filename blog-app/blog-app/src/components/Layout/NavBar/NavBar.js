import styled from "styled-components";
import { AppColors, navBarSize } from "../../styles/variables";
import { NavMenu } from "./NavMenu/NavMenu";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <NavMenu>gdgdr</NavMenu>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${navBarSize};
  background-color: ${AppColors.light};
`;

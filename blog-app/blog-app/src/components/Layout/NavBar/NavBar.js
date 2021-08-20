import { useContext } from "react";
import { useAuthState } from "../../../api/auth/authenticate";
import { NavBarStyled } from "./NavBar.styled";
import { NavMenu } from "./NavMenu/NavMenu";
import { AuthProvider } from "../../../api/auth/authenticate";

export const NavBar = () => {
  const currentUser = useAuthState();
  console.log(currentUser);

  return (
    <NavBarStyled>
      <NavMenu />
    </NavBarStyled>
  );
};

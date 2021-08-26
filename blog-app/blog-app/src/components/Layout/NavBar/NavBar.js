import { useAuthState } from "../../../api/auth/authenticate";
import { NavBarStyled } from "./NavBar.styled";
import { NavMenu } from "./NavMenu/NavMenu";

export const NavBar = () => {
  const currentUser = useAuthState();

  if (currentUser.isAuth) {
    return (
      <NavBarStyled>
        <NavMenu />
      </NavBarStyled>
    );
  }

  return null;
};

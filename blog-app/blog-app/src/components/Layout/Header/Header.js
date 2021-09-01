import { NavLink } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "../../../api/auth/authenticate";
import { Avatar } from "../../../common/Avatar";
import { Container, FlexRow } from "../../../styles/generalStyles";
import { HeaderStyled } from "./Header.styled";
import { logout } from "../../../api/auth/actions";
import { useHistory } from "react-router";
import { CallModalButton } from "../../../common/CallModalButton";
import { AddPostWindow } from "../../../common/ModalWindow/AddPostWindow";
import { AppIcons } from "../../../styles/variables";

export const Header = () => {
  const user = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleLogout = () => {
    logout(dispatch);
    history.push("/home");
  };
  console.log(user);
  return (
    <HeaderStyled>
      <Container>
        <FlexRow>
          <Avatar />
          <FlexRow flexSpacing="flex-end" flexWrap="wrap">
            <CallModalButton children={<AddPostWindow />} icon={AppIcons.add} />
            <NavLink to="/home">Home</NavLink>
            {!user.isAuth && (
              <>
                <NavLink to="/auth/login">Log In</NavLink>
                <NavLink to="/auth/signup">Sign Up</NavLink>
              </>
            )}
            {user.isAuth && (
              <>
                <button
                  type="link"
                  onClick={() => {
                    history.push({
                      pathname: `/profiles/${user.user.username}`,
                      search: `author=${user.user.username}`,
                      state: {
                        author: user.user.username,
                      },
                    });
                  }}
                >
                  Profile
                </button>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </FlexRow>
        </FlexRow>
      </Container>
    </HeaderStyled>
  );
};

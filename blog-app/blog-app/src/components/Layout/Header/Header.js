import { NavLink } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "../../../api/auth/authenticate";
import { Avatar } from "../../../common/Avatar";
import { Container, FlexRow } from "../../../styles/generalStyles";
import { HeaderStyled } from "./Header.styled";
import { logout } from "../../../api/auth/actions";
import { useHistory } from "react-router";
import { AddPostWindow } from "../../../common/ModalWindow/AddPostWindow";
import { AppIcons, AppColors } from "../../../styles/variables";
import { AppButton } from "../../../common/AppButton/AppButton";
import { useState } from "react";

export const Header = () => {
  const user = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    console.log(isModalOpen);
    setModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    logout(dispatch);
    history.push("/home");
  };

  return (
    <HeaderStyled>
      <AddPostWindow
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <Container>
        <FlexRow>
          <Avatar />
          <FlexRow flexSpacing="flex-end" flexWrap="wrap">
            <AppButton
              content={AppIcons.add}
              color={AppColors.light}
              handle={handleCloseModal}
              position="fixed"
            />
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
                        currentUser: true,
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

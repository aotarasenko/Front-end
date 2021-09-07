import { Link, NavLink } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "../../../api/auth/authenticate";
import { Avatar } from "../../Avatar";
import { Container, FlexRow } from "../../../styles/generalStyles";
import { HeaderStyled } from "./Header.styled";
import { logout } from "../../../api/auth/actions";
import { useHistory } from "react-router";
import AddPostWindow from "../../ModalWindow/AddPostWindow";
import { AppIcons, AppColors } from "../../../styles/variables";
import { AppButton } from "../../AppButton/AppButton";
import { useState } from "react";

export const Header = () => {
  const user = useAuthState();
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const [formValues, setFormValues] = useState();
  const [isModalOpen, setModalOpen] = useState(false);

  const initialValues = {
    title: "",
    body: "",
    description: "",
    tags: [],
  };

  const handleCloseModal = () => {
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
        onSubmit={setFormValues}
        initialValues={initialValues}
      />
      <Container>
        <FlexRow>
          <Avatar />
          <FlexRow flexSpacing="flex-end" flexWrap="wrap">
            <NavLink to="/home">Home</NavLink>
            {!user.isAuth && (
              <>
                <NavLink to="/auth/login">Log In</NavLink>
                <NavLink to="/auth/signup">Sign Up</NavLink>
              </>
            )}
            {user.isAuth && (
              <>
                <AppButton
                  content={AppIcons.add}
                  color={AppColors.light}
                  handle={handleCloseModal}
                  position="fixed"
                />
                <button
                  type="link"
                  onClick={() => {
                    history.push({
                      pathname: `/profiles/${user.user.username}`,
                      search: "",
                      state: {
                        author: user.user.username,
                        currentUser: true,
                      },
                    });
                  }}
                >
                  {" "}
                  Profile
                </button>
                {/* <button
                  type="link"
                  onClick={() => {
                    history.push({
                      pathname: ,
                      search: "",
                      state: {
                        author: user.user.username,
                        currentUser: true,
                      },
                    });
                  }}
                >
                  Profile
                </button> */}
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </FlexRow>
        </FlexRow>
      </Container>
    </HeaderStyled>
  );
};

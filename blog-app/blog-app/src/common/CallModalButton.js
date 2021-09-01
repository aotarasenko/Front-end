import { createContext, useState } from "react";
import styled from "styled-components";
import { useAuthState } from "../api/auth/authenticate";
import { AppColors, AppFontSizes, AppSizes } from "../styles/variables";

export const ModalContext = createContext();

export const CallModalButton = ({ children, icon }) => {
  const [isActive, setActive] = useState(false);

  const user = useAuthState();

  const handleActive = (e) => {
    setActive(!isActive);
  };

  return (
    <ModalContext.Provider value={{ isActive, handleActive }}>
      <>
        {user.isAuth ? (
          <AddButton onClick={handleActive}>{icon}</AddButton>
        ) : (
          ""
        )}
        {isActive ? children : ""}
      </>
    </ModalContext.Provider>
  );
};

const AddButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  color: ${AppColors.white};
  font-size: ${AppFontSizes.large};
  font-weight: bold;
  background-color: ${AppColors.primary} !important;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  svg {
    font-size: ${AppFontSizes.medium};
  }

  @media screen and (min-width: ${AppSizes.tablet}) {
    position: static;
    background-color: transparent;
  }
`;

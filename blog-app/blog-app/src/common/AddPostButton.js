import { createContext, useState } from "react";
import styled from "styled-components";
import { useAuthState } from "../api/auth/authenticate";
import { AppColors, AppFontSizes, AppSizes } from "../styles/variables";
import { AddPostWindow } from "./ModalWindow/AddPostWindow";

export const ModalContext = createContext();

export const AddPostButton = () => {
  const [isActive, setActive] = useState(false);

  const user = useAuthState();

  const handleActive = (e) => {
    e.stopPropagation();
    setActive(!isActive);
  };

  return (
    <ModalContext.Provider value={{ isActive, handleActive }}>
      {user.isAuth ? <AddButton onClick={handleActive}>+</AddButton> : ""}
      {isActive ? <AddPostWindow /> : ""}
    </ModalContext.Provider>
  );
};

const AddButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 60px;
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

  @media screen and (min-width: ${AppSizes.tablet}) {
    position: static;
    background-color: transparent;
  }
`;

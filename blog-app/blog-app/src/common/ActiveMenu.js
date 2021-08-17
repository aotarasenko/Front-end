import { useState } from "react";
import styled from "styled-components";
import { AppColors, AppSizes } from "../styles/variables";

export const ActiveMenu = () => {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => setActive(!isActive);

  return (
    <ActiveMenuStyled onClick={toggleMenu} isActive={isActive}>
      <div></div>
      <div></div>
      <div></div>
    </ActiveMenuStyled>
  );
};

const ActiveMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }

  div {
    position: relative;
    height: 5px;
    width: 100%;
    border-radius: 5px;
    background-color: ${AppColors.white};
    transition: 0.5s transform ease;

    &:first-child {
      position: relative;
      top: -7px;
      height: 5px;
      width: 100%;
      transition: 0.5s transform ease;
    }
    &:last-child {
      position: relative;
      bottom: -7px;
      height: 5px;
      width: 100%;
      transition: 0.5s transform ease;
    }
  }

  ${({ isActive }) =>
    isActive &&
    `
    div {
      transform: scale(0);

      &:first-child{
        transform: rotate(225deg) translate(-7px, -10px);
        transition: 0.5s transform ease;
      }

      &:last-child{
        transform: rotate(-225deg) translate(-7px, 10px);
        transition: 0.5s transform ease;
      }
    }
    
  `}

  @media screen and (min-width: ${AppSizes.tablet}) {
    display: none;
  }
`;

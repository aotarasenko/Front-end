import styled from "styled-components";
import { AppColors } from "../styles/variables";
export const ActiveMenu = () => {
  return (
    <ActiveMenuStyled>
      <div></div>
    </ActiveMenuStyled>
  );
};

const ActiveMenuStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  left: auto;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 40px;
  height: 40px;

  &.is-active {
    div {
      opacity: 0;

      &::before {
        top: 0;
        transform: rotate(45deg);
      }
      &::after {
        top: 0;
        transform: rotate(-45deg);
      }
    }
  }

  &:hover {
    cursor: pointer;
  }

  div {
    position: relative;
    top: 20px;
    height: 2px;
    width: 100%;
    background-color: ${AppColors.white};

    &::before {
      content: "";
      position: relative;
      top: -12px;
      display: block;
      height: 2px;
      width: 100%;
      background-color: ${AppColors.white};
    }

    &::after {
      content: "";
      position: relative;
      bottom: -10px;
      display: block;
      height: 2px;
      width: 100%;
      background-color: ${AppColors.white};
    }
  }
`;

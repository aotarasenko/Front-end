import {
  AppColors,
  AppFontSizes,
  AppSizes,
} from "../../../../styles/variables";
import styled from "styled-components";

export const NavMenuStyled = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${AppSizes.tablet}) {
    flex-direction: column;
  }

  li {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    list-style: none;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      width: 1.5px;
      height: 50%;
      border-radius: 75%;
      background-color: ${AppColors.neutral};
      opacity: 0.4;
    }

    svg {
      font-size: ${AppFontSizes.medium};
      color: ${AppColors.white};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid transparent;
      transition: 0.4s border-bottom ease;
      text-decoration: none;
      color: ${AppColors.white};

      &:hover {
        background-color: ${AppColors.dark};
        cursor: poiner;
        transition: 0.4s background-color ease;
      }
    }
  }
`;
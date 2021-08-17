import styled from "styled-components";
import { AppColors, AppSizes } from "../../../styles/variables";

export const NavBarStyled = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 5;
  min-width: 40px;
  width: 100%;
  background-color: ${AppColors.primary};

  @media screen and (min-width: ${AppSizes.tablet}) {
    top: 50%;
    right: 0;
    left: auto;
    bottom: auto;
    max-width: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transform: translateY(-50%);
  }
`;
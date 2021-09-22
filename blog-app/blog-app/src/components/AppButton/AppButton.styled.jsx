import styled from "styled-components";
import { AppColors, AppFontSizes, AppSizes } from "../../styles/variables";

export const AppButtonStyled = styled.button`
  position: ${({ position }) => position || "static"};
  bottom: 50px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin || "0"};
  min-width: 40px;
  min-height: 40px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${({ isFavorited }) =>
    isFavorited ? "transparent" : AppColors.primary} !important;
  color: ${({ isFavorited }) =>
    isFavorited ? AppColors.primary : AppColors.white};
  font-size: ${AppFontSizes.medium};

  &:hover {
    cursor: pointer;
    background-color: ${AppColors.light};
  }

  @media screen and (min-width: ${AppSizes.tablet}) {
    position: static;
    background-color: ${AppColors.dark};

    &:hover {
      background-color: ${AppColors.light};
    }
  }
`;

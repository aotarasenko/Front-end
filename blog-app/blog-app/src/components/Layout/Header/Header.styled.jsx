import styled from "styled-components";
import { AppColors, AppFontSizes } from "../../../styles/variables";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${AppColors.light};

  a, button {
    margin: 0 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${AppColors.white};
    opacity: 0.5;
    text-decoration: none;
    font-size: ${AppFontSizes.medium};
    font-weight: bold;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
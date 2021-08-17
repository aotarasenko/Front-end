import styled from "styled-components";
import { AppColors } from "../../../styles/variables";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${AppColors.light};

  a {
    margin: 0 8px;
    color: ${AppColors.white};
    opacity: 0.5;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      opacity: 1;
    }
  }
`;
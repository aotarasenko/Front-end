import styled from "styled-components";
import { AppColors, sidebarSize } from "../../styles/variables";

export const MainContentStyled = styled.main`
  padding-left: ${sidebarSize};
  height: 100vh;
  background-color: ${AppColors.light};
  box-sizing: border-box;
`;

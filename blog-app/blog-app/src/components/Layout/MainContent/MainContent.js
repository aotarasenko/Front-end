import styled from "styled-components";
import { AppColors } from "../../styles/variables";

export const MainContent = () => {
  return <MainContentStyled />;
};

export const MainContentStyled = styled.main`
  padding: 12px;
  height: 100vh;
  background-color: ${AppColors.light};
  box-sizing: border-box;
`;

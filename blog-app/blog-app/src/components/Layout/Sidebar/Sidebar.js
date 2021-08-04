import { FlexColumn } from "../../styles/generalStyles";
import { Footer } from "../Footer/Footer";
import { NavMenu } from "../Navigation/NavMenu";

import styled from "styled-components";
import { AppColors, AppSizes, sidebarSize } from "../../styles/variables";

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <FlexColumn flexSpacing="flex-end">
        <NavMenu />
        <Footer />
      </FlexColumn>
    </SidebarStyled>
  );
};

export const SidebarStyled = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  display: flex;
  padding: 30px 10px;
  width: 100%;
  height: 100vh;
  background-color: ${AppColors.dark};
  color: ${AppColors.white}
  transition: 0.4s height ease;
  overflow-y: auto;
  box-sizing: border-box;

  @media screen and (min-width: ${AppSizes.mobile}){
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    min-width: 0;
    width: ${sidebarSize};
  }
`;

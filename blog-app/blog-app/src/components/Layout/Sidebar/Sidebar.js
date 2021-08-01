import { SidebarStyled } from "./SidebarStyle";
import { FlexColumn } from "../../styles/generalStyles";
import { Footer } from "../Footer/Footer";

export const Sidebar = () => {
  return (
    <>
      <SidebarStyled>
        <FlexColumn flexSpacing="flex-end">
          <Footer />
        </FlexColumn>
      </SidebarStyled>
    </>
  );
};

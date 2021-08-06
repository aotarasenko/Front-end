import { FlexRow } from "../../styles/generalStyles";
import styled from "styled-components";
import { AppColors, AppFontSizes } from "../../styles/variables";

export const Footer = () => {
  return (
    <Copyright>
      <FlexRow flexSpacing="center">
        &#169; Created By Andrey Tarasenko With &#x2661;
      </FlexRow>
    </Copyright>
  );
};

export const Copyright = styled.footer`
  padding: 20px 0;
  color: ${AppColors.white};
  font-size: ${AppFontSizes.small};
`;

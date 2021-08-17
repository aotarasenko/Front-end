import { FlexRow } from "../../styles/generalStyles";
import { Copyright } from "./Footer.styled";

export const Footer = () => {
  return (
    <Copyright>
      <FlexRow flexSpacing="center">
        &#169; Created By Andrey Tarasenko With &#x2661;
      </FlexRow>
    </Copyright>
  );
};

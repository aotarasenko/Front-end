import { FlexRow } from "../../styles/generalStyles";
import { Copyright } from "./FooterStyle";

export const Footer = () => {
  return (
    <Copyright>
      <FlexRow flexSpacing="center">
        &#169; Created By Andrey Tarasenko with &#x2661;
      </FlexRow>
    </Copyright>
  );
};

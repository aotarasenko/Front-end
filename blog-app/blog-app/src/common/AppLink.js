import styled from "styled-components";
import { AppColors } from "../styles/variables";

export const AppLink = (props) => {
  return <AppLinkStyled href={props.link}>{props.text}</AppLinkStyled>;
};

const AppLinkStyled = styled.a`
  display: flex;
  padding: 8px;
  font-weight: bold;
  color: ${AppColors.white};
`;

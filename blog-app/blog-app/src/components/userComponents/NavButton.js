import styled from "styled-components";
import { AppColors, AppFontSizes } from "../styles/variables";
import { FlexRow } from "../styles/generalStyles";

export const NavButton = (props) => {
  return (
    <NavButtonStyled key={props.id}>
      <FlexRow flexSpacing="flex-start">
        {props.icon}
        <FlexRow flexSpacing="flex-start">
          <a href={props.link}>{props.text}</a>
        </FlexRow>
      </FlexRow>
    </NavButtonStyled>
  );
};

export const NavButtonStyled = styled.li`
  list-style: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${AppColors.white};
    cursor: pointer;
  }

  svg {
    font-size: ${AppFontSizes.medium};
    color: ${AppColors.white};
  }

  a {
    padding: 10px 8px;
    color: ${AppColors.white};
    text-decoration: none;
  }
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ActiveMenu } from "../../interractiveComponents/ActiveMenu";
import { AppLink } from "../../interractiveComponents/AppLink";
import { AppColors } from "../../styles/variables";

export const Header = () => {
  return (
    <HeaderStyled>
      <NavLink to="/world">Home</NavLink>
      <AppLink link="#" text="Log In" />
      <AppLink link="#" text="Sing In" />
      <ActiveMenu />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: ${AppColors.light};

  a {
    color: ${AppColors.white};
    opacity: 0.5;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      opacity: 1;
    }
  }
`;

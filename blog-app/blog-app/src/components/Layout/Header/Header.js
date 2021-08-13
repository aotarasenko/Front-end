import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppColors } from "../../styles/variables";
import { Avatar } from "../../interractiveComponents/Avatar";

export const Header = () => {
  return (
    <HeaderStyled>
      <Avatar imgUrl="https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg" />
      <div>
        <NavLink to="/world">Home</NavLink>
        <NavLink to="#">Log In</NavLink>
        <NavLink to="#">Sing In</NavLink>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${AppColors.light};

  a {
    margin: 0 8px;
    color: ${AppColors.white};
    opacity: 0.5;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      opacity: 1;
    }
  }
`;

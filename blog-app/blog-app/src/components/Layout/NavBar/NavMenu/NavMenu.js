import {
  AppColors,
  AppFontSizes,
  AppIcons,
  AppSizes,
} from "../../../styles/variables";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavMenu = ({ isSizeForText }) => {
  const menuItems = [
    { title: "My Posts", linkTo: "/home", icon: AppIcons.home },
    { title: "Favorites", linkTo: "/favorites", icon: AppIcons.favorite },
    {
      title: "Subscriptions",
      linkTo: "/subscriptions",
      icon: AppIcons.subscription,
    },
    { title: "World Posts", linkTo: "/world", icon: AppIcons.world },
  ];

  return (
    <NavMenuStyled>
      {menuItems.map((item) => {
        return (
          <li key={item.title + Math.random()}>
            <NavLink to={item.linkTo}>
              {item.icon} {isSizeForText && item.title}
            </NavLink>
          </li>
        );
      })}
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    list-style: none;

    svg {
      font-size: ${AppFontSizes.medium};
      color: ${AppColors.white};
    }

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid transparent;
      padding: 20px;
      transition: 0.4s border-bottom ease;
      text-decoration: none;
      color: ${AppColors.white};

      &:hover {
        border-color: ${AppColors.white};
        cursor: poiner;
        transition: 0.4s border-bottom ease;
      }
    }
  }
`;

import { AppColors, AppFontSizes, AppIcons } from "../../../styles/variables";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavMenu = ({ isSizeForText }) => {
  const menuItems = [
    {
      title: "My Posts",
      linkTo: "/home",
      icon: AppIcons.home,
    },
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
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    list-style: none;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      width: 1.5px;
      height: 50%;
      border-radius: 75%;
      background-color: ${AppColors.neutral};
      opacity: 0.4;
    }

    svg {
      font-size: ${AppFontSizes.medium};
      color: ${AppColors.white};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid transparent;
      transition: 0.4s border-bottom ease;
      text-decoration: none;
      color: ${AppColors.white};

      &:hover {
        background-color: ${AppColors.dark};
        cursor: poiner;
        transition: 0.4s background-color ease;
      }
    }
  }
`;

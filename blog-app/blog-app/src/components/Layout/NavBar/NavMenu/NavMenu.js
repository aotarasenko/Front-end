import { AppIcons } from "../../../../styles/variables";
import { NavLink } from "react-router-dom";
import { NavMenuStyled } from "./NavMenu.styled";

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
    { title: "Profile", linkTo: "/profile", icon: AppIcons.profile },
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

import { FaStar } from "react-icons/fa";
import { AiFillLike, AiOutlineGlobal } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import styled from "styled-components";
import { NavButton } from "../../userComponents/NavButton";

export const NavMenu = () => {
  const menuItems = [
    { id: 1, title: "My Posts", link: "/posts", icon: <FaStar /> },
    { id: 2, title: "Favorites", link: "/favorites", icon: <AiFillLike /> },
    {
      id: 3,
      title: "Subscriptions",
      link: "/subscriptions",
      icon: <BsFillBookmarkFill />,
    },
    { id: 4, title: "World Posts", link: "/world", icon: <AiOutlineGlobal /> },
  ];

  return (
    <NavMenuStyled>
      {menuItems.map((item) => {
        return (
          <NavButton
            key={item.id.toString()}
            text={item.title}
            link={item.link}
            icon={item.icon}
          />
        );
      })}
    </NavMenuStyled>
  );
};

export const NavMenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

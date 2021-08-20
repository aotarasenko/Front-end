import { NavLink } from "react-router-dom";
import { Avatar } from "../../../common/Avatar";
import { Container, FlexRow } from "../../../styles/generalStyles";
import { HeaderStyled } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <FlexRow>
          <Avatar imgUrl="https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg" />
          <FlexRow flexSpacing="flex-end" flexWrap="wrap">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/auth/login">Log In</NavLink>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </FlexRow>
        </FlexRow>
      </Container>
    </HeaderStyled>
  );
};

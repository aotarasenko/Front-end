import styled from "styled-components";
import { AppColors, AppFontSizes, AppSizes } from "../../styles/variables";

export const AppButton = (props) => {
  return (
    <AppButtonStyled
      onClick={props.handle}
      color={props.color}
      position={props.position}
      isFavorited={props.isFavorited}
      likesCount={props.likesCount}
    >
      {props.content}
      {props.likesCount}
    </AppButtonStyled>
  );
};

export const AppButtonStyled = styled.button`
  position: ${({ position }) => position || "static"};
  bottom: 50px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ isFavorited }) =>
    isFavorited ? "transparent" : AppColors.primary} !important;
  color: ${({ isFavorited }) =>
    isFavorited ? AppColors.primary : AppColors.white};
  font-size: ${AppFontSizes.medium};

  &:hover {
    cursor: pointer;
    background-color: ;
  }

  @media screen and (min-width: ${AppSizes.tablet}) {
    position: static;
    background-color: ${AppColors.dark};
  }
`;

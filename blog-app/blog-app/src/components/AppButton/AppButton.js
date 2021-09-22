import { AppButtonStyled } from "./AppButton.styled";

export const AppButton = (props) => {
  return (
    <AppButtonStyled
      onClick={props.handle}
      color={props.color || "transparent"}
      position={props.position}
      isFavorited={props.isFavorited || ""}
      likesCount={props.likesCount || ""}
      margin={props.margin}
    >
      {props.content}
      {props.likesCount}
    </AppButtonStyled>
  );
};

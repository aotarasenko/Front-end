import { useState } from "react";
import styled from "styled-components";
import { AppColors, AppIcons } from "../styles/variables";

export const LikeButton = ({ state }) => {
  const [isLiked, setLiked] = useState(state);
  const toggleLike = () => setLiked(!isLiked);

  return (
    <LikeButtonStyled isLiked={isLiked} onClick={toggleLike}>
      {AppIcons.like}
    </LikeButtonStyled>
  );
};

const LikeButtonStyled = styled.button`
  border: 2px solid ${AppColors.light};
  padding: 10px;
  color: ${AppColors.light};

  &:hover {
    cursor: pointer;
  }

  ${({ isLiked }) =>
    isLiked &&
    `
      background-color: ${AppColors.primary};
      border-color: ${AppColors.primary};
      color: ${AppColors.white};
      cursor: pointer;
    `}
`;

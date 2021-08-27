import axios from "axios";
import styled from "styled-components";
import { ROOT_URL } from "../api/auth/actions";
import { AppColors, AppIcons } from "../styles/variables";

export const LikeButton = (props) => {
  const toggleLike = () => {
    try {
      if (props.favorited) {
        axios.delete(`${ROOT_URL}/articles/${props.postSlug}/favorite`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
      } else {
        axios.post(
          `${ROOT_URL}/articles/${props.postSlug}/favorite`,
          {},
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );
      }
    } catch (e) {
      console.log(e);
    } finally {
      props.update();
    }
  };

  return (
    <LikeButtonStyled
      isLiked={props.favorited}
      onClick={toggleLike}
      disabled={props.isDisable}
    >
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

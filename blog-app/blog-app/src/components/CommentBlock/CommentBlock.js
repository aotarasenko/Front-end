import axios from "axios";
import { useState } from "react";
import { ROOT_URL } from "../../api/auth/actions";
import { AppButton } from "../../common/AppButton/AppButton";
import { Avatar } from "../../common/Avatar";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppIcons } from "../../styles/variables";
import { CommentBlockStyled } from "./CommentBlock.styled";

export const CommentBlock = (props) => {
  const [comment, setCommet] = useState(props);
  const deleteComment = async (e) => {
    e.preventDefault();

    await axios.delete(
      `${ROOT_URL}/articles/${props.slug}/comments/${props.id}`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    setCommet("");
  };

  return (
    <>
      {comment ? (
        <CommentBlockStyled>
          <FlexColumn>
            <FlexRow>
              <Avatar imgUrl={comment.author.image} />
              <FlexColumn>
                <p>{comment.author.username}</p>
                <p>{comment.createdAt}</p>
              </FlexColumn>
              <AppButton
                color={AppColors.error}
                content={AppIcons.close}
                handle={deleteComment}
              />
            </FlexRow>
            <p>{comment.body}</p>
          </FlexColumn>
        </CommentBlockStyled>
      ) : (
        ""
      )}
    </>
  );
};

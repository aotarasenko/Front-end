import { useState } from "react";
import { useAuthState } from "../../api/auth/authenticate";

import { AppButton } from "../../components/AppButton/AppButton";
import { Avatar } from "../../components/Avatar";
import { useApi } from "../../hooks/useApi";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppIcons } from "../../styles/variables";
import { CommentBlockStyled } from "./CommentBlock.styled";

export const CommentBlock = (props) => {
  const [comment, setCommet] = useState(props);
  const user = useAuthState();
  const { deleteCommentApi } = useApi();
  const deleteComment = async (e) => {
    e.preventDefault();
    await deleteCommentApi(props.slug, props.id);
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
              {comment.author.username === user.user.username ? (
                <AppButton
                  color={AppColors.error}
                  content={AppIcons.close}
                  handle={deleteComment}
                />
              ) : (
                ""
              )}
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

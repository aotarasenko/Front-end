import { useState } from "react";
import { useHistory } from "react-router";
import { useAuthState } from "../../api/auth/authenticate";

import { AppButton } from "../../components/AppButton/AppButton";
import { Avatar } from "../../components/Avatar";
import { useApi } from "../../hooks/useApi";
import { Container, FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppIcons } from "../../styles/variables";
import { CommentBlockStyled } from "./CommentBlock.styled";

export const CommentBlock = (props) => {
  const [comment, setCommet] = useState(props);
  const user = useAuthState();
  const history = useHistory();
  const { deleteCommentApi } = useApi();
  const deleteComment = async (e) => {
    e.preventDefault();
    await deleteCommentApi(props.slug, props.id);
    setCommet("");
  };

  return (
    <Container>
      {comment ? (
        <CommentBlockStyled>
          <FlexColumn>
            <FlexRow>
              <Avatar imgUrl={comment.author.image} />
              <FlexColumn>
                <button
                  type="link"
                  onClick={() => {
                    history.push({
                      pathname: `/profiles/${comment.author.username}`,
                      state: {
                        author: comment.author.username,
                        currentUser:
                          comment.author.username === user.user.username
                            ? true
                            : false,
                      },
                    });
                  }}
                >
                  {comment.author.username}
                </button>
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
            <div>{comment.body}</div>
          </FlexColumn>
        </CommentBlockStyled>
      ) : (
        ""
      )}
    </Container>
  );
};

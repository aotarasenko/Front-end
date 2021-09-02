import { Avatar } from "../../common/Avatar";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { CommentBlockStyled } from "./CommentBlock.styled";

export const CommentBlock = (comment) => {
  return (
    <CommentBlockStyled>
      <FlexColumn>
        <FlexRow>
          <Avatar imgUrl={comment.author.image} />
          <FlexColumn>
            <p>{comment.author.username}</p>
            <p>{comment.createdAt}</p>
          </FlexColumn>
        </FlexRow>
        <p>{comment.body}</p>
      </FlexColumn>
    </CommentBlockStyled>
  );
};

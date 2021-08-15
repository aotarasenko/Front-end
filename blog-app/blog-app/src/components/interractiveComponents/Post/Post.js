import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../styles/generalStyles";
import { AppColors, AppFontSizes } from "../../styles/variables";
import { Avatar } from "../Avatar";
import { LikeButton } from "../LikeButton";

export const Post = (post) => {
  return (
    <PostStyled>
      <div className="post-heading">
        <Avatar imgUrl={post.author.image} />
        <FlexColumn flexSpacing="flex-start">
          <p>{post.author.username}</p>
          <p>{post.createdAt}</p>
        </FlexColumn>
        <FlexRow flexSpacing="flex-end">
          <LikeButton state={false} />
          <p>{post.favoritesCount}</p>
        </FlexRow>
      </div>
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-text">{post.description}</p>
      </div>
      <hr />
      <FlexRow className="post-tags" flexSpacing="flex-end">
        {post.tagList.map((tag) => {
          return "#" + tag;
        })}
      </FlexRow>
    </PostStyled>
  );
};

const PostStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 12px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  div.post-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-size: ${AppFontSizes.small};
    }
  }

  hr {
    width: 100%;
  }
`;

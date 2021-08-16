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
        <p className="post-body">{post.body}</p>
      </div>
      <hr />
      <FlexRow flexSpacing="space-between">
        <p className="post-description">{post.description}</p>
        <p className="post-tags">
          {post.tagList.map((tag) => {
            return "#" + tag;
          })}
        </p>
      </FlexRow>
    </PostStyled>
  );
};

const PostStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 12px;
  border-top: 5px solid ${AppColors.neutral};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  .post-content {
    margin-top: 20px;
    border-top: 1px solid ${AppColors.neutral};
  }

  .post-title {
    color: ${AppColors.light};
  }

  .post-description,
  .post-tags {
    color: ${AppColors.neutral};
    opacity: 0.7;
    font-style: italic;
  }

  div.post-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-size: ${AppFontSizes.small};
    }
  }
`;

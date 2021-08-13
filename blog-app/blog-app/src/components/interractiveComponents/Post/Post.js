import styled from "styled-components";
import { Avatar } from "../Avatar";
import { LikeButton } from "../LikeButton";

export const Post = (post) => {
  return (
    <PostStyled>
      <div className="post-heading">
        <Avatar imgUrl="https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg" />
        <LikeButton state={false} />
      </div>
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-text">{post.text}</p>
      </div>
      <div className="post-tags">{post.tags}</div>
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
  }
`;
